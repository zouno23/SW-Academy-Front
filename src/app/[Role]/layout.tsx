import type { Metadata } from "next";
import SideBar from "./SideBar/SideBar";
import { GetJWT } from "../Actions/JWTmanagement";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "SW-Academy",
  description: "SW-Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const IsLoggedIn = GetJWT()
  if (!IsLoggedIn) redirect("/login")
return (
      
      <section className="h-screen absolute w-screen overflow-hidden flex" >
      <SideBar/>
      {children}
        
        </section>
  );

}
