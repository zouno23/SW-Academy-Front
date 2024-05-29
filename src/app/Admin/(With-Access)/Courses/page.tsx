import AdminCards from "../Dashboard/AdminCards";
import BootcampsList from "./BootcampsList";
import CoursesList from "./CoursesList";

function Courses() {
  return (
    <main className="grid grid-cols-2 gap-6 h-full pb-2 ">
      <div className="w-full col-span-2">
        <AdminCards />
      </div>
      <CoursesList />
      <BootcampsList />
    </main>
  );
}

export default Courses;
