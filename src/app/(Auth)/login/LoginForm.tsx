"use client";

import { login } from "../../Actions/AuthActions";
import React, { useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Separator } from "@/components/ui/separator";
import Link from "next/link";
import { ChevronLeft } from "lucide-react";
import PasswordInput from "@/components/PasswordInput";
import { useToast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import GoogleAuthButton from "@/components/GoogleAuthButton";
import { SetToLocalStorage } from "../../Hooks/LocalStorage";

export default function LoginForm() {
  const { toast } = useToast();
  const router = useRouter();

  const FormRef = useRef<HTMLFormElement>(null);

  return (
    <main className=" font-poppins grow">
      <form
        className="flex flex-col h-full m-4 grow justify-center items-center  gap-5"
        ref={FormRef}
        action={async (FormData) => {
          FormRef.current?.reset();
          const { error, response } = await login(FormData);
          if (response) {
            if (SetToLocalStorage(response.Result))
              router.push(`/${response.Result.userRole}/dashboard`);
            else
              toast({
                description: error?.message || "An unknown error occured",
                variant: "error",
                duration: 3000,
              });
          } else if (error) {
            toast({
              variant: "error",
              description: `${error?.message}`,
              icon: "error",
            });
          } else {
            toast({
              variant: "error",
              description: `Sorry we encountered a server error`,
              icon: "error",
            });
          }
        }}
      >
        <h1 className="font-bold text-3xl text-center">LOGIN</h1>
        <div className="text-center font-light text-sm text-[#525252] flex items-center gap-x-2">
          <p>You don&apos;t have an account?</p>
          <Button
            variant="link"
            type="button"
            className="p-0 h-fit  font-semibold text-[#0D47A1] text-sm"
          >
            <Link href="/signup" className=" font-semibold text-[#0D47A1]">
              Create account
            </Link>
          </Button>
        </div>
        <Input
          type="email"
          name="email"
          className="bg-[#E9F1FE] border border-[E9F1FE]  rounded-lg  block w-9/12 p-2.5 focus-visible:ring-2  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
          placeholder="Email"
          required
        />

        <PasswordInput name="password" />

        <div className=" flex justify-between items-center w-9/12 ">
          <div className="flex items-start gap-2">
            <Checkbox
              id="RememberMe"
              className=" w-4 h-4 border-[0.5px] rounded mt-0.5 border-[#0D47A1] bg-[#E9F1FE] focus:ring-transparent data-[state=checked]:bg-[#0D47A1] data-[state=checked]:text-[#E9F1FE] "
            />

            <label
              htmlFor="RememberMe"
              className="text-sm font-medium text-[#0D47A1] dark:text-[#E9F1FE] select-none"
            >
              Remember me
            </label>
          </div>
          <Button
            variant="link"
            type="button"
            className="m-0 p-0 h-fit font-semibold text-[#0D47A1] text-sm"
          >
            <Link href="/login/forgot-password">Forgot password?</Link>
          </Button>
        </div>
        <Button
          type="submit"
          className=" text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95"
        >
          Submit
        </Button>

        <div className="flex items-center gap-4 text-[#525252]">
          <Separator decorative className="w-32 bg-[#F0EDFF] " />
          <span>
            <b className="text-[#1C1C1C]">login</b> with others
          </span>
          <Separator decorative className="w-32  bg-[#F0EDFF]" />
        </div>
        <GoogleAuthButton />
        <Button variant="ghost">
          <Link
            href="/"
            className="flex font-semibold justify-center items-center text-sm text-[#0D47A1] "
          >
            <ChevronLeft />
            go back home
          </Link>
        </Button>
      </form>
    </main>
  );
}
