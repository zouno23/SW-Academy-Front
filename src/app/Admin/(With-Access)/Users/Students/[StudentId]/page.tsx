import StudentDetails from "./StudentDetails";
import {
  GetStudent,
  GetStudentCourseCompletion,
  GetStudentCourses,
} from "@/app/Actions/Admin/AdminUsersActions";
import { redirect } from "next/navigation";
import StudentWorkSpace from "./StudentWorkspace";
async function Student({ params }: { params: { slug: string } | any }) {
  const StudentGetterApi = await GetStudent(params.StudentId);
  if (StudentGetterApi.error) {
    redirect("/Admin/Users/Students");
  }
  const CoursesGetter = await GetStudentCourses(params.StudentId);
  if (CoursesGetter.error?.status) {
    throw new Error(CoursesGetter.error?.message);
  }
  const CompletionGetter = await GetStudentCourseCompletion(params.StudentId);
  if (CompletionGetter.error?.status) {
    throw new Error(CompletionGetter.error?.message);
  }
  return (
    <main className=" overflow-y-auto grid grid-cols-2 lg:grid-cols-6 gap-8 h-full ">
      <StudentDetails student={StudentGetterApi.response?.Result} />
      <StudentWorkSpace
        CompletionGetter={CompletionGetter}
        CoursesGetter={CoursesGetter}
      />
    </main>
  );
}

export default Student;
