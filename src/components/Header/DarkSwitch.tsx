"use client"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function DarkSwitch() {
    const {theme, setTheme}=useTheme();
    const [checked,setChecked]=useState(false)
    useEffect(()=>{
        setChecked (localStorage.getItem("theme") === "dark"? true : false)
        
    },[theme])
    return ( <div className="flex items-center space-x-2 ">
        <Switch id="dark-mode" checked={checked} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </div> );
}

export default DarkSwitch;