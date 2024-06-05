import { cn } from "@/lib/utils";
import DashboardCards from "./Cards/DashboardCards";
import DashboardCharts from "./Charts/DashboardCharts";
import CourseList from "./Courses/CourseList";
import Header from "../../../components/Header/Header";
import ProductsTable from "./ProductsList/ProductsTable";

async function Dashboard({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const phoneSideBar = searchParams.sidebar || "false";
  return (
    <main
      className={cn(
        "bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black ",
        phoneSideBar === "true" && "max-md:overflow-hidden"
      )}
    >
      <Header searchParams={searchParams} />
      <DashboardCards />
      <DashboardCharts />
      <CourseList />
    </main>
  );
}

export default Dashboard;
