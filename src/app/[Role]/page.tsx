"use client"

import { redirect } from "next/navigation"; 
import { GetUserLocalStorage } from "../Hooks/LocalStorage";
import { useEffect } from "react";
function Page() {
    const role = GetUserLocalStorage()?.Role
    useEffect(()=>{
    redirect(`/${role}/dashboard`)})
    return ( 
        <>
        </>
     );
}

export default Page;