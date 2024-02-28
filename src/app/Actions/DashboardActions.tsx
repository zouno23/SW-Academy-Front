"use server"

import axios from "axios"
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes"
import { GetJWT } from "./JWTmanagement"
const url ="http://localhost:9000"
export const GetUserProfile = async ()=>{
    try {
        const jwt = GetJWT()
        if (!jwt) throw new Error("No JWT available");
        // Make a request to the API with the token in the header.
        const response:AxiosResponseType= await axios.get(url+"/Dashboard/data",{headers: { Authorization: `Bearer ${jwt}` }})
        return {error:null , response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}

    }
}


export const GetCardsNumbers= async ()=>{
    try {
        const jwt = GetJWT()
        if(!jwt) throw new Error( 'No JWT available');
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/stats",{headers: { Authorization: `Bearer ${jwt}` }})
        return{error:null,response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}
    }
}

export const GetLessonsPerMonth = async ()=>{
    try {
        const jwt = GetJWT();
        if (!jwt) throw  new Error('No JWT available ')
        const response : AxiosResponseType = await axios.get (url+"/Dashboard/completed-lessons-per-month",{headers: { Authorization: `Bearer ${jwt}` }});
    return{error:null , response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}
    }
}

export const GetLessonsProgress = async ()=>{
    try {
        const jwt = GetJWT()
        if (!jwt) throw  new Error ('No JWT available')
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/LessonsProgress",{headers: { Authorization: `Bearer ${jwt}` }});
        return {error1:null , response1:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error1: e.response?.data, response1:null}
    }
}

export const GetProducts  =async () =>{
try {
    const jwt = GetJWT()
    if (!jwt) throw  new Error ('No JWT available')
    const response : AxiosResponseType = await axios.get(url+"/Dashboard/products",{headers: { Authorization: `Bearer ${jwt}` }});
    return {error:null , response:response.data}
} catch (error:any) {
    const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}
}
}
