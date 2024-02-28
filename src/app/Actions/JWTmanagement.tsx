import { cookies } from "next/headers";
import { AxiosResponseType } from "./AxiosTypes";



export const SetJWT = (response:AxiosResponseType)=>{4
    
    cookies().set("jwt",response.headers?.jwt)
}

export const GetJWT = ()=>{
    const cookieStore = cookies()
    const jwt = cookieStore.get('jwt')
    return (jwt?.value)
       
}