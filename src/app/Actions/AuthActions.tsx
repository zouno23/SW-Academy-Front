"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";
import { SetJWT } from "./JWTmanagement";




export const login = async (formData: FormData) =>{
  try {
    const email =  formData.get("email");
    const pwd = formData.get("password");
   const response: AxiosResponseType = await axios.post("http://localhost:9000/login",{
      Email : email ,
      Password : pwd
    })
    SetJWT(response);
    return {error:null , response:response.data}
  
  } catch (error:any) {
    const e :AxiosErrorType = error;
    return {error:e.response?.data , response:null}  
  }   
} 

  export const signup = async (formData: FormData) =>{
    try {
      const fullname = formData.get("fullname");
      const number = formData.get("number");
      const email =  formData.get("email");
      const pwd = formData.get("password");
      
      const response:AxiosResponseType=  await axios.post <AxiosResponseType>("http://localhost:9000/signup",{
          FullName: fullname,
          Email : email ,
          Password : pwd})
          SetJWT(response);
      return {error:null , response:response.data}
    } catch (error:any) {
      const e :AxiosErrorType = error;
      return {error:e.response?.data , response:null}  
    }
  }    

  export const sendGoogleToken = async (token:string) => {
    try {
     const response:AxiosResponseType= await axios.post ("http://localhost:9000/login/google", { token })
     SetJWT(response);
     return {error:null , response:response.data}
    } catch (error:any) {
      const e :AxiosErrorType = error;
      return {error:e.response?.data , response:null}  
    }     
  };

 
  