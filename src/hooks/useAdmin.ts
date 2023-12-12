import { http } from "@/config"
import { apiResponse, userType } from "@/types";
import { useState } from "react"
import { useQuery } from "react-query"

export type engineerConfig = {
    enableFetchEngineers?: boolean;
};

export const useAdmin = (config?: engineerConfig) => {

    const [engineersData, setEngineersData] = useState<userType[]>([]);

    const fetchEngineers = useQuery(['fetchEngineers'],async () => {
        try {
            const req: any = await http.get('admin/engineers')
            return req.data;
        } catch (error) {
            throw error;
        }
    }, {
        enabled: Boolean(config?.enableFetchEngineers),
        onSuccess: (val: apiResponse) => {
            if (val.status) {
                const res: any = val.data
                setEngineersData(res)
            }
        }
    })

    return {
        fetchEngineers,
        engineersData,
    }
}