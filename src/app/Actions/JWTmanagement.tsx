import { cookies } from "next/headers";
import { AxiosResponseType } from "./AxiosTypes";

const cookieStore = cookies()


export const SetJWT = (response:AxiosResponseType)=>{
   
    cookies().set("jwt",response.headers?.jwt)
}

export const GetJWT = ()=>{
    const jwt = cookieStore.get('jwt')
    return (jwt?.value)
       
}