"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { GetAbbr } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";

type Courses = {
  Title: string;
  _id: string;
  Status: boolean;
  Description: string;
  Sellings: number;
  Rating: number;
  Cover: string;
}[];
function CoursesTable({ Courses }: { Courses: Courses }) {
  const [Display, setDisplay] = useState(Courses);
  const [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (query == "") {
      setDisplay(Courses);
    } else {
      setDisplay(
        Courses.filter(
          (Course, index) =>
            Course.Title.toLowerCase().includes(query.toLowerCase()) &&
            index < 5
        )
      );
    }
    console.log(Display);
  }, [query]);
  return (
    <>
      <div className="flex justify-between w-full p-2 items-center sticky top-0 z-10 bg-white">
        <h2 className="text-2xl p-4 font-bold">List of Courses</h2>
        <div className="flex gap-4">
          <search>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </search>
          <Link href={"/Admin/Courses/Recorded/New"}>
            <Button>Add Course</Button>
          </Link>
        </div>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Course</TableCell>
            <TableCell className="text-center">Total Enrollements</TableCell>
            <TableCell className="text-center"> Rating</TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display?.map((Course) => (
            <TableRow
              onClick={() => router.push("/Admin/Users/Courses/" + Course._id)}
            >
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-2 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100 rounded-lg">
                  {Course.Cover ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + Course.Cover}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>{GetAbbr(Course.Title)}</AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{Course.Title}</h4>
                  <p>{Course.Description}</p>
                </span>
              </TableCell>
              <TableCell className="text-center">{Course.Sellings}</TableCell>
              <TableCell className="text-center">
                {Course.Rating || 0}
              </TableCell>
              <TableCell className="text-center">
                {Course.Status ? "Active" : "Inactive"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default CoursesTable;
