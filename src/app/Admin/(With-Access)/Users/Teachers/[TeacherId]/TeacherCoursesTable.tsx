"use client";
import Image from "next/image";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { GetAbbr } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

type Courses = {
  Cover: string;
  Field: string;
  IsLive: boolean;
  Rating: number;
  Title: string;
  Description: string;
  _id: string;
  Buyers: number;
}[];
function TeacherCoursesTable({
  Courses,
  IsCourses,
  setIsCourses,
}: {
  Courses: Courses;
  IsCourses: boolean;
  setIsCourses: Dispatch<SetStateAction<boolean>>;
}) {
  const [Display, setDisplay] = useState(Courses);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query == "") {
      setDisplay(Courses);
    } else {
      setDisplay(
        Courses.filter((Course, index) =>
          Course.Title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);
  return (
    <div className=" bg-white rounded-2xl p-8 py-4 overflow-auto shadow-md">
      <div className="flex gap-4 items-center justify-between h-fit ">
        <span className="flex gap-1 items-center">
          <Button
            variant={"ghost"}
            className="rounded-full hover:bg-slate-50/10  p-0 px-2 py-2 "
            onClick={() => setIsCourses(false)}
          >
            <ArrowLeft className="size-5  " />
          </Button>
          <h2 className="text-2xl p-4 font-bold">List of Teachers</h2>
        </span>
        <search>
          <Input
            placeholder="Search"
            onChange={(e) => {
              setQuery(e.target.value);
            }}
          />
        </search>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell className="text-center">Field</TableCell>
            <TableCell className="text-center"> Rating</TableCell>
            <TableCell className="text-center"> Sellings</TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display.map((course: any) => (
            <TableRow>
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-4 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100 rounded-xl">
                  {course?.Cover ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + course?.Cover}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>{GetAbbr(course?.Title)}</AvatarFallback>
                  )}
                </Avatar>
                <span className=" text-pretty ">
                  <h4 className="text-xl font-semibold">{course?.Title}</h4>
                  <p>{course.Description}</p>
                </span>
              </TableCell>
              <TableCell className="text-center">{course?.Field}</TableCell>
              <TableCell className="text-center">
                {course?.Rating || 0}/5
              </TableCell>
              <TableCell className="text-center">
                {course.Buyers} Students
              </TableCell>
              <TableCell className="text-center">
                {course?.IsLive ? "Live" : "Recorded"}
              </TableCell>
            </TableRow>
          ))}
          <TableFooter></TableFooter>
        </TableBody>
      </Table>
    </div>
  );
}

export default TeacherCoursesTable;
