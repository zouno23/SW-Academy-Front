import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "../AxiosTypes";
import { SetJWT } from "../JWTmanagement";
import { SetRole } from "../RoleCookieManagement";

export const AdminLogin = async (FormData: FormData) => {
  try {
    const Email = FormData.get("Email");
    const Password = FormData.get("Password");
    const response: AxiosResponseType = await axios.post(
      "http://localhost:9000/Admin/login",
      {
        Email,
        Password,
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
