
import DashboardCards from "./Cards/DashboardCards";
import DashboardCharts from "./Charts/DashboardCharts";
import Course from "./Courses/Course";
import CourseList from "./Courses/CourseList";
import Header from "./Header/Header";
import ProductsTable from "./ProductsList/ProductsTable";


async function Dashboard( 
    {searchParams}:
    {
        searchParams:{
            [key: string] : string | undefined
        }
    })  {
    
    return ( 
        
           <main className="bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black ">
            <Header/>
            <DashboardCards/>   
            <DashboardCharts/>
           {/* <ProductsTable searchParams={searchParams} /> */}
            <CourseList/>
            </main>
          
     );
}


    

    
    
    export default Dashboard;