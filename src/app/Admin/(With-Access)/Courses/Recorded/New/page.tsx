import Header from "@/components/Header/Header";

import { cn } from "@/lib/utils";
import NewCourseHeader from "./NewCourseHeader";
import CreateCourseForm from "./StepsManager";
import { GetJWT } from "@/app/Actions/JWTmanagement";

function AddCourse({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const JWT = GetJWT();
  return (
    <main
      className={cn(
        "bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black z-0 items-end "
      )}
    >
      <NewCourseHeader searchParams={searchParams} />
      <CreateCourseForm jwt={JWT || ""} />
    </main>
  );
}

export default AddCourse;
