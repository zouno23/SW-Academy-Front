import BarChart from "./BarChart";
import DoughnutChart from "./DoughnutChart";
function DashboardCharts() {
    return ( <div className="flex w-full gap-8 ">
        <BarChart/>
        <DoughnutChart/>
    </div> );
}

export default DashboardCharts;