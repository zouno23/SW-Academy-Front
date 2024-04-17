"use client"

import { Button } from "@/components/ui/button";
import { LayoutDashboard,UserRoundCog,Notebook,Airplay,Webhook,Brain,Folder,GalleryVerticalEnd} from 'lucide-react';
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { GetUserLocalStorage } from "@/app/Hooks/LocalStorage";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"


const Navigation = [{
  page: "Dashboard",
  icon: <LayoutDashboard className="siz-5" />,
},
{
  page:"Edit Profile",
  icon :<UserRoundCog className="size-5"/>,
},
{
  page:"Products",
  icon: <Folder className='size-5'/>
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

  const pathname = usePathname() // get the path of the current page
  var state = pathname.split("/")[2] //get the the current page name or path


  //making a use state for the button in  order to make it seem hovered if we are in a page of one of it's children
  const [isHere , setIsHere]= useState(false)
  //setting the function to make  it reactive
  const onCourses = ()=>{
    if (state === ('courses'||"bootcamps")){
      setIsHere(true)
    }else{setIsHere(!isHere);}
  }

    // making the Navigation button in a function component because we need to use it in multiple places
    const routingButton = (item :any, page: string | null) => {
      return(<Button className={cn("flex w-full gap-3 justify-start p-2 bg-white text-gray-400 hover:bg-blue-600/65 hover:text-white dark:bg-transparent dark:text-gray-400 dark:hover:bg-blue-600/65 dark:hover:text-white", item.page.toLocaleLowerCase().replace(" ","").localeCompare(state)==0 && "bg-blue-600 hover:bg-blue-600 text-white dark:bg-blue dark:text-white dark:hover:bg-blue-600")}>
        {item.icon}
        <h4 className=" text-sm" >{page}</h4>  
      </Button>)}
  
    const router = useRouter();

    const userData =GetUserLocalStorage();
    
    useEffect(()=>{
      if (userData?.Role != pathname.split( "/")[1])
      router.replace(`/${userData?.Role}/${pathname.split("/")[2]}`)
      if(state ===('courses'||"bootcamps"))
      setIsHere(true)
      else
      setIsHere(false)
    },[pathname,state])  


    return (<section className="grid w-full gap-4">
              {
              Navigation.map((item, index) => 
              
                item.page === "Products" ?
                <Accordion type="single" collapsible className="" key={index}>
                  <AccordionItem value="item-1" >
                    <AccordionTrigger onClick={()=> onCourses()}  type={undefined} className={cn("h-10 font-semibold items-center flex w-full gap-3 justify-start p-2 bg-white text-gray-400 hover:bg-blue-600/65 hover:text-white dark:bg-transparent dark:text-gray-400 dark:hover:bg-blue-600/65 dark:hover:text-white rounded-md ", isHere && "bg-blue-600/65 text-white  dark:bg-blue-600/65 dark:text-white rounded-md")} >
                    {item.icon}
                    <h4 className=" text-sm" >{item.page}</h4> 
                    </AccordionTrigger>
                    <AccordionContent className="ml-4 mt-1">
                      <Link href={`/${pathname.split("/")[1]+"/"}courses`} key={index}>
                        {routingButton({page:"Courses" , icon:<Notebook className='size-5'/>},"Courses")}
                      </Link>
                      {routingButton({page:"Bootcamps" , icon:<GalleryVerticalEnd className='size-5'/>},"Bootcamps")}
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>

                :<Link href={`/${pathname.split("/")[1]+"/"+item.page.toLocaleLowerCase().replace(" ","")}`} key={index}>
                {routingButton(item,item.page)}
                </Link>
              
                )
               }

          </section>);}