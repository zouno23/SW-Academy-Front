import type { Metadata } from "next";
import SideBar from "./(Side Bar)/SideBar";

export const metadata: Metadata = {
  title: "SW-Academy",
  description: "SW-Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      
      <section className="h-screen absolute w-screen overflow-hidden flex" >
      <SideBar/>
      {children}
        
        </section>
  );
}
