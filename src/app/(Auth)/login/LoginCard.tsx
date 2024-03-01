"use client";

import Image from "next/image";
import ideaDesign1 from "@/../public/Resources/Group11.png" 
import woman1 from "@/../public/Resources/womanlog1.png"
import { Button } from "@/components/ui/button";
import { useTheme } from "next-themes";


function LoginCard() {
    const { theme, setTheme } = useTheme();
    return ( 
    <main className="h-3/4 w-3/5 bg-white/25 rounded-2xl border-[2px] border-white/50 flex flex-row">
        <div className="w-1/2 overflow-visible justify-between flex flex-col pb-10 m-3 shrink-0">
            <p className="text-white font-bold text-2xl w-9/12 ">
            Very good courses are waiting for you Login Now!!!
            </p>
                <Button
                asChild 
                className="w-16 h-16 p-0 m-0 bg-transparent hover:bg-transparent dark:hover:bg-transparent dark:bg-transparent"
                    onClick={() => setTheme(theme === "dark" ? "light" : "dark")} >
                        <Image src={ideaDesign1} alt="design" className="w-16 mb-20 -ml-10"/>
                </Button>
        </div>
        <Image src={woman1} alt="woman holding a tablet" className="-ml-32"/>
    </main> );
}

export default LoginCard;