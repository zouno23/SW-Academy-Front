"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "../AxiosTypes";
import { GetJWT } from "../JWTmanagement";

export const GetCoursesSample = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Courses-Sample",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetBootcampsSample = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Bootcamps-Sample",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminGetCourse = async (Id: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      `http://localhost:9000/Admin/Course?Id=` + Id,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminDeleteCourse = async (CourseId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.delete<AxiosResponseType>(
      `http://localhost:9000/Admin/Course?CourseId=` + CourseId,
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

export const AdminUpdateCourse = async (id: string, formData: FormData) => {
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
      `http://localhost:9000/Admin/Course?Id=` + id,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminUpdateLesson = async (
  id: string,
  Data: { Title: string; Description: string }
) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.put<AxiosResponseType>(
      `http://localhost:9000/Admin/Lesson?Id=` + id,
      Data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminDeleteLesson = async (id: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.delete<AxiosResponseType>(
      `http://localhost:9000/Admin/Lesson?Id=` + id,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminAddLesson = async (id: string, data: any) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      `http://localhost:9000/Admin/Lesson?Id=` + id,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminUploadDocumentation = async (
  LessonId: string,
  CourseId: string,
  Files: any
) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      `http://localhost:9000/Admin/Lesson/Upload?CourseId=` +
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

export const AdminAddBootCamp = async (data: any) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      `http://localhost:9000/Admin/Bootcamp`,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AdminUploadBootcampCover = async (
  data: FormData,
  Bootcamp: any
) => {
  try {
    const Cover = data.get("Cover");
    console.log(Bootcamp, Cover);
    const jwt = GetJWT();
    const formData = new FormData();
    formData.append("file", Cover || "");
    const img: AxiosResponseType = await axios.post(
      "http://localhost:9000/Admin/BootcampCover?BootcampId=" +
        Bootcamp._id +
        "&BootcampTitle=" +
        Bootcamp.Title,
      formData,
      {
        headers: {
          Authorization: `Bearer ${jwt}`,
          "Content-Type": "multipart/form-data",
        },
      }
    );
  } catch (e) {
    console.log(e);
  }
};

export const AdminGetBootCamp = async (Id: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      `http://localhost:9000/Admin/Bootcamp?BootcampId=` + Id,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
