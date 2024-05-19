import type { Metadata } from "next";

import { GetJWT } from "@/app/Actions/JWTmanagement";
import { redirect } from "next/navigation";
import { LeavingMeetingDetection } from "./LeavingMeetingDetection";

export const metadata: Metadata = {
  title: "SW-Academy",
  description: "SW-Academy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <>{children}</>;
}
