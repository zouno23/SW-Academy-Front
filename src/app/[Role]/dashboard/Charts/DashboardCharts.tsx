import { GetCoursesPerMonth, GetCoursesProgress, GetTeacherAgenda, GetTeacherCourseSellings } from "@/app/Actions/DashboardActions";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import TeacherCalendar from "./TeacherCalendar";
async function  DashboardCharts() {
    const role = GetRole()
    if(role == 'Student'){
        const {error,response}=await GetCoursesPerMonth();
        if(error) throw new Error(error);
        const {error1,response1}= await GetCoursesProgress()
        if  (error1) throw new Error(error1);
        return ( 
            <div className="flex w-full gap-8  static max-md:flex-col ">
                <BarChart Data={response?.Result}/>
                <DoughnutChart Data={ response1?.Average}/>
            </div>)
    }else if(role === "Teacher") {
        const {error , response}=await GetTeacherCourseSellings()
        if(error)throw new Error(error)
        const {error1,response1}= await GetTeacherAgenda()
        if(error1) throw new Error(error1)
        return ( 
            <div className="flex w-full gap-8 max-md:flex-col ">
                <BarChart Data={response?.Result}/>
                <TeacherCalendar events={response1?.Result}/>
            </div>)
    }
    else{return null}
}

export default DashboardCharts;