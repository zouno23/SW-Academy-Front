import ProfileSection from "./ProfileSection";
import NavigationButtons from "./NavigationButtons";
import LogoutButton from "./LogoutButton";
import Image from "next/image";
import Logo from "@/../public/logo.svg"
import Logowhite from "@/../public/logow.svg"
function SideBar() {
    return (  
    <nav className="flex relativ shrink-0  left-0  w-1/5 h-full bg-white items-start justify-center py-3 dark:bg-slate-900  ">
    <div className="w-10/12 flex flex-col justify-between h-full">
    <div className=" flex-col flex gap-8">
    <div className="flex w-full justify-center "><Image src={Logo} alt="SW Academy" className="h-12 w-fit"/> </div>
    <ProfileSection />
    <NavigationButtons/>
    </div>
    <LogoutButton/>
    </div> 
    </nav> 
    );
}

export default SideBar;