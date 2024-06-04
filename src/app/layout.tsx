import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Toaster } from "@/components/ui/toaster";
import "./globals.css";
import { ThemeProvider } from "./theme-provider";
import { Suspense } from "react";
import Loading from "@/components/Loading/Loading";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <span className="font-medium">
            <Toaster />
          </span>
        </ThemeProvider>
      </body>
    </html>
  );
}
