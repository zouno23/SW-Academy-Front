import {
  GetTeacher,
  GetTeacherCourseSellings,
  GetTeacherCourses,
} from "@/app/Actions/Admin/AdminUsersActions";
import TeacherDetails from "./TeacherDetails";
import { redirect } from "next/navigation";
import TeacherWorkspace from "./TeacherWorkspace";

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
      <TeacherWorkspace
        SellingsGetter={TeacherSellingsGetter}
        CoursesGetter={CoursesGetter}
      />
    </main>
  );
}

export default Teacher;
