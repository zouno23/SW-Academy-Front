import { Button } from "@/components/ui/button";
import Course from "./Course";
import ListHeader from "./ListHeader";
import {
  GetProducts,
  TeacherBestCourses,
} from "@/app/Actions/DashboardActions";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import NoCourses from "./NoCourses";
import Link from "next/link";

async function CourseList() {
  const role = GetRole();
  let list = [];
  if (role === "Teacher") {
    const { error, response } = await TeacherBestCourses();
    if (error) throw new Error(error);
    list = response?.Result || [];
  } else if (role === "Student") {
    const { error, response } = await GetProducts();
    if (error) throw new Error(error);
    list = response?.Result?.Courses || [];
  } else {
    return null;
  }
  return (
    <div className=" bg-white border w-full h-max flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 ">
      <div className=" flex w-full justify-between p-8">
        <h3 className="text-3xl font-bold">
          {role === "Teacher" ? "Best" : "My"} Courses
        </h3>
        <Link href="/Student/courses">
          <Button>View all courses</Button>
        </Link>
      </div>
      <div className="overflow-x-auto w-full  flex-col flex px-8 py-2">
        <ListHeader role={role} />
        {list.length === 0 ? (
          <NoCourses />
        ) : (
          list.map((course: any, item: number) => (
            <Link href={"/" + role + "/courses/" + course._id}>
              <Course props={course} key={item} role={role} />
            </Link>
          ))
        )}
      </div>
    </div>
  );
}

export default CourseList;
