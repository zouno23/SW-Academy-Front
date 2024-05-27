import {
  GetTeacher,
  GetTeacherCourseSellings,
  GetTeacherCourses,
} from "@/app/Actions/Admin/AdminUsersActions";
import CoursesTaught from "./CoursesTaughtCarousel";
import TeacherDetails from "./TeacherDetails";
import TeacherSellings from "./TeacherSellings";
import { redirect } from "next/navigation";

async function Teacher({ params }: { params: { slug: string } | any }) {
  const TeacherGetterApi = await GetTeacher(params.TeacherId);
  if (TeacherGetterApi.error) {
    redirect("/Admin/Users/Teachers");
  }
  const CoursesGetter = await GetTeacherCourses(params.TeacherId);
  if (CoursesGetter.error?.status) {
    throw new Error(CoursesGetter.error?.message);
  }

  const TeacherSellingsGetter = await GetTeacherCourseSellings(
    params.TeacherId
  );
  if (TeacherSellingsGetter.error?.status) {
    throw new Error(TeacherSellingsGetter.error?.message);
  }
  return (
    <main className=" overflow-y-auto grid grid-cols-2 md:grid-cols-6 gap-8 h-full ">
      <TeacherDetails teacher={TeacherGetterApi.response?.Result} />
      <div className="grid gap-8 col-span-2 md:col-span-4 h-full py-4 grid-cols-1 px-10 ">
        <CoursesTaught Courses={CoursesGetter.response?.Result} />
        <TeacherSellings Data={TeacherSellingsGetter.response?.Result} />
      </div>
    </main>
  );
}

export default Teacher;
