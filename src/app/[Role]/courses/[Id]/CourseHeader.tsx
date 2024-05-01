import Link from "next/link";
import { Album, SquarePen, Trash } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import { DeleteCourse } from "@/app/Actions/CoursesActions";
import { redirect } from "next/navigation";

export function CourseHeader({
  Title,
  params,
}: {
  Title: string;
  params: { slug: string } | any;
}) {
  const CourseId = params.Id;
  const role = GetRole();
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 rounded-xl">
      <Link className="lg:hidden" href="#">
        <Album className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex justify-between ">
        <h1 className="font-semibold text-lg md:text-2xl">{Title}</h1>
      </div>
      <div className="flex items-center gap-2">
        {role === "Teacher" ? (
          <>
            <Link href="?state=Edit">
              <Button
                size="icon"
                variant="ghost"
                className="hover:text-blue-600"
              >
                <SquarePen className="h-5 w-5" />
                <span className="sr-only">Edit Course</span>
              </Button>
            </Link>
            <form
              action={async () => {
                "use server";
                const { error, response } = await DeleteCourse(CourseId);
                if (error) {
                  console.log(error);
                } else {
                  console.log(response);
                  redirect("/Teacher/courses");
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
        ) : null}
      </div>
    </header>
  );
}
