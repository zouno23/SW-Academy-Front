"use server"
import { cookies } from "next/headers";
import { AxiosResponseType } from "./AxiosTypes";



export const SetJWT = (response:AxiosResponseType)=>{
    const oneDay=1*24*60*60; // 1 day in seconds
   cookies().set("jwt",response.headers?.jwt , {maxAge:oneDay})
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