import { http } from "@/config";
import { authStore } from "@/store";
import { AuthData, UserDataType, apiResponse } from "@/types";
import Cookies from "js-cookie";
import { useMutation, useQuery } from "react-query"

export const useAuth = () => {

    const doLogin = useMutation(async (data: { email: string; password: string }) => {
        try {
            const req: any = await http.post('auth/signIn', data)
            return req.data;
        } catch (e) {
            console.log(e);
            throw e;
        }
    }, {
        onSuccess: (val: apiResponse) => {
            if (val.status) {
                const data: any = val.data
                const auth: AuthData = {
                    access_token: data.access_token ?? ''
                };
                const user: UserDataType = data.user
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
        doLogin,
    }
}