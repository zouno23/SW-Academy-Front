"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableFooter,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { GetAbbr } from "@/lib/utils";
import { useEffect, useState } from "react";
import { Input } from "@/components/ui/input";
import NewTeacher from "./AddTeacher";
import Link from "next/link";
import { useRouter } from "next/navigation";

type Teachers = {
  FullName: string;
  _id: string;
  Status: boolean;
  Email: string;
  TotalCourses: number;
  LiveCourses: number;
  Picture: string;
}[];
function TeachersTable({ Teachers }: { Teachers: Teachers }) {
  const [Display, setDisplay] = useState(Teachers);
  const [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (query == "") {
      setDisplay(Teachers);
    } else {
      setDisplay(
        Teachers.filter(
          (teacher, index) =>
            teacher.FullName.toLowerCase().includes(query.toLowerCase()) &&
            index < 5
        )
      );
    }
  }, [query]);
  return (
    <>
      <div className="flex justify-between w-full  p-2 items-center sticky top-0 z-10 bg-white ">
        <h2 className="text-2xl p-4 font-bold">List of Teachers</h2>
        <div className="flex gap-4">
          <search>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </search>

          <NewTeacher />
        </div>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Teacher</TableCell>
            <TableCell className="text-center">Total Courses</TableCell>
            <TableCell className="text-center">
              {" "}
              Live Courses Teaching
            </TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display.map((teacher) => (
            <TableRow
              onClick={() => {
                router.push(`/Admin/Users/Teachers/${teacher._id}`);
              }}
            >
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-4 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100">
                  {teacher?.Picture ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + teacher?.Picture}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>
                      {GetAbbr(teacher?.FullName)}
                    </AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{teacher?.FullName}</h4>
                  <p>{teacher?.Email}</p>
                </span>
              </TableCell>
              <TableCell className="text-center">
                {teacher?.TotalCourses}
              </TableCell>
              <TableCell className="text-center">
                {teacher?.LiveCourses}
              </TableCell>
              <TableCell className="text-center">
                {teacher?.Status ? "Active" : "Inactive"}
              </TableCell>
            </TableRow>
          ))}
          <TableFooter></TableFooter>
        </TableBody>
      </Table>
    </>
  );
}

export default TeachersTable;
