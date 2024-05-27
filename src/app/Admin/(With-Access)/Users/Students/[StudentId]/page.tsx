import CoursesBought from "./CoursesBought";
import StudentDetails from "./StudentDetails";
import CourseCompletions from "./CourseCompletions";
function Student() {
  return (
    <main className=" overflow-y-auto grid grid-cols-2 md:grid-cols-6 gap-8 h-full ">
      <StudentDetails />
      <div className="grid gap-8 col-span-2 md:col-span-4 h-full py-4 grid-cols-1 px-10 ">
        <CoursesBought Courses={[]} />
        <CourseCompletions />
      </div>
    </main>
  );
}

export default Student;
