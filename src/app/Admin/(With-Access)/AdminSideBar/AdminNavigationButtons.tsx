"use client";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { LayoutDashboard, Notebook, Settings, User } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const Paths = [
  {
    path: "Dashboard",
    name: "Dashboard",
    icon: <LayoutDashboard className="siz-5" />,
  },
  {
    path: "Users",
    name: "Users",
    icon: <User className="siz-5" />,
  },
  {
    path: "Courses",
    name: "Courses",
    icon: <Notebook className="size-5" />,
  },
  {
    path: "Settings",
    name: "Settings",
    icon: <Settings className="size-5" />,
  },
];

function AdminNavButtons() {
  const pathname = usePathname();
  const [path, setPath] = useState(pathname.split("/")[2]);
  useEffect(() => setPath(pathname.split("/")[2]), [pathname]);
  const NavButton = (bpath: string, name: string, icon: any, index: number) => {
    return (
      <Link href={"/Admin/" + bpath} key={index}>
        <Button
          className={cn(
            "flex w-full gap-3 justify-start p-2 bg-white text-gray-400 hover:bg-blue-600/65 hover:text-white dark:bg-transparent dark:text-gray-400 dark:hover:bg-blue-600/65 dark:hover:text-white",
            path === bpath &&
              "bg-blue-600 hover:bg-blue-600 text-white dark:bg-blue dark:text-white dark:hover:bg-blue-600"
          )}
        >
          {icon}
          <h4 className="text-sm">{name}</h4>
        </Button>
      </Link>
    );
  };
  return (
    <div className="flex flex-col  gap-4 items-start *:w-full  *:justify-start self-start">
      {Paths.map((b, index) => NavButton(b.path, b.name, b.icon, index))}
    </div>
  );
}

export default AdminNavButtons;
