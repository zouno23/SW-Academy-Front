import { Button } from "@/components/ui/button";
import Course from "./Course";
import ListHeader from "./ListHeader";
import { TeacherBestCourses } from "@/app/Actions/DashboardActions";

async function CourseList () {
    const {error,response}= await TeacherBestCourses()
    if (error) throw new Error(error)
    const list = response?.Result || []
    return ( <div className=" bg-white border w-full h-max flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 ">
    <div className=" flex w-full justify-between p-8">
        <h3 className="text-3xl font-bold">Best Courses</h3>
        <Button>View all courses</Button>
    </div>
    <div className="overflow-x-auto w-full  flex-col flex px-8">
    <ListHeader/>
    {list.map((course:any)=> <Course props={course}/> )}
    </div>
    </div> );
}

export default CourseList;