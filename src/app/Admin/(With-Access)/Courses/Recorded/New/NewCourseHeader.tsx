import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { searchParamsKeep } from "@/app/[Role]/courses/Courses/ListPagination";

function NewCourseHeader({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const step = searchParams.step || "1";
  const pages = ["Basic Information", "Course media", "Curriculum"];
  const NewCourseProgress = (
    page: string,
    index: number,
    pageNumber: string
  ) => {
    return (
      <span
        className={cn(
          "flex gap-2 items-center w-fit  justify-start bg-white z-10 px-4 dark:bg-black"
        )}
      >
        <Link
          href={`?step=${index + 1}`}
          className={cn(
            "bg-gray-200 rounded-full p-2 size-10  text-center dark:bg-slate-900",
            index + 1 == parseInt(pageNumber) &&
              "bg-blue-600 dark:bg-blue-600  text-white"
          )}
        >
          {index + 1}
        </Link>
        <h5 className="">{page}</h5>
      </span>
    );
  };
  const oldparams = searchParamsKeep("", searchParams);
  return (
    <div className="flex flex-col  w-full  justify-between items-center bg-blue-600 border rounded-xl divide-y-2 dark:bg-slate-900 shadow-md ">
      <div className="flex w-full  justify-between items-center py-8 px-8">
        <div className="w-1/2 flex justify-center flex-col gap-2 text-white">
          <h1 className="text-3xl font-bold">Add New Course</h1>
          <h4 className="text-lg font-semibold">
            Just fill the form and create your course.
          </h4>
        </div>
        <div className="w-1/2 flex gap-4 justify-end max-md:flex-col max-md:items-end">
          <Link href="/Admin/Courses/Recorded">
            <Button className="bg-white text-blue-600 hover:bg-white/80 hover:text-blue-600">
              Back to Courses
            </Button>
          </Link>
          <Link href={"?save=true" + oldparams}>
            <Button className="bg-white text-blue-600 hover:bg-white/80 hover:text-blue-600">
              Save Course
            </Button>
          </Link>
        </div>
      </div>

      <div className="flex w-full py-6 justify-between px-8 relative overflow-hidden bg-white rounded-lg border dark:bg-black">
        {pages.map((page, index) =>
          NewCourseProgress(page, index, step || "1")
        )}
        <Separator
          decorative
          className="w-11/12 absolute top-1/2 bg-gray-300"
        />
      </div>
    </div>
  );
}

export default NewCourseHeader;
