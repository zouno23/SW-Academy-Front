"use server"

import { Button } from "@/components/ui/button";
import ProductsHeader from "./ProductsHeader";
import SingleProduct from "./SingleProduct";
import { Counter } from "./counter";
import { Data } from "./Data";
import { redirect } from "next/navigation";
import { GetProducts } from "@/app/Actions/DashboardActions";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { teacher } from "./DataStructure";
import { useState } from "react";
import ModalEdit from "./modelEdit";// eslint-disable-next-line @next/next/no-async-client-component
import { Getliste } from "@/app/Actions/Admin/TeacherManagement";
import error from "next/error";

 async function ProductsTable( 
    {searchParams,}:
    {
        searchParams:{
            [key: string] : string | undefined
        }
    }) 
    {
        let Lessons =  await Data()
    
    // if(error) throw error;
  const [searchTerm, setSearchTerm] = useState('');
const [modalOpenn, setModalOpenn] = useState(false);
const [modif, setModif] = useState<teacher>({
    teacherName: "Bob Johnson",
    email: "bob.johnson@example.com",
    number: "444-555-6666",
    courses: "4",
    availability: "false",
    status:true
  });
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setSearchTerm(event.target.value);
    };
    
  const filteredTeachers = Lessons.filter((teacher: teacher) => {
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return (
            teacher.teacherName.toLowerCase().includes(lowerCaseSearchTerm) ||
            teacher.email.toLowerCase().includes(lowerCaseSearchTerm)
        );
    });
    let ListePage = searchParams.count || "1"

    
if(filteredTeachers){
    Lessons=filteredTeachers
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
        <div className=" flex w-full justify-between p-8">
            <h3 className="text-3xl font-bold">Instructors</h3>
            <div className="flex  relative w-7/12">
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
        </div>


        <div className=" h-max divide-y-[1px] overflow-x-auto   p-8 min-h-max">
            <ProductsHeader/>
            { Lessons.map((index,i)=>
                i< (5 * parseInt(ListePage))  &&  i> ((5 * (parseInt(ListePage)-1))-1) ?
                <SingleProduct Data={index} openModal={() => {setModalOpenn(true);setModif(index);
                }}  key={i} /> : null )}
            <Counter searchParams={searchParams} max={Math.round(Lessons.length/5)}/>
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