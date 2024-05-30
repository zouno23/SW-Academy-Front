"use client";
import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { NewLesson } from "./NewLesson";
import { LessonsList } from "./LessonsList";
import { LessonsType } from "@/lib/Types";
import { Button } from "@/components/ui/button";
import Link from "next/link";

function Curriculum({
  lessons,
  setLessons,
}: {
  lessons: LessonsType;
  setLessons: Dispatch<SetStateAction<LessonsType>>;
}) {
  return (
    <>
      <div className=" bg-white border w-full h-full  flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 px-8 pb-8 pt-4 shadow-md">
        <h2 className="p-4 text-xl font-semibold">Curriculum</h2>
        <div className="py-8 px-32 flex flex-col gap-8 h-full font-medium justify-center overflow-auto items-start   ">
          {lessons ? (
            <LessonsList lessons={lessons} setLessons={setLessons} />
          ) : null}
          <NewLesson lessons={lessons} setLessons={setLessons} />
        </div>
      </div>
      <div className="w-full justify-start">
        <Link href="?step=2">
          <Button className="w-fit text-md mx-2 ">Previous</Button>
        </Link>
      </div>
    </>
  );
}

export default Curriculum;
