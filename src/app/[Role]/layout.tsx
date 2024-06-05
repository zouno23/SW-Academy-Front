import type { Metadata } from "next";
import SideBar from "./SideBar/SideBar";
import { GetJWT } from "../Actions/JWTmanagement";
import { redirect } from "next/navigation";
import { LeavingMeetingDetection } from "../Hooks/LeavingMeetingDetection";
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
  const IsLoggedIn = GetJWT();
  const role = GetRole();
  if (!IsLoggedIn) redirect("/login");
  if (role == "Teacher" || role == "Student") {
  } else if (
    role === "Admin" ||
    role === "SuperAdmin" ||
    role === "Asssistant"
  ) {
    redirect("/Admin");
  }

  return (
    <section className="h-screen relative w-screen overflow-hidden flex">
      <SideBar parent="layout" />
      {children}
      <LeavingMeetingDetection />
    </section>
  );
}
