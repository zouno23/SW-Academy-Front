/* eslint-disable react-hooks/rules-of-hooks */
"use client";
import React, { useRef } from "react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";
import Passform from "./passform";
import { useParams, useRouter } from "next/navigation";
import { EditProfile } from "@/app/Actions/EditProfilAction";

export default function form() {
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const FormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();
  const router = useRouter();
  const params = useParams();

  return (
    <div className="flex flex-col w-8/12  mb-10   h-full">
      <form
        ref={FormRef}
        // eslint-disable-next-line react/jsx-no-duplicate-props
        action={async (FormData) => {
          FormRef.current?.reset();

          const { error, response } = await EditProfile(FormData);
          if (response) {
            router.refresh();
            router.push("/" + params.Role + "/dashboard");
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
        className="container  flex pb-5 mt-10 border-2 rounded-lg  flex-col  border-solid mb-10  bg-white border-gray-200  h-full"
      >
        <label className=" my-4 font-semibold capitalize"> Full name</label>
        <Input
          name="FullName"
          type="text"
          className="mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
          placeholder="FullName"
        />
        <label className="mb-4 font-semibold capitalize"> Email</label>
        <Input
          name="email"
          className="mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
          type="email"
          placeholder="E-mail"
        />

        <label className="mb-5 font-semibold capitalize"> phone number</label>
        <Input
          className="mb-5 bg-slate-100  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
          type="number"
          placeholder="## ### ###"
        />

        <label className="mb-5 font-semibold capitalize "> About me</label>
        <Textarea
          name="AboutMe"
          className="mb-5 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]"
        />
        <div className="flex content-center items-center justify-center ">
          <Button
            className=" text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95"
            variant="outline"
          >
            Button
          </Button>
        </div>
      </form>
      <Passform />
      <br />
    </div>
  );
}
