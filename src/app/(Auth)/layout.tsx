
import type { Metadata } from "next";
import { GetJWT } from "../Actions/JWTmanagement";
import { redirect } from "next/navigation";
import { GetRole } from "../Actions/RoleCookieManagement";

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
  const role = GetRole()
  if (IsLoggedIn && role) redirect(`/${role}/dashboard`)
return (
      
      <section className="h-screen absolute w-screen overflow-hidden flex" >
      {children}
        
        </section>
  );

}
