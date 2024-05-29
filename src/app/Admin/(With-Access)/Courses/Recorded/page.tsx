import { GetAllCourses } from "@/app/Actions/Admin/AdminUsersActions";
import CoursesTable from "./CoursesTable";

async function Recorded() {
  const CoursesGetter = await GetAllCourses();
  if (CoursesGetter.error) {
    throw new Error("get courses error");
  }
  return (
    <main className="bg-white  p-2 rounded-2xl h-full overflow-auto relative shadow-md ">
      <CoursesTable Courses={CoursesGetter.response?.Result} />
    </main>
  );
}

export default Recorded;
