"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "./AxiosTypes";
import { GetJWT, SetJWT } from "./JWTmanagement";
import { SetRole } from "./RoleCookieManagement";
const url = "http://localhost:9000";

export const GetMeetinsList = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get(url + "/Meetings", {
      headers: { Authorization: `Bearer ${jwt}` },
    });
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const CreateMeeting = async (FormData: FormData) => {
  try {
    const Lesson = FormData.get("Lesson");
    const emails = FormData.get("email") as string;
    const emailsList = emails!.split(",");
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      "http://localhost:9000/Meeting",
      { LessonId: Lesson, participants: emailsList },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    console.log(error);
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const CheckMeeting = async (FormData: FormData) => {
  try {
    const SecretCode = FormData.get("Secret Code");
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      url + "/Check-Meeting",
      { SecretCode: SecretCode as string },
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    console.log(error);
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
