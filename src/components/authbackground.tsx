import { cn } from "@/lib/utils";

function AuthBackground({
  children, className
}: Readonly<{
  children: React.ReactNode,
  className?:string
}>) {
    return (  
    <div className="  absolute  h-full w-full  bg-white dark:bg-slate-600 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
    <div className="justify-center items-center flex  bg-gradient-to-r from-blue-500/30 to-blue-100/20 dark:bg-black h-full w-full">
      {children}
        </div></div> );
}

export default AuthBackground;