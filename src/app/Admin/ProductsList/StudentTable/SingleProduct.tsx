"use client"
import Image from "next/image";
import p from "@/../public/next.svg"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";
import { Lesson, teacher } from "./DataStructure";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Bell, FilePen, Inbox, MoreVertical, Trash2 } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";


// eslint-disable-next-line react-hooks/rules-of-hooks

function SingleProduct({Data, openModal, }:{Data:teacher,openModal:any }) {
     
    return ( 
    <div className="w-full h-28 flex items-center text-black/50 justify-between font-medium hover:bg-slate-50 hover:text-black/80 dark:hover:bg-slate-950 dark:text-white">
        <div className="flex h-full w-1/4 items-center gap-6 p-4 text-black  dark:text-white">
        <Image alt="product" width={120} height={120} src={p} className="size-24 bg-slate-200 rounded-lg px-3"/>
        <p className={Data.Status ? 'text-green-700 ' : 'text-red-700 '}>{Data.teacherName}</p>

        
        </div>
        <div className=" flex w-5/6  px-5 justify-between">
        <p className=" w-4/12 "> {Data.email}</p>
        <p className=" w-3/12 text-start pl-[60px]     "> {Data.numero}</p>
        <p className=" w-1/6 text-start pl-[20px] "> {Data.Courses}</p>
       {!Data.Status && <p className=" w-1/6">-- </p>}
        {Data.Status && <p className=" w-1/6 "> {Data.availability}</p>} 

        <div className=" text-end pr-[40px] flex justify-center">
        <Popover>
                <PopoverTrigger className="size-9 rounded-full p-0   flex justify-center items-center ">
                {/* <Bell className="size-4" strokeWidth={1.75} />  */}
                <MoreVertical />
                </PopoverTrigger>
                <PopoverContent className="w-40 bg-white rounded shadow-xl px-4 py-5 space-y-2 font-medium text-gray-800 p-6 max-w-md">
              <Button className="size-8 place-content-center rounded-xl w-full flex space-x-2  p-0 border  hover:bg-red-600/10    " variant="ghost">
                <Trash2 className="size-4 text-red-800 " strokeWidth={1.75} /> 
                <span>Remove</span>
              </Button>
              <Button className="size-8  rounded-xl w-full flex space-x-2  p-0 border " onClick={openModal} variant="ghost">
                <FilePen  className="size-4 text-green-700 " strokeWidth={1.75} /> 
                <span className=" pr-6 flex tracking-wide">Edit</span>
              </Button>
              
              </PopoverContent>
            </Popover>
        </div>
        </div>
        
    </div> );
}

export default SingleProduct;