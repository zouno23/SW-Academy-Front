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
        const response:AxiosResponseType= await axios.get(url+"/admin/UpdateTeacher")
        return {error:null , response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}

    }
}