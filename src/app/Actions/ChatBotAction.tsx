"use server"
import axios from "axios"
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes"
import { GetJWT } from "./JWTmanagement"
const url ="http://localhost:9000"

export const Chatbot = async (userInput:String)=>{
    try {
        // const jwt = GetJWT()
        // if (!jwt) throw new Error("No JWT available");
        const response:AxiosResponseType =  await axios.post<AxiosResponseType>(`${url}/chatbot`, { userInput }
        // ,  {headers:{Authorization:`Bearer ${jwt}`}}
        )
        console.log(response)
        return {error:null , response:response.data}
        } catch   (error:any) {
            const e: AxiosErrorType  = error
            return{error: e.response?.data, response:null}
    }
    } 