import { http } from "@/config"
import { apiResponse } from "@/types";
import { servicesType } from "@/types/serviceTypes";
import { useState } from "react";
import { useQuery } from "react-query"

export type serviceConfig = {
    enableFetchServices?: boolean;
};

export const useServices = (config?: serviceConfig) => {

    const [serviceData, setServiceData] = useState<servicesType[]>([])

    const fetchServices = useQuery(['fetchServices'], async () => {
        try {
            const req: any = await http.get('service/all')
            return req.data;
        } catch (error) {
            throw error;
        }
    }, {
        enabled: Boolean(config?.enableFetchServices),
        onSuccess: (val: apiResponse) => {
            if (val.status) {
                const res: any = val.data;
                setServiceData(res);
            }
        }
    })

    return {
        fetchServices,
        serviceData,
    }
}