"use server"

import axios from "axios"
import { AxiosErrorType, AxiosResponseType } from "../AxiosTypes"
import { GetJWT } from "../JWTmanagement"
const url ="http://localhost:9000"
export const Getliste = async ()=>{
    try {
        // const jwt = GetJWT()
        // if (!jwt) throw new Error("No JWT available");
        // Make a request to the API with the token in the header.
        const response:AxiosResponseType= await axios.get(url+"/admin/Teacher")
        return {error:null , response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}

    }
}

export const EditTeacher = async (formData:FormData)=>{
    try {
        // const jwt = await GetJWT();
        const fullname = formData.get("FullName");
        const number = formData.get("numero");
        const email =  formData.get("email");
        const id=formData.get("id")
        const Role=formData.get("Role")

     
        const response:AxiosResponseType=  await axios.post <AxiosResponseType>(`http://localhost:9000/admin/UpdateTeacher`,
        {
          _id:id,
          FullName: fullname,
          Email : email ,
          Numero:number,
        } 
        // ,{headers: { Authorization: `Bearer ${jwt}` }}
        )
        return {error:null , response:response.data}
      
      
      

    }catch(error:any){
        const e :AxiosErrorType = error;
        return {error:e.response?.data , response:null}


    }
}
export const AddTeacher = async (formData:FormData)=>{
  try {
      // const jwt = await GetJWT();
      const fullname = formData.get("FullName");
      const number = formData.get("numero");
      const email =  formData.get("email");
      const Role=formData.get("Role")
      const pwd = formData.get("password");

   console.log(   {
    FullName: fullname,
    Email : email ,
    Numero:number,
    Role:Role,
    Password : pwd,
  } )
      const response:AxiosResponseType=  await axios.post <AxiosResponseType>(`http://localhost:9000/admin/AddTeacher`,
      {
        FullName: fullname,
        Email : email ,
        Numero:number,
        Role:Role,
        Password : pwd,
      } 
      // ,{headers: { Authorization: `Bearer ${jwt}` }}
      )
      console.log(response)
      return {error:null , response:response.data}
    
    
    

  }catch(error:any){
      const e :AxiosErrorType = error;
      return {error:e.response?.data , response:null}


  }
}
export const DeletePicture = async (userId: String) => {
    try {
      const response:AxiosResponseType=  await axios.put <AxiosResponseType>("http://localhost:9000/admin/DeletePicture/Teacher",
      { _id: userId }
      // ,{headers: { Authorization: `Bearer ${jwt}` }}
      )
      console.log(response)

      return {error:null , response:response.data}

    } catch (error:any){
        const e :AxiosErrorType = error;
        return {error:e.response?.data , response:null}
    }

  };
  export const ToggleStatus = async (userId: String ,Role:String) => {
    try {
      console.log("tttt")
      const response:AxiosResponseType=  await axios.put <AxiosResponseType>(`http://localhost:9000/admin/toggleStatus/${Role}`,
      { _id: userId }
      // ,{headers: { Authorization: `Bearer ${jwt}` }}
      )
      console.log(response)

      return {error:null , response:response.data}

    } catch (error:any){
      
        const e :AxiosErrorType = error;
        console.log(e)
        return {error:e.response?.data , response:null}
    }

  };