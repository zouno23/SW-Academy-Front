"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";

export const EditProfile = async (formData:FormData)=>{
    try {
        const fullname = formData.get("fullname");
        const number = formData.get("number");
        const email =  formData.get("email");
        const pwd = formData.get("password");
        const response:AxiosResponseType=  await axios.post <AxiosResponseType>("http://localhost:9000/signup",{
          FullName: fullname,
          Email : email ,
          Password : pwd})
      return {error:null , response:response.data}

    }catch(error:any){
        const e :AxiosErrorType = error;
        return {error:e.response?.data , response:null}


    }



}