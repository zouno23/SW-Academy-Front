import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Button } from "@/components/ui/button";
import { Inbox,Bell,Settings } from 'lucide-react';
import { Popover, PopoverContent,PopoverTrigger,} from "@/components/ui/popover";
import { GetUserProfile } from "@/app/Actions/DashboardActions";

export default async function ProfileSection({}) {
    const {error,response} = await GetUserProfile()
    if (error) throw error;
    return (<div className="grid place-items-center gap-4 ">
          <div className="gap-3 grid text-center place-items-center">
          <Avatar className="size-20">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
          <h4 className="font-semibold text-lg">Good Morning {response?.Result.FullName?.split(" ").slice(0,1)}</h4>
          <h6 className=" text-sm font-medium text-gray-700/70 ">Continue your journey and achieve  your goals</h6>
          </div>
          </div>
          <div className="flex w-9/12 justify-between pt-1">
              <Button className="size-9 rounded-full p-0 border border-gray-500/70 " variant="ghost"><Settings className="size-4" strokeWidth={1.75} /> </Button>
              <Button className="size-9 rounded-full p-0 border border-gray-500/70 " variant="ghost"><Inbox className="size-4" strokeWidth={1.75} /> </Button>
              <Popover>
                <PopoverTrigger asChild>
                <Button className="size-9 rounded-full p-0 border border-gray-500/70 " variant="ghost">
                <Bell className="size-4" strokeWidth={1.75} /> 
                </Button>
                </PopoverTrigger>
                <PopoverContent className="w-40 bg-white rounded shadow-lg px-4 py-5 space-y-6 font-medium text-gray-700 p-6 max-w-md">
                    aa <br /> aa
              </PopoverContent>
              </Popover>
          </div>
          </div>);
  }