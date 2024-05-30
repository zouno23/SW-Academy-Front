"use client";
import { useState } from "react";
import { cn } from "@/lib/utils";
import CoursesBought from "./CoursesBought";
import CourseCompletions from "./CourseCompletions";
import StudentCoursesTable from "./StudentCoursesTable";

type Response = {
  response: any;
  error: null;
};
export default function StudentWorkSpace({
  CoursesGetter,
  CompletionGetter,
}: {
  CoursesGetter: Response;
  CompletionGetter: Response;
}) {
  const [IsCourses, setIsCourses] = useState(false);

  return (
    <div
      className={cn(
        "grid gap-8 col-span-2 md:col-span-4 h-full py-4 grid-cols-1 px-10",
        IsCourses && "py-0"
      )}
    >
      {!IsCourses ? (
        <>
          <CoursesBought
            Courses={CoursesGetter.response?.Result}
            setIsCourses={setIsCourses}
          />
          <CourseCompletions Data={CompletionGetter.response?.Result} />
        </>
      ) : (
        <StudentCoursesTable
          Courses={CoursesGetter.response?.Result}
          IsCourses={IsCourses}
          setIsCourses={setIsCourses}
        />
      )}
    </div>
  );
}
