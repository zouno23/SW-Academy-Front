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

export const updateCourse = async (id: string, formData: FormData) => {
  try {
    const Title = formData.get("Title");
    const Field = formData.get("Field");
    const RequiredLevel = formData.get("RequiredLevel");
    const Price = formData.get("Price");
    const Description = formData.get("Description");
    const data = {
      Title,
      Field,
      RequiredLevel,
      Price,
      Description,
    };
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.put<AxiosResponseType>(
      `http://localhost:9000/course?Id=` + id,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const updateLesson = async (
  id: string,
  Data: { Title: string; Description: string }
) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.put<AxiosResponseType>(
      `http://localhost:9000/Lesson?Id=` + id,
      Data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
export const deleteLesson = async (id: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.delete<AxiosResponseType>(
      `http://localhost:9000/Lesson?Id=` + id,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
export const AddLesson = async (id: string, data: any) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      `http://localhost:9000/Lesson?Id=` + id,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const UploadDocumentation = async (
  LessonId: string,
  CourseId: string,
  Files: any
) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      `http://localhost:9000/lesson/upload?CourseId=` +
        CourseId +
        "&LessonId=" +
        LessonId,
      Files,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const DeleteCourse = async (CourseId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.delete<AxiosResponseType>(
      `http://localhost:9000/course?CourseId=` + CourseId,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetTeacherLessons = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/lessons",
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
        },
      }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
