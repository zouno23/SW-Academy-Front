"use client";
import TeacherSellings from "./TeacherSellings";
import CoursesTaught from "./CoursesTaughtCarousel";
import { useState } from "react";
import TeacherCoursesTable from "./TeacherCoursesTable";
import { cn } from "@/lib/utils";

type Response = {
  response: any;
  error: null;
};
export default function TeacherWorkspace({
  CoursesGetter,
  SellingsGetter,
}: {
  CoursesGetter: Response;
  SellingsGetter: Response;
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
          <CoursesTaught
            Courses={CoursesGetter.response?.Result}
            IsCourses={IsCourses}
            setIsCourses={setIsCourses}
          />
          <TeacherSellings Data={SellingsGetter.response?.Result} />
        </>
      ) : (
        <TeacherCoursesTable
          Courses={CoursesGetter.response?.Result}
          IsCourses={IsCourses}
          setIsCourses={setIsCourses}
        />
      )}
    </div>
  );
}
