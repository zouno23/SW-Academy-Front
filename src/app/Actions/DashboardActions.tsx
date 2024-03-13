"use server"

import axios from "axios"
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes"
import { GetJWT } from "./JWTmanagement"
const url ="http://localhost:9000"

//student
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

export const GetCoursesPerMonth = async ()=>{
    try {
        const jwt = GetJWT();
        if (!jwt) throw  new Error('No JWT available ')
        const response : AxiosResponseType = await axios.get (url+"/Dashboard/completed-Courses-per-month",{headers: { Authorization: `Bearer ${jwt}` }});
    return{error:null , response:response.data}
    } catch (error:any) {
        const e: AxiosErrorType  = error
        return{error: e.response?.data, response:null}
    }
}

export const GetCoursesProgress = async ()=>{
    try {
        const jwt = GetJWT()
        if (!jwt) throw  new Error ('No JWT available')
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/CoursesProgress",{headers: { Authorization: `Bearer ${jwt}` }});
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

//teacher

export const GetTeacherStats = async ()=>{
     try {
        const jwt = GetJWT()
        if(!jwt) throw new Error ("No JWT available")
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/courseStats",{headers: { Authorization: `Bearer ${jwt}` }});
    return {error:null , response:response.data}
     } catch (error:any) {
        const e: AxiosErrorType  = error
            return{error: e.response?.data, response:null}
    }
}


export const GetTeacherAgenda = async ()=>{
    try {
        const jwt = GetJWT()
        if(!jwt) throw new Error ("No JWT available")
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/agenda",{headers: { Authorization: `Bearer ${jwt}` }});
    return {error1:null , response1:response.data}
     } catch (error:any) {
        const e: AxiosErrorType  = error
            return{error1: e.response?.data, response1:null}
    }
}

export const GetTeacherCourseSellings = async ()=>{
    try {
        const jwt = GetJWT()
        if(!jwt) throw new Error ("No JWT available")
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/sold-courses-per-month",{headers: { Authorization: `Bearer ${jwt}` }});
    return {error:null , response:response.data}
     } catch (error:any) {
        const e: AxiosErrorType  = error
            return{error: e.response?.data, response:null}
    }
}

export const TeacherBestCourses = async ()=>{
    try {
        const jwt = GetJWT()
        if(!jwt) throw new Error ("No JWT available")
        const response : AxiosResponseType = await axios.get(url+"/Dashboard/BestCourses",{headers: { Authorization: `Bearer ${jwt}` }});
    return {error:null , response:response.data}
     } catch (error:any) {
        const e: AxiosErrorType  = error
            return{error: e.response?.data, response:null}
    }
}