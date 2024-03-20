import { Getliste } from "@/app/Actions/Admin/TeacherManagement";
import { Lesson, teacher,  } from "./DataStructure"
import { AxiosResponseType } from "@/app/Actions/AxiosTypes";


//  export const Data: Array<teacher> = [
//     {
//     teacherName: "Alice Smith",
//     email: "alice.smith@example.com",
//     number: "111-222-3333",
//     courses: 2,
//     availability: "true",
//     status:true
//   },
//   {
//     teacherName: "Bob Johnson",
//     email: "bob.johnson@example.com",
//     number: "444-555-6666",
//     courses: 4,
//     availability: "false",
//     status:true
//   },
//   {
//     teacherName: "Emily Brown",
//     email: "emily.brown@example.com",
//     number: "777-888-9999",
//     courses: 1,
//     availability: "true",
//     status:true

//   }
//   ];


export async function Data(): Promise<Array<teacher>> {
  try {
    const { response } = await Getliste();
    
    return response?.data || [];
  } catch (error) {
    console.error("Error fetching data:", error);
    const defaultTeacher: teacher = {
      teacherName: "Bob Johnson",
      email: "bob.johnson@example.com",
      number: "444-555-6666",
      courses: "4",
      availability: "false",
      status: true
    };
    return [defaultTeacher];
  }
}

