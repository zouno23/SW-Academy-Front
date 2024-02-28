"use client"
import { Switch } from "@/components/ui/switch"
import { useTheme } from "next-themes";

function DarkSwitch() {
    const {theme, setTheme}=useTheme();
    const ischecked = theme === "dark"? true : false;
    return ( <div className="flex items-center space-x-2 ">
        <Switch id="dark-mode" checked={ischecked} onClick={() => setTheme(theme === "dark" ? "light" : "dark")} />
    </div> );
}

export default DarkSwitch;