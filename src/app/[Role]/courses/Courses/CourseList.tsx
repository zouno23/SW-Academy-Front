import Course from "./Course";
import ListHeader from "./ListHeader";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import NoCourses from "./NoCourses";
import ListPagination, { searchParamsKeep } from "./ListPagination";
import { GetCourses } from "@/app/Actions/CoursesActions";
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { redirect } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ChevronDown } from "lucide-react";
import Link from "next/link";
import ListSearch from "./ListSearch";



async function CourseList({ searchParams }:
    {
        searchParams: {
            [key: string]: string | undefined
        }
    }) {
        
    const role = GetRole();
    // getting the page index for the list 
    let ListPage = searchParams.count || "1"
    // filter in params for either  all or only owned courses . PS: the teaher can only access his own courses so this is not a problem
    let ListType : string;

    if (role == "Teacher")
        ListType = "Owned"
    else
        ListType = searchParams.type || "All"

    let list: any = []
    let subList: any = []

    //courses fetching
    const result = await GetCourses()
    if (result.error) throw new Error(result.error)

    //pushing the courses in list 
    if (role === "Teacher" || ListType === "Owned") {
        list.push(...result.response?.Result?.MyCourses)
    }
    else {
        list.push(...result.response?.Result?.AllCourses)
    }
    
    // Making sure that we change the param that we need to change
    const OldSearchParams = searchParamsKeep("type", searchParams)

   

    //filtring the list based on the search params
    if (list && searchParams.query)
        {subList = list.filter((course: any) => {
            const query = searchParams?.query?.toString()?.toLowerCase()
            if (ListType === "Owned") {
                return (course?.Course?.Title?.toLowerCase().includes(query) ||
                    course?.Course?.Field?.toLowerCase().includes(query) ||
                    course?.Course?.Price?.toString()?.toLowerCase().includes(query))
            }
            return (
                course?.Title?.toLowerCase().includes(query) ||
                course?.Field?.toLowerCase().includes(query) ||
                course?.Price?.toString()?.toLowerCase().includes(query)
            )
        })
    }
    else 
    {subList = list}

     //Pagination management
    if(subList.length>0)
    { if (parseFloat(ListPage) % 1 != 0) {
        ListPage = Math.ceil(parseInt(ListPage)) + ""
        redirect(`?count=${ListPage}`+OldSearchParams)
    }
    if (parseInt(ListPage) > Math.ceil(subList.length / 5)) {
        ListPage = Math.ceil(subList.length / 5) + ""
        redirect(`?count=${ListPage}`+OldSearchParams)
    }
    else if (parseInt(ListPage) <= 0 ) {
        ListPage = "1"
        redirect(`?count=${ListPage}`+OldSearchParams)
    }}


    //mapping function with pagination
    const ListMapping = () => {
        return subList.map((course: any, item: number) =>
            item < (10 * parseInt(ListPage)) && item > ((10 * (parseInt(ListPage) - 1)) - 1) ?
                <Course props={course} type={ListType as string} key={item} role={role} /> : null)
    }

    

    return (<div className=" bg-white border w-full h-max  flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 ">
        <div className=" flex w-full p-8 justify-between max-md:flex-col max-md:gap-4 items-center ">
            {role === "Student" ? <Popover>
                <PopoverTrigger asChild>
                    <Button variant="ghost" className='border p-4 py-8 text-3xl font-bold gap-3'>
                        {ListType == "All" ? "All Courses" : "My Courses"}
                        <ChevronDown className='size-10 pt-[0.7] font-semibold' />
                    </Button>
                </PopoverTrigger>
                <PopoverContent className='flex flex-col gap-2 p-0 w-max '>
                    <Link href={`?type=${ListType === "All" ? "Owned" : "All"}` + OldSearchParams} >
                        <Button variant="ghost" className=' p-14 py-6  text-2xl font-bold justify-start gap-3'>{ListType === "All" ? "My Courses" : "All Courses"}</Button>
                    </Link>
                </PopoverContent>
            </Popover> : <h3 className="text-3xl font-bold"> My Courses</h3>}
            <div className="flex gap-4 w-2/5 max-md:w-full max-md:justify-center  justify-end">
            <ListSearch />
            {
            role ==="Teacher" &&
            <Link href="/Teacher/courses/add-new-course" >
                <Button className="inline-flex w-auto h-auto"> Create new Course</Button>
            </Link>
            }
            </div>
        </div>
        <div className="overflow-x-auto w-full h-max  flex-col flex px-8 py-2">
            <ListHeader role={role || ""} />
            {subList.length <= 0 ? <NoCourses /> : ListMapping()}
        </div>

        {subList.length > 0 && <ListPagination searchParams={searchParams} max={subList.length / 10} />}
    </div>);
}

export default CourseList;