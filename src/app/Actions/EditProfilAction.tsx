"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";
import { GetJWT } from "./JWTmanagement";

export const EditProfile = async (formData:FormData)=>{
    try {
        const jwt = await GetJWT();
        const fullname = formData.get("FullName");
        const number = formData.get("Number");
        const email =  formData.get("email");
        const AboutMe = formData.get("AboutMe");
        const response:AxiosResponseType=  await axios.post <AxiosResponseType>("http://localhost:9000/profile",
        {
          FullName: fullname,
          Email : email ,
        } ,{headers: { Authorization: `Bearer ${jwt}` }})
          
      return {error:null , response:response.data}

    }catch(error:any){
        const e :AxiosErrorType = error;
        return {error:e.response?.data , response:null}


    }
    



}
export const ChangePassword = async (formData:FormData)=>{
    try {
      const jwt = GetJWT();
        
        const pwd = formData.get("password");
        const response:AxiosResponseType=  await axios.post <AxiosResponseType>("http://localhost:9000/signup",{
         
          Password : pwd})
      return {error:null , response:response.data}

    }catch(error:any){
        const e :AxiosErrorType = error;
        return {error:e.response?.data , response:null}

    }}