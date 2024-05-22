import type { Metadata } from "next";
import { redirect } from "next/navigation";
import { GetRole } from "../Actions/RoleCookieManagement";

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

  if (role === "Teacher" || role === "Student") {
    redirect("/login");
  }
  return (
    <section className="h-screen absolute w-screen overflow-hidden flex">
      {children}
    </section>
  );
}
