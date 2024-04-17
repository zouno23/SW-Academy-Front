"use client"
import { Button } from "@/components/ui/button";
import PasswordInput from "@/components/PasswordInput";
import { useRef } from "react";
import { resetpassword } from "@/app/Actions/ForgotPasswordActoins";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
function ResetPasswordForm() {
 const FormRef =useRef <HTMLFormElement>(null)
const {toast} = useToast()
const router = useRouter()
    return ( 
    <form className="flex justify-center items-center gap-y-4 flex-col w-3/4 bg-transparent"
    ref={FormRef}
    action={async (FormData : FormData)=>{
        
        FormRef.current?.reset();
        const {error,response} = await resetpassword (FormData)
        if(response){
            router.push("/login")
        }
        else if(error){
            toast({
                variant:"error",
                icon:"error",
                description:`${error?.message}`
            })
        }
        else{
            toast({
              variant:"error",
              description:`Sorry we encountered a server error`,
              icon:"error"
            })
          }
        }} >
         <h1 className="font-bold lg:text-3xl md:text-xl sm:text-lg text-center">Reset password</h1>
                <h3 className=" font-medium lg:text-sm text-xs text-center lg:mx-10 text-[#525252]">Please enter your new password</h3>
                    <PasswordInput name="password"/>
                    <PasswordInput/>
                    <Button value="submit new password">Submit new password</Button>

    </form> );
}

export default ResetPasswordForm;