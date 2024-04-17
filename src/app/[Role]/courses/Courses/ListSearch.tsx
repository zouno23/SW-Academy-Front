"use client"

import { Input } from "@/components/ui/input";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback, useRef } from "react";


function ListSearch() {
    const searchParams = useSearchParams()
    const inputRef = useRef <HTMLInputElement>(null)
    
    const createQueryString = useCallback(
        (name: string, value: string ) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
          params.set("count" , "1")
          return params.toString()
        },
        [searchParams]
      )
    const router = useRouter()
    const pathname = usePathname()
    
    return (  
        <search className= "shrink-0">
            <form onSubmit={(e)=>{
                e.preventDefault()
                router.replace(pathname +"?"+ createQueryString( "query", inputRef.current?.value ||""  ))}} >
            <Input className="bg-gray-100 rounded-xl" placeholder="Search" name="Search" ref={inputRef} />
            </form>
        </search> );
}

export default ListSearch;