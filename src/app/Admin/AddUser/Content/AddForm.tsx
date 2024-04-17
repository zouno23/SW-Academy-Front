/* eslint-disable react-hooks/rules-of-hooks */
'use client'
import React, { useRef, useState } from 'react'
import {Input} from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Separator } from '@/components/ui/separator'
import { useToast } from "@/components/ui/use-toast";
import { useRouter, useSearchParams } from "next/navigation";
import { Console } from 'console'
import PasswordInput from '@/app/[Role]/editprofile/forms/PaswordInput'
import { AddTeacher } from '@/app/Actions/Admin/TeacherManagement'



export const Form = ({ rol }: { rol: string }) =>  {
  const  searchParams=useSearchParams()
  const Role= searchParams.get("user") ;
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const FormRef = useRef <HTMLFormElement> (null)
  const {toast} = useToast() 
  const router=useRouter()
const [role,setRole]=useState("")
  // let role = { name: { value: "Teacher" } };


  
  

  return (
    <div className='flex rounded-xl flex-col w-3/5  bg-white border-gray-200    h-4/5'>
           <h3 className=" p-8 text-3xl content-center  font-bold">Add Instructor</h3>
        <form 
        ref={FormRef}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        action={
          async (FormData)=>{
          FormRef.current?.reset();

          const {error,response} = await AddTeacher(FormData);
          // if(response){
          //    router.push("/dashboard")
          // }
          // else
           if (error){
            toast({
              variant:"error",
              description:`${error?.message}`,
              icon:"error"
            })
          }
          else{
            toast({
              variant:"error",
              description:`Sorry we encountered a server error`,
              icon:"error"
            })
          }
        }}
        className='container  flex pb-5  border-2 rounded-b-xl  flex-col  border-solid   bg-white border-gray-200  h-full'>
            <label className=' my-4 font-semibold capitalize' > Full name</label>
            <Input name="FullName" type='text'className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' placeholder='FullName'/>
            <label className='mb-4 font-semibold capitalize' > Email</label>
            <Input name="email"  className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' type='email' placeholder='E-mail'/>

            <label className='mb-5 font-semibold capitalize' > phone number</label>
            <Input className='mb-5 bg-slate-100  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' name="numero"   type='text' placeholder='## ### ###'/>

            <label className='mb-5 font-semibold capitalize ' > Role</label>
            <Input className='mb-5 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' name='Role' type='text' value={Role || ''} readOnly placeholder='Role' />
            <PasswordInput name="password" type="newPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
      <PasswordInput name="repeatpassword"/>
            <div className='flex content-center items-center justify-center '>
            
            
            <Button className=' text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95' variant="outline">
              Button
              </Button>
            </div>

        </form>
        <br />
        
        
        </div>
  )
}
