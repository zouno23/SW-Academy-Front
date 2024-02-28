import { GetLessonsPerMonth, GetLessonsProgress } from "@/app/Actions/DashboardActions";
import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
async function  DashboardCharts() {
    const {error,response}=await GetLessonsPerMonth();
    if(error) throw new Error(error);
    
    const {error1,response1}= await GetLessonsProgress()
    if  (error1) throw new Error(error1);
    return ( <div className="flex w-full gap-8 static  ">
        <BarChart Data={response.Result}/>
        <DoughnutChart Data={response1.Average}/>
    </div> );
}

export default DashboardCharts;