import Logo from "@/../public/logo.svg";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import Image from "next/image";
import LogoutButton from "../../../[Role]/SideBar/LogoutButton";
import AdminNavButtons from "./AdminNavigationButtons";
import { GetAdminData } from "@/app/Actions/Admin/AdminAuthActions";

async function AdminSideBar() {
  const { error, response } = await GetAdminData();
  if (error) {
    console.log(error);
    throw new Error(error.message);
  }
  const Name = response?.Result.Name;
  const abbr = Name?.split(" ").map((name: string) => name[0]);

  return (
    <nav className=" grid  grid-cols-1 py-8 p-4 gap-8 h-screen  ">
      <Image
        src={Logo}
        alt="SW Academy"
        className="max-h-10 w-full p-0 object-contain self-center"
      />
      <div className="flex flex-col items-center justify-center gap-4 px-4 text-center text-pretty self-start ">
        <Avatar className="size-20 bg-slate-100 border border-slate-100">
          <AvatarFallback>{abbr}</AvatarFallback>
        </Avatar>
        <h3 className="font-semibold text-lg">{Name}</h3>
        <h6 className=" text-sm font-medium text-gray-700/70 ">
          Continue your journey and achieve your goals
        </h6>
      </div>
      <AdminNavButtons />
      <div className="self-end">
        <LogoutButton />
      </div>
    </nav>
  );
}

export default AdminSideBar;
