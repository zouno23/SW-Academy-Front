import Link from "next/link";
import { Album, ArrowLeft, SquarePen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import { DeleteCourse } from "@/app/Actions/CoursesActions";
import { redirect } from "next/navigation";
import { AdminDeleteCourse } from "@/app/Actions/Admin/AdminCoursesActions";

export function CourseHeader({
  Title,
  params,
}: {
  Title: string;
  params: { slug: string } | any;
}) {
  const CourseId = params.CourseId;
  const role = GetRole();
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 rounded-xl">
      <Link href={"/Admin/Courses/Recorded"}>
        <Button
          variant={"ghost"}
          className="rounded-full hover:bg-slate-50/10  p-0 px-2 py-2"
        >
          <ArrowLeft className="size-5 text-black " />
        </Button>
      </Link>
      <div className="w-full flex justify-betwen relative ">
        <h1 className="font-semibold text-lg md:text-2xl">{Title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <>
          <Link href="?state=Edit">
            <Button size="icon" variant="ghost" className="hover:text-blue-600">
              <SquarePen className="h-5 w-5" />
              <span className="sr-only">Edit Course</span>
            </Button>
          </Link>
          <form
            action={async () => {
              "use server";
              const { error, response } = await AdminDeleteCourse(CourseId);
              if (error) {
                console.log(error);
              } else {
                redirect("/Admin/Courses/Recorded");
              }
            }}
          >
            <Button
              size="icon"
              variant="ghost"
              type="submit"
              className="hover:text-red-600"
            >
              <Trash className="size-5" />
              <span className="sr-only"> Delete Course</span>
            </Button>
          </form>
        </>
      </div>
    </header>
  );
}
