
import DashboardCards from "./(Cards)/DashboardCards";
import DashboardCharts from "./(Charts)/DashboardCharts";
import ProductsTable from "./(Products List)/ProductsTable";


function Dashboard() {
    
    return ( 
        
           <main className="bg-gray-100 w-full h-full overflow-auto p-8 flex flex-col gap-8 ">
            <DashboardCards/>
            <DashboardCharts/>
           <ProductsTable/>
          
            </main>
          
     );
}


    

    
    
    export default Dashboard;