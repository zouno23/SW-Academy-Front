"use server";
import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";
import { GetJWT } from "./JWTmanagement";
const url = "http://localhost:9000";

export const GetCourses = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      `${url}/courses`,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetCourse = async (Id: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      `${url}/course?Id=` + Id,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
