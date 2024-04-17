
import ProfileSection from "./ProfileSection";
import NavigationButtons from "./NavigationButtons";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Logo from "@/../public/logo.svg"
import Logowhite from "@/../public/logow.svg"
import { cn } from "@/lib/utils";
import CloseButton from "./CloseButton";
function SideBar({parent}:{parent:string}) {
    return (  
    <nav className={cn("flex relative shrink-0  left-0 h-full bg-white items-start justify-center py-3 dark:bg-slate-900 overflow-auto ",parent==="layout"&&" w-1/5 max-md:hidden",parent==="header"&&"w-screen absolute z-40 md:hidden h-screen top-0")}>
    <div className="w-10/12 flex flex-col justify-between h-full gap-3">
    <div className=" flex-col flex gap-8">
    <div className="flex w-full justify-center relative "><Image src={Logo} alt="SW Academy" className="h-10 w-full"/> <CloseButton/> </div>
    <ProfileSection />
    <NavigationButtons/>
    </div>
    <LogoutButton/>
    </div> 
    </nav> 
    );
}

export default SideBar;