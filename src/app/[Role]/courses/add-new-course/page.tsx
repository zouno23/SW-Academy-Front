import Header from "@/components/Header/Header";

import { cn } from "@/lib/utils";
import NewCourseHeader from "./NewCourseHeader";
import CreateCourseForm from "./StepsManager";

function AddCourse({searchParams}:
    {
        searchParams:{
            [key: string] : string | undefined
        }
    }) {

    const phoneSideBar = searchParams.sidebar || "false"

    return ( 
    <main className={cn("bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black z-0 items-end ",phoneSideBar==="true" && "max-md:overflow-x-hidden ")}>
        <Header searchParams={searchParams}/>
        <NewCourseHeader searchParams={searchParams}/>
        <CreateCourseForm/>
    </main> 
    );
}

export default AddCourse;