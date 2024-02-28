"use client"

import { Button } from "@/components/ui/button";
import { LayoutDashboard,UserRoundCog,Notebook,Airplay,Webhook,Brain} from 'lucide-react';
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect } from "react";
import Link from "next/link";

const Navigation = [{
  page: "Dashboard",
  icon: <LayoutDashboard className="siz-5" />,
},
{
  page:"Edit Profile",
  icon :<UserRoundCog className="size-5"/>,
},
{
  page:"Courses",
  icon: <Notebook className='size-5'/>
},
{
  page:"Live Stream",
  icon:<Airplay className="size-5"/>
},
{
  page:"Quiz",
  icon:<Webhook className="size-5"/>
},
{
  page:"ChatBot",
  icon:<Brain className="size-5"/>
}
]
export default function NavigationButtons() {
    const pathname = usePathname()
    const state = pathname.split("/")[2]
    useEffect(()=>
    console.log(state)
    ) 
    return (<div className="grid w-full gap-4">
              {
              Navigation.map((item, index) => 
              <Button className={cn("flex w-full gap-3 justify-start p-2 bg-white text-gray-400 hover:bg-blue-600/65 hover:text-white dark:bg-transparent dark:text-gray-400 dark:hover:bg-blue-600/65 dark:hover:text-white", item.page.toLocaleLowerCase()==state  && "bg-blue-600 text-white dark:bg-blue dark:text-white dark:hover:bg-blue-600")}>
                {item.icon}
                <h4 className=" text-base">{item.page} </h4>  
                </Button>
                )
               }

          </div>);}