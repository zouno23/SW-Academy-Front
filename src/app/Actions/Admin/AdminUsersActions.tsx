"use server";

import axios from "axios";
import { AxiosErrorType, AxiosResponseType } from "../AxiosTypes";
import { GetJWT } from "../JWTmanagement";

export const GetNewestTeachers = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Recent-Teachers",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetNewestStudents = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Recent-Students",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetNewestAdmins = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Recent-Admins",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetAllTeachers = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/All-Teachers",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetAllStudents = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/All-Students",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetAllAdmins = async () => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/All-Admins",
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

type userCreationType = {
  FullName: string;
  Email: string;
  Password: string;
};
export const AddTeacher = async (Data: userCreationType) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      "http://localhost:9000/Admin/Create-Teacher",
      Data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const AddStudent = async (Data: userCreationType) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      "http://localhost:9000/Admin/Create-Student",
      Data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

type adminCreationType = {
  Name: string;
  Email: string;
  Password: string;
  Role: string;
};
export const AddAdmin = async (Data: adminCreationType) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.post<AxiosResponseType>(
      "http://localhost:9000/Admin/Create-Admin",
      Data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetTeacher = async (TeacherId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Teacher?TeacherId=" + TeacherId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetTeacherCourses = async (TeacherId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Teacher-Courses?TeacherId=" + TeacherId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetTeacherCourseSellings = async (TeacherId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Teacher-Sold-Courses?TeacherId=" + TeacherId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const UpdateTeacher = async (TeacherId: string, data: any) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.put<AxiosResponseType>(
      "http://localhost:9000/Admin/Teacher?TeacherId=" + TeacherId,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetStudent = async (StudentId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Student?StudentId=" + StudentId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetStudentCourses = async (StudentId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Student-Courses?StudentId=" + StudentId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const GetStudentCourseCompletion = async (StudentId: string) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.get<AxiosResponseType>(
      "http://localhost:9000/Admin/Student-Completed-Courses?StudentId=" +
        StudentId,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};

export const UpdateStudent = async (StudentId: string, data: any) => {
  try {
    const jwt = GetJWT();
    if (!jwt) throw new Error("No JWT available");
    const response: AxiosResponseType = await axios.put<AxiosResponseType>(
      "http://localhost:9000/Admin/Student?StudentId=" + StudentId,
      data,
      { headers: { Authorization: `Bearer ${jwt}` } }
    );
    return { error: null, response: response.data };
  } catch (error: any) {
    const e: AxiosErrorType = error;
    return { error: e.response?.data, response: null };
  }
};
