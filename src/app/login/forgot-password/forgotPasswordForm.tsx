"use client"

import {  useToast } from "@/components/ui/use-toast"
import { ChevronLeft } from 'lucide-react';
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { forgotPassword } from "@/app/Actions/ForgotPasswordActoins";
import { useRef } from "react";


function ForgotPasswordForm() {

  const router = useRouter()
  const FormRef=useRef <HTMLFormElement>(null)
  const {toast}=useToast();
  const newSearchParams = new URLSearchParams( {pageState :"forgot-password-verif-code"})

    return ( 
        <form className="flex justify-center items-center gap-y-4 flex-col w-3/4 bg-transparent" ref={FormRef} 
        action={
          async (FormData)=>{
          FormRef.current?.reset();
          const {error,response}= await forgotPassword (FormData);
          if(response){
            toast({
              description:` Check your email for the verification code`,
              variant:"verified" ,
              icon:"verified",
            } )
            router.push(`?${newSearchParams}`);
          }else if (error){
            toast({
              variant:"error",
              icon:"error",
              description:`${error?.message}`
            })
          } else{
            toast({
              variant:"error",
              description:`Sorry we encountered a server error`,
              icon:"error"
            })
          }
          }}>
               
                <h1 className="font-bold lg:text-3xl md:text-xl sm:text-lg text-center">Forgot password</h1>
                <h3 className=" font-medium lg:text-sm text-xs text-center lg:mx-10 text-[#525252]">Enter your email and we&apos;ll send you a verification code to reset your password</h3>
                <Input
                  type="email"
                  name="email"
                  className=" border-2 border-[#0D47A1] text-[#0D47A1]font-medium  rounded-lg  block w-9/12 p-2.5 focus-visible:ring-2  focus-visible:border focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
                  placeholder="exemple@gmail.com"
                  required
                />
                <Button 
                type="submit" 
                className="font-medium text-sm" 
                >
                   Send code </Button>
                  
                <Button variant="ghost" > 
                  <Link href="/login" className='flex font-semibold justify-center items-center text-sm text-[#0D47A1] '>
                    <ChevronLeft />
                    Back to Login Page
                  </Link>
                </Button>
              </form>
     );
}

export default ForgotPasswordForm;