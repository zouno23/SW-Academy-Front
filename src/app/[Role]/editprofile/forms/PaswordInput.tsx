"use client"
import { Input, InputProps } from "@/components/ui/input";
import React, { useState , useEffect, useRef} from "react";
import { Eye, EyeOff} from "lucide-react"
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

 

  // eslint-disable-next-line react/display-name
  const PasswordInput = React.forwardRef<HTMLInputElement, InputProps> (
    ({ className, name,type , pattern , ...props }, ref ) =>{
    
    const inputRef = useRef<HTMLInputElement>(null);
    const [Shown, setShown] = useState("password");
    const [error,setError] = useState <string | string[]> ("")
   
    
    const passwordValidation = (password:string) => {
      const errors = [];
      if (type=="newPassword"){
       if (password.length < 8 ) {
        errors.push('Password must be at least 8 characters.');
      }else if (!/[A-Z]/.test(password)) {
        errors.push('Password must contain at least one uppercase letter.');
      } else if (!/[a-z]/.test(password)) {
        errors.push('Password must contain at least one lowercase letter.');
      } else if (!/[0-9]/.test(password)) {
        errors.push('Password must contain at least one number.');
      } 
      setError(errors)
    }
    };


  const onshown = () => {
    if (Shown == "password") {
      setShown("text");
    } else {
      setShown("password");
    }
  };


  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.setCustomValidity('');
      if (type === 'newPassword' && !inputRef.current.validity.valid) {
        inputRef.current.setCustomValidity(error[0]);
            }
    }
  }, [error, type]);
  
    
    return (  
    <div className="flex  relative w-full">
    <Input
      pattern={pattern}
      name={name}
      onChange={(e)=>
        {passwordValidation(e.target.value);
      }}
      type={Shown}
      className={cn("mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]",className)}
      placeholder="•••••••••"
      required
      {...props}
      ref={inputRef}
    /> 
    
    <Button type="button" onClick={onshown} variant="ghost" className="absolute hover:bg-transparent right-0 " >
      {Shown==="text"?<Eye className="text-[#0D47A1] " strokeWidth={2.25}/>:<EyeOff className="text-[#0D47A1]" strokeWidth={2.25}/>}
    </Button>
    </div>
    );
}
  )
export default PasswordInput;