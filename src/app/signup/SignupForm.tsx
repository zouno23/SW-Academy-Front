"use client"; 

import {signup} from "@/app/Actions/AuthActions";
import React, { useRef} from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox"
import { Separator } from "@/components/ui/separator"
import  Link from "next/link";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import PasswordInput from "@/components/PasswordInput";
import GoogleAuthButton from "@/components/GoogleAuthButton";

export default  function SignupForm() {

 const {toast}= useToast()
 const router = useRouter()
 

  const FormRef = useRef <HTMLFormElement> (null)
    
  
  return (
    <main className=" font-poppins grow ">
     <form 
     ref={FormRef}
     action={async (FormData)=>{
      FormRef.current?.reset();
      const {error , response } =await signup(FormData);
      if (response){
        router.push("/dashboard")
      }
      else if(error){
        toast({
          variant:"error",
          icon:"error",
          description:`${error?.message}`,
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
     className="flex flex-col h-full  grow justify-center items-center  gap-3">
      <h1 className="font-bold text-3xl text-center">SIGN UP </h1>
      <div className="text-center font-light text-sm text-[#525252] flex items-center gap-2">
        <p>You already have an account?</p>
        <Button variant="link"  type="button" className="p-0 h-fit font-semibold text-[#0D47A1] text-sm">
        <Link href="/login" className="font-semibold text-[#0D47A1]">
          Login 
        </Link>
        </Button>
      </div>
      <Input 
      type="text"
      name="fullname"
      className="bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block w-9/12 p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
      placeholder="FullName" 
      required
      />
      <Input
        type="email"
        name="email"
        className="bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block w-9/12 p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
        placeholder="Email"
        required
      />
      <Input
        type="tel"
        name="number"
        className="bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block w-9/12 p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
        placeholder="Phone Number"
        required
      />
      <PasswordInput name="password" type="newPassword" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"/>
      <PasswordInput name="repeatpassword"/>
      
      <div className="flex items-start gap-2 w-9/12">
            <Checkbox
              id="terms&conditions agreement"
              className=" w-4 h-4 border-[0.5px] rounded mt-0.5 border-[#0D47A1] bg-[#E9F1FE] focus:ring-transparent data-[state=checked]:bg-[#0D47A1] data-[state=checked]:text-[#E9F1FE] "  
              required
            />
          
          <label
            htmlFor="terms&conditions agreement"
            className="text-sm font-medium text-[#0D47A1] dark:text-[#E9F1FE] select-none"
          >
            I agree to the terms and conditions
          </label>
        </div>
        
      <Button 
      type="submit"
      className=" text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95"> 
        Submit
      </Button>

      <div className="flex items-center gap-4 text-[#525252]">
        <Separator decorative className="w-32 bg-[#F0EDFF] "/>
        <span> 
          <b className="text-[#1C1C1C]">Signup</b> with others 
        </span> 
        <Separator decorative className="w-32  bg-[#F0EDFF]"/> 
      </div>
      
      <GoogleAuthButton/>
     
      
    </form>
    </main>
  );
}
