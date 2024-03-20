"use server"
import { cookies } from "next/headers";



export const SetRole = (role:string)=>{
    const oneDay=1*24*60*60; // 1 day in seconds
   cookies().set("role",role , {maxAge:oneDay})
}

export const GetRole =  ()=>{
    const cookieStore =  cookies()
    const role = cookieStore.get('role')
    if(role) return (role?.value)
    else return (null)
}

export const DestroyRole = async ()=>{
    cookies().delete('role') ;
}