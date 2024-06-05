"use server";
import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";
import { GetJWT } from "./JWTmanagement";
const url = "http://localhost:9000";

export const GetBootCamps = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      `${url}/Bootcamps`,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
