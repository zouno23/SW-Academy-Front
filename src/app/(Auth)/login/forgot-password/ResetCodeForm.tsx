"use client"
import { codeVerif } from "@/app/Actions/ForgotPasswordActoins";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import {  ChangeEvent, useRef, useState } from "react";
import { useToast } from "@/components/ui/use-toast";

function ResetCodeForm() {
    const FormRef=useRef <HTMLFormElement>(null)
    const inputs = [1,2,3,4,5]
    const {toast} = useToast()
    const [code,setCode]=useState("")
    const [keycode,setKeycode]=useState("")
    const router = useRouter()
         
    const handlechange = async (e: ChangeEvent <HTMLInputElement> | any)=>{
            setCode(prev=> prev+e.target.value)
            if(keycode==="Backspace"){
               if(e.target.previousSibling)
                {e.target.previousSibling.focus();}
            setCode(prev => prev.slice(0,-1))
            setKeycode("")
            }
            else if(e.target.nextSibling && keycode!="Backspace" ){
                e.target.nextSibling.focus();
            }
            else if (!e.target.nextSibling && e.target.value!=""){
                const {error , response}= await codeVerif(code+e.target.value)
                if(response){
                    router.push("/login/forgot-password/reset-password");
                }
                else {
                    const e = error ? error?.message: "sorry we encountred a server error" 
                    toast({
                        variant:"error",
                        icon:"error",
                        description:`${e}`
                    })
                    inputs.map(
                        (index)=>{
                            const input : HTMLInputElement =document.getElementById("codeInput"+index) as HTMLInputElement
                            input.value = ""
                        })
                        const input : HTMLInputElement =document.getElementById("codeInput"+0) as HTMLInputElement
                        input.value=""
                        input.focus()
                }

                }
            }
           
         
    const handledelete = (e: React.KeyboardEvent <HTMLInputElement> | any)=>{
        setKeycode(e.key)
        if(e.target.value==="" && e.key==="Backspace" &&  e.target.previousSibling){
            e.target.previousSibling.focus();
            
        }
        else if (e.target.value!="" && e.key!="Backspace" && e.target.nextSibling){
            e.target.nextSibling.focus();
        }
    }
   
    const handlePaste = async (e: ClipboardEvent | any)  => {
        e.preventDefault();
        var clipboardText = await navigator.clipboard.readText();
        clipboardText= clipboardText.split(" ").join("")
        if(clipboardText.length<=0 )
            return ;
        if(clipboardText.length>=7)
            clipboardText =clipboardText.substring(0,6)
        e.target.value=clipboardText[0]
        var i =0
        inputs.map(
            (index)=>{
                if(index < clipboardText.length)
                {
                    const input : HTMLInputElement =document.getElementById("codeInput"+index) as HTMLInputElement
                    input.value = clipboardText[index]
                    input.focus()
                }
            })
        if(clipboardText.length==6){
            const {error , response}= await codeVerif(clipboardText)
            if(error){
                toast({
                    variant:"error",
                    icon:"error",
                    description:`${error.message}`
                })
                inputs.map(
                    (index)=>{
                        const input : HTMLInputElement =document.getElementById("codeInput"+index) as HTMLInputElement
                        input.value = ""
                    })
                    const input : HTMLInputElement =document.getElementById("codeInput"+0) as HTMLInputElement
                    input.value=""
                    input.focus()
            }
            else{
                
                router.push("/login/forgot-password/reset-password");
            }
        }
         
        }
    
    

    return (  
    <form className="flex justify-center items-center gap-y-4 flex-col w-3/4 bg-transparent" ref={FormRef}>
        
        <h1 className="font-bold lg:text-3xl md:text-xl sm:text-lg text-center">Reset Code</h1>
        <h3 className=" font-medium lg:text-sm text-xs text-center lg:mx-10 text-[#525252]">Enter the verification code to reset your password</h3>
        <div className="flex justify-between w-9/12">
        <Input key={0} id="codeInput0" onKeyDown={handledelete}  onChange={handlechange} onPaste={handlePaste}  maxLength={1} className="w-10 text-center text-lg p-0bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]" autoFocus/>
        {inputs.map((i) => <Input key={i} id={`codeInput${i}`}  onKeyDown={handledelete} onChange={handlechange}   maxLength={1} className="w-10 text-center text-lg p-0bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]" />)}
        </div>
    </form>
    );
}
export default ResetCodeForm;