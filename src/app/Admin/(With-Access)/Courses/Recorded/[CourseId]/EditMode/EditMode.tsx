"use client";
import { useEffect, useState } from "react";
import { CourseResourcesTable } from "../CourseResourcesTable";
import CourseDetailsEditMode from "./CourseDetailsEditMode";
import { CourseHeaderEditMode } from "./CourseHeaderEditMode";
import { useRouter } from "next/navigation";
import { usePathname } from "next/navigation";

function EditMode({ CourseData }: { CourseData: any }) {
  const router = useRouter();
  const pathname = usePathname();
  const [isDone, setIsDone] = useState("");
  useEffect(() => {
    if (isDone == "true") {
      router.refresh();
      router.replace(pathname);
    }
  });

  return (
    <div className="flex flex-col  bg-white rounded-xl dark:bg-slate-900 border h-max w-full">
      <CourseHeaderEditMode
        Title={CourseData.Title}
        IsDone={isDone}
        setIsDone={setIsDone}
      />
      <main className="flex flex-1 flex-col gap-8 p-4 md:gap-12 md:p-6">
        <CourseDetailsEditMode
          props={CourseData}
          isDone={isDone}
          setIsDone={setIsDone}
        />
        <CourseResourcesTable props={CourseData} />
      </main>
    </div>
  );
}

export default EditMode;
