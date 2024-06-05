"use client";
import { DestroyJWT } from "@/app/Actions/JWTmanagement";
import { DestroyRole, GetRole } from "@/app/Actions/RoleCookieManagement";
import { DestroyLocalStorage } from "@/app/Hooks/LocalStorage";
import { Button } from "@/components/ui/button";
import { LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

function LogoutButton() {
  const router = useRouter();
  return (
    <Button
      className="flex w-full gap-3 justify-start p-2 bg-white text-red-500 hover:bg-red-500 hover:text-white dark:bg-transparent dark:text-white dark:hover:bg-red-500 dark:hover:text-white "
      onClick={async () => {
        const role = GetRole();
        await DestroyRole();
        await DestroyJWT();
        DestroyLocalStorage();
        role === "Teacher" || role === "Student"
          ? router.replace("/login")
          : router.replace("/");
      }}
    >
      <LogOut className="size-5" />
      <h4 className=" text-base"> Log Out</h4>
    </Button>
  );
}

export default LogoutButton;
