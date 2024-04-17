"use client"
import { Button } from "@/components/ui/button";
import { X } from 'lucide-react';
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback } from "react";
function CloseButton() {
    const pathname= usePathname()
    const searchParams = useSearchParams()
    const sideBarState = searchParams.get("sidebar") || "false";
    const createQueryString = useCallback(
        (name: string, value: string) => {
          const params = new URLSearchParams(searchParams.toString())
          params.set(name, value)
     
          return params.toString()
        },
        [searchParams]
      )
    return ( <Button  className='md:hidden absolute right-0 top-1 ' variant="ghost" >
        <Link href={pathname + "?" + createQueryString("sidebar","false")}>
        <X className="size-8 text-blue-800" strokeWidth={3}/>
        </Link>
        </Button> );
}

export default CloseButton;