"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MountainIcon } from "lucide-react";
import Logo from "@/../public/logo.svg";
import Image from "next/image";
import Link from "next/link";
import { AdminLogin } from "@/app/Actions/Admin/AdminAuthActions";
import { toast } from "@/components/ui/use-toast";
import { useRef } from "react";
import { SetToLocalStorage } from "@/app/Hooks/LocalStorage";
import { useRouter } from "next/navigation";

function Login() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const router = useRouter();
  return (
    <section className="w-full h-full grid place-items-center">
      <Card className="w-full max-w-md space-y-4 p-6">
        <div className="flex justify-center">
          <Image src={Logo} alt="SW Academy" className="h-10 w-full" />
        </div>
        <CardHeader className="space-y-1 text-center">
          <CardTitle className="text-2xl font-bold">Admin Login</CardTitle>
          <CardDescription>
            Enter your username and password to access the admin dashboard.
          </CardDescription>
        </CardHeader>
        <CardContent className="">
          <form
            ref={formRef}
            action={async (FormData) => {
              formRef.current?.reset();
              const Email = FormData.get("Email") as string;
              const Password = FormData.get("Password") as string;
              const { error, response } = await AdminLogin({ Email, Password });
              if (error) {
                toast({
                  variant: "error",
                  description: error.message,
                  icon: "error",
                });
              } else {
                SetToLocalStorage(response.Result);
                router.push("/Admin/Dashboard");
                toast({
                  variant: "default",
                  description: "Login Successful",
                  icon: "success",
                });
              }
            }}
            className="space-y-4"
          >
            <div className="space-y-2">
              <label htmlFor="Email">Email</label>
              <Input
                id="Email"
                name="Email"
                placeholder="Enter your Email"
                type="email"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="password">Password</label>
              <Input
                name="Password"
                id="password"
                placeholder="Enter your password"
                type="password"
              />
            </div>
            <Button className="w-full" type="submit">
              Login
            </Button>
          </form>
        </CardContent>
      </Card>
    </section>
  );
}

export default Login;
