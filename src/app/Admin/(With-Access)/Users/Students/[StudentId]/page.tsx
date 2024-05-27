import CoursesBought from "./CoursesBought";
import StudentDetails from "./StudentDetails";
import CourseCompletions from "./CourseCompletions";
import {
  GetStudent,
  GetStudentCourseCompletion,
  GetStudentCourses,
} from "@/app/Actions/Admin/AdminUsersActions";
import { redirect } from "next/navigation";
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
    <main className=" overflow-y-auto grid grid-cols-2 md:grid-cols-6 gap-8 h-full ">
      <StudentDetails student={StudentGetterApi.response?.Result} />
      <div className="grid gap-8 col-span-2 md:col-span-4 h-full py-4 grid-cols-1 px-10 ">
        <CoursesBought Courses={CoursesGetter.response?.Result} />
        <CourseCompletions Data={CompletionGetter.response?.Result} />
      </div>
    </main>
  );
}

export default Student;
