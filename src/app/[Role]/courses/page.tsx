import Header from "@/components/Header/Header";
import ProductsTable from "../dashboard/ProductsList/ProductsTable";
import { cn } from "@/lib/utils";
import CourseList from "./Courses/CourseList";


export const dynamic = 'force-dynamic'

function Courses( {searchParams}:
    {
        searchParams:{
            [key: string] : string | undefined
        }
    }) {
        const phoneSideBar = searchParams.sidebar || "false"
    return ( <main className={cn("bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black z-0 ",phoneSideBar==="true" && "max-md:overflow-x-hidden ")}>
        <Header searchParams={searchParams}/>
        <CourseList searchParams={searchParams}/>
    </main> );
}

export default Courses;