import { cn } from "@/lib/utils";

function AuthBackground({
  children, className
}: Readonly<{
  children: React.ReactNode,
  className?:string
}>) {
    return (
    
        
    <div className=" absolute  h-full w-full  bg-blue-500/30 dark:bg-black  bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px] dark:bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] dark:bg-[size:14px_24px]">
    <div className={cn("place-items-center grid  bg-transparent  h-full w-full ",className)} >
       {children}
    </div>
    </div> 
  
  
  );
}

export default AuthBackground;

