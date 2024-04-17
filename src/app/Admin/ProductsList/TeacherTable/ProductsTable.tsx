"use client"

import { Button } from "@/components/ui/button";
import ProductsHeader from "./ProductsHeader";
import SingleProduct from "./SingleProduct";
import { Counter } from "./counter";
// import { Data } from "./Data";
import { redirect, useSearchParams } from "next/navigation";
import { GetProducts } from "@/app/Actions/DashboardActions";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { teacher } from "./DataStructure";
import { useState } from "react";
import ModalEdit from "../Model/modelEdit";// eslint-disable-next-line @next/next/no-async-client-component
import { Getliste } from "@/app/Actions/Admin/TeacherManagement";
import error from "next/error";
import Link from "next/link";

 function ProductsTable( 
    {
       Data
    }:
    {
       Data:Array<teacher>
    }) 
    {
    const searchParams = useSearchParams()
    console.log(Data)
    // if(error) throw error;
  const [searchTerm, setSearchTerm] = useState('');
const [modalOpenn, setModalOpenn] = useState(false);
const [modif, setModif] = useState<teacher>({
   _id:"fds",
    Name: "Bob Johnson",
    email: "bob.johnson@example.com",
    numero: "444-555-6666",
    Courses: "4",
    availability: "false",
    Status:true
  })
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    let Lessons = Data;
    let ListePage = searchParams.get("count") || "1"

  if(Lessons){
    const filteredTeachers = Lessons.filter((teacher: teacher) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            teacher.Name.toLowerCase().includes(lowerCaseSearchTerm) ||
            teacher.email.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });
    if(filteredTeachers){
        Lessons=filteredTeachers
    }
} 
    

    

    if(parseFloat(ListePage) % 1 !=0){
    ListePage = Math.round(parseInt(ListePage))+""
    redirect(`?count=${ListePage}`)
}
    if (parseInt(ListePage) > (Lessons.length/5)+1){
        ListePage = Math.round(Lessons.length/5) + ""
        redirect(`?count=${ListePage}`)
    }
    else if (parseInt(ListePage)<=0){
        ListePage = "1"
        redirect(`?count=${ListePage}`)
    }
    return (
    <div className="h-max bg-white border rounded-xl  divide-y-2 dark:bg-slate-900 ">
        <div className=" flex w-full justify-between  p-8">
            <h3 className="text-3xl font-bold">Instructors</h3>
           <div className="flex  w-7/12  ">
                <div className="flex ml-5  relative w-full">
                    <Input
                    
                    type="text"
                    className={"bg-[#f4f6f8]/70 border border-[E9F1FE]  rounded-lg  block  p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#c9ccd4]"}
                    placeholder="Search"
                    
                    value={searchTerm}
                    onChange={handleSearchChange}
                    /> 
                    
                    <Button type="button"  variant="ghost" className="absolute hover:bg-transparent right-0 " >
                    <Search />
                    </Button>
                    
                </div>
               
                <Link href={{
                    pathname:"/Admin/AddUser",
                    query:{user:"Teacher"}
                }}
                
                target="_blank">
                    <Button className="ml-5">
                        +
                    </Button>
                </Link>
                
            </div>        
        </div>


        <div className=" h-max divide-y-[1px] overflow-x-auto   p-8 min-h-max">
            <ProductsHeader/>
            { Lessons.map((index,i)=>
                i< (5 * parseInt(ListePage))  &&  i> ((5 * (parseInt(ListePage)-1))-1) ?
                <SingleProduct Data={index} openModal={() => {setModalOpenn(true);setModif(index);
                }}  key={i} /> : null )}
            <Counter searchParams={searchParams} max={Math.ceil(Lessons.length/5)}/>
        </div>

        {modalOpenn && (
        <ModalEdit
        Data={modif}
        closeModal={() => setModalOpenn(false)}
          
        />
      )}
    </div> 
    
    );
}

export default ProductsTable;