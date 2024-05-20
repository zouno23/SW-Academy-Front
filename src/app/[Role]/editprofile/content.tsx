import React from "react";
import Form from "./forms/form";
import Picform from "./forms/Picform";
import Title from "./Head/title";
import "react-image-crop/dist/ReactCrop.css";
import { Separator } from "@/components/ui/separator";
import { GetUserProfile } from "@/app/Actions/DashboardActions";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

async function content() {
  const { error, response } = await GetUserProfile();
  if (error) throw error;
  const role = GetRole();
  const data = { ...response.Result, Role: role };
  return (
    <div className="    relative rounded-2xl my-5 pb-12  border-solid h-max  border-2 w-full bg-white border-gray-100">
      <Title />
      <Picform data={data} />

      <div className="  flex justify-center">
        <Form />
      </div>
    </div>
  );
}

export default content;
