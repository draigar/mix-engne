import { http } from "@/config"
import { authStore } from "@/store";
import { AuthData, UserDataType, apiResponse, updateProfile } from "@/types";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "react-query"

export type userConfig = {
    enableFetchDetails?: boolean;
};

export const useUser = (config?: userConfig) => {
    const userD = authStore;

    const updateProfile = useMutation(async (data: updateProfile) => {
        try {
            const req: any = await http.put('users/profile/update', data);
            return req.data;
        } catch (error) {
            return error
        }
    }, {
        onError(error, variables, context) {
            console.log('t error', error)
        },
    })
    
    const updatePassword = useMutation(async (data: {oldPassword: string, password: string}) => {
        try {
            const req: any = await http.put('users/profile/updatePassword', data);
            return req.data;
        } catch (error) {
            return error
        }
    })

    const fetchUserDetails = useQuery(['fetchUserDetails'],async () => {
        try {
            const req: any = await http.get('users/details')
            return req.data;
        } catch (error) {
            return error
        }
    }, {
        enabled: Boolean(config?.enableFetchDetails),
        onSuccess: (val: apiResponse) => {
            if (val.data) {
                const data: any = val.data
                const auth: AuthData = {
                    access_token: userD.auth.access_token ?? ''
                };
                const user: UserDataType = data[0]
                const payload = {
                    auth,
                    user
                }
                Cookies.set("Auth", JSON.stringify(payload));
                authStore.setAuth(auth)
                authStore.setUser(user)
            }
        }
    })

    return {
        updateProfile,
        fetchUserDetails,
        updatePassword,
    }
}