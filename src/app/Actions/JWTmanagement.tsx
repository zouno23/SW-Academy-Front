"use server"
import { cookies } from "next/headers";
import { AxiosResponseType } from "./AxiosTypes";



export const SetJWT = (response:AxiosResponseType)=>{
   cookies().set("jwt",response.headers?.jwt)
}

export const GetJWT =  ()=>{
    const cookieStore =  cookies()
    const jwt = cookieStore.get('jwt')
    if(jwt) return (jwt?.value)
    else return (null)
}

export const DestroyJWT =  ()=>{
    cookies().delete( 'jwt' ) ;
}