"use server";
import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "../AxiosTypes";
import { GetJWT, SetJWT } from "../JWTmanagement";
import { SetRole } from "../RoleCookieManagement";

export const AdminLogin = async (props: {
  Email: string;
  Password: string;
}) => {
  try {
    const response: AxiosResponseType = await axios.post(
      "http://localhost:9000/Admin/login",
      {
        Email: props.Email,
        Password: props.Password,
      }
    );
    SetJWT(response);
    SetRole(response.data.Result.userRole);
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetAdminData = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/GetData",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
