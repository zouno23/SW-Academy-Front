import type { Metadata } from "next";
import { GetJWT } from "../../Actions/JWTmanagement";
import { redirect } from "next/navigation";
import { GetRole } from "../../Actions/RoleCookieManagement";
import AdminSideBar from "./AdminSideBar/AdminSideBar";
import {
  ResizableHandle,
  ResizablePanel,
  ResizablePanelGroup,
} from "@/components/ui/resizable";

export const metadata: Metadata = {
  title: "SW-Academy-Admin",
  description: "SW-Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const role = GetRole();
  const jwt = GetJWT();
  if (!jwt) {
    redirect("/Admin/login");
  }
  return (
    <section className="h-screen absolute w-screen overflow-hidden flex">
      <ResizablePanelGroup direction="horizontal">
        <ResizablePanel
          defaultSize={20}
          maxSize={25}
          minSize={15}
          className=" max-md:hidden"
        >
          <AdminSideBar />
        </ResizablePanel>
        <ResizableHandle
          withHandle
          className="border border-slate-100  max-md:hidden"
        />
        <ResizablePanel defaultSize={80} maxSize={85} minSize={75}>
          <section className="bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 dark:bg-black z-0">
            {children}
          </section>
        </ResizablePanel>
      </ResizablePanelGroup>
    </section>
  );
}
