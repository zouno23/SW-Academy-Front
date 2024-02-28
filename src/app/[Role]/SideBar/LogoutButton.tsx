import { Button } from "@/components/ui/button";
import { LogOut } from 'lucide-react';

function LogoutButton() {
    return ( 
    <Button className="flex w-full gap-3 justify-start p-2 bg-white text-red-500 hover:bg-red-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-red-500 dark:hover:text-white ">
        <LogOut className="size-5"/>
        <h4  className=" text-base"> Log Out</h4> 
     </Button> );
}

export default LogoutButton;