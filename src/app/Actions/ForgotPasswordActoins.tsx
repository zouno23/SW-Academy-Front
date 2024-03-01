"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";

import { GetJWT,SetJWT } from "./JWTmanagement";

export const forgotPassword =async (formData: FormData)=>{
   try {
       const email = formData.get("email");
       const response =await axios.post <AxiosResponseType> ("http://localhost:9000/forgot-password",{Email:email})
       return {error : null , response :response.data}
   } catch (error:any) {
    const e: AxiosErrorType  =error
    return{error: e.response?.data , response:null}
   }
}

export const codeVerif = async (code:string)=>{
    try {
        const response : AxiosResponseType = await axios.post ("http://localhost:9000/frogot-password/VerifCode",{code})
        SetJWT(response);
        return {error : null , response :response.data}
    } catch (error:any) {
        const e: AxiosErrorType  =error
        return{error: e.response?.data , response:null}
    }
    
}

export const resetpassword = async (formdata:FormData)=>{
    const Password = formdata.get("password")
    try {
        const jwt = GetJWT();
        const response : AxiosResponseType  = await axios.post ("http://localhost:9000/reset-password", {Password} , {
            headers: { Authorization: `Bearer ${jwt}` },
          })
        return {error : null , response: response.data}
    } catch (error: any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}
    }
    
   
    
}

