"use client"
import { useGoogleLogin } from "@react-oauth/google";
import { useRouter } from "next/navigation";
import { useToast } from "./ui/use-toast";
import { sendGoogleToken } from "@/app/Actions/AuthActions";
import { Button } from "./ui/button";
import GoogleLogo from "@/../public/googlelogo.svg"
import Image from "next/image";

function GoogleAuthButton() {
    const {toast} = useToast() 
    const router=useRouter()
    const googleLogin = useGoogleLogin({
        onSuccess: async (tokenResponse) => {
          
        const {error,response} = await sendGoogleToken(tokenResponse.access_token);
            if(error){
              toast({
                variant:"error",
                description:`${error.message}`,
                icon:"error"
              })
            }
            else if(response){
              router.push("/dashboard")
            }
            else{
              toast({
                variant:"error",
                description:`Sorry we encountered a server error`,
                icon:"error"
              })
            }
      }
        });
    return (  <Button type="button" 
    variant="ghost"
    className="gap-2 border-2"
    onClick={
      ()=>{googleLogin()}
      } >
       <Image src={GoogleLogo} alt="google logo" priority={true} width={16} height={16} />
      <span>Login with <b>Google</b></span>
    </Button>);
}

export default GoogleAuthButton;