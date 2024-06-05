import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Inbox, Bell, Settings } from "lucide-react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { GetUserProfile } from "@/app/Actions/DashboardActions";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import Image from "next/image";
import { GetAbbr } from "@/lib/utils";

export default async function ProfileSection() {
  const { error, response } = await GetUserProfile();
  if (error) throw error;
  const role = GetRole();
  console.log("http://localhost:9000/" + response.Result.Picture);
  return (
    <div className="grid place-items-center gap-4 ">
      <div className="gap-3 grid text-center place-items-center">
        <Avatar className="size-20 bg-slate-100 border border-slate-100">
          {response?.Result?.Picture ? (
            <Image
              src={"http://localhost:9000/" + response?.Result?.Picture}
              width={1200}
              height={1200}
              alt="avatar"
              className="object-fit"
            />
          ) : (
            <AvatarFallback>
              {GetAbbr(response?.Result?.FullName)}
            </AvatarFallback>
          )}
        </Avatar>
        <div className="space-y-1">
          <h4 className="font-semibold text-lg">
            Good Morning {role == "Teacher" ? "Mr. " : ""}
            {response?.Result.FullName?.split(" ").slice(0, 1)}
          </h4>
          <h6 className=" text-sm font-medium text-gray-700/70 text-pretty ">
            Continue your journey and achieve your goals
          </h6>
        </div>
      </div>
    </div>
  );
}
