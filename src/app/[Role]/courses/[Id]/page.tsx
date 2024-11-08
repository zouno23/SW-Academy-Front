import { CourseHeader } from "./CourseHeader";
import { CourseDetails } from "./CourseDetails";
import { CourseResourcesTable } from "./CourseResourcesTable";
import { GetCourse } from "@/app/Actions/CoursesActions";
import { redirect } from "next/navigation";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import EditMode from "./EditMode/EditMode";

async function Course({
  params,
  searchParams,
}: {
  params: { slug: string } | any;
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const role = GetRole();
  let state = role === "Teacher" ? searchParams.state || "View" : "View";
  const { error, response } = await GetCourse(params?.Id);
  if (error) {
    redirect("/" + params.Role + "/courses");
  }
  const CourseData = response?.Result;
  return (
    <div className="w-full h-full bg-gray-100  flex overflow-auto overflow-x-hidden dark:bg-black p-8 lg:px-12 ">
      {state === "View" ? (
        <div className="flex flex-col  bg-white rounded-xl dark:bg-slate-900 border h-max w-full">
          <CourseHeader Title={CourseData?.Title} params={params} />
          <main className="flex flex-1 flex-col gap-8 p-4 md:gap-12 md:p-6">
            <CourseDetails props={CourseData} />
            <CourseResourcesTable props={CourseData} />
          </main>
        </div>
      ) : (
        <EditMode CourseData={CourseData} />
      )}
    </div>
  );
}
export default Course;
