import AuthBackground from "@/components/authbackground";
import ResetPasswordForm from "./ResetPasswordForm";

function ResetPassword() {
    return (  
        <AuthBackground >
           <div className=" bg-white dark:bg-slate-950 z-10 rounded-3xl w-2/5 h-3/5 flex justify-center items-center gap-y-8 flex-col overflow-hidden shadow-md  ">
           <ResetPasswordForm/>
           </div>
        </AuthBackground>
        
         );
}

export default ResetPassword;