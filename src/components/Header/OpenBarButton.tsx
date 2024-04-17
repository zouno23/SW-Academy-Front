"use client"
import { Button } from "@/components/ui/button";
import { AlignJustify } from 'lucide-react';
import { useSearchParams, usePathname } from "next/navigation";
import Link from "next/link";
import { useCallback } from "react";
function OpenBarButton() {
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
    return ( <Button  className='md:hidden' variant="ghost" >
        <Link href={pathname + "?" + createQueryString("sidebar","true")}>
        <AlignJustify strokeWidth={3} className="size-7"/>
        </Link>
        </Button> );
}

export default OpenBarButton;