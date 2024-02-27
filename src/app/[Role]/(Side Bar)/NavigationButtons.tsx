import { Button } from "@/components/ui/button";
import { LayoutDashboard } from 'lucide-react';
import { cn } from "@/lib/utils";

export default function NavigationButtons() {
    const list = [1,2,3,4,5]
    return (<div className="grid w-full gap-4">
              {
              list.map(i => 
              <Button variant="default" className={cn("flex w-full gap-3 justify-start p-2 bg-white text-gray-400 hover:bg-blue-600/65 hover:text-white", i == 1 && "bg-blue-600 text-white")}>
                <LayoutDashboard className="size-5" /> 
                <h4 className=" text-base">Dashboard</h4>  
                </Button>
                )
               }

          </div>);}