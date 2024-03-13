import type { Metadata } from "next";
import SideBar from "./SideBar/SideBar";
import { GetJWT } from "../Actions/JWTmanagement";
import { redirect } from "next/navigation";
import { GetRole } from "../Actions/RoleCookieManagement";
import { headers } from 'next/headers';



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
      
      <section className="h-screen relative w-screen overflow-hidden flex" >
      <SideBar/>
      {children}
        
        </section>
  );

}
