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
import NewStudent from "./AddStudent";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

type Students = {
  FullName: string;
  _id: string;
  Status: boolean;
  Email: string;
  Courses: any[];
  BootCamps: any[];
  Picture: string;
}[];
function StudentsTable({ Students }: { Students: Students }) {
  const [Display, setDisplay] = useState(Students);
  const [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (query == "") {
      setDisplay(Students);
    } else {
      setDisplay(
        Students.filter(
          (student, index) =>
            student.FullName.toLowerCase().includes(query.toLowerCase()) &&
            index < 5
        )
      );
    }
  }, [query]);
  return (
    <>
      <div className="flex justify-between w-full  p-2 items-center sticky top-0 z-10 bg-white">
        <h2 className="text-2xl p-4 font-bold">List of Students</h2>
        <div className="flex gap-4">
          <search>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </search>
          <NewStudent />
        </div>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Student</TableCell>
            <TableCell className="text-center">Total Courses</TableCell>
            <TableCell className="text-center"> Total BootCamps</TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display.map((student) => (
            <TableRow
              onClick={() =>
                router.push("/Admin/Users/Students/" + student._id)
              }
            >
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-2 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100">
                  {student.Picture ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + student.Picture}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>{GetAbbr(student.FullName)}</AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{student.FullName}</h4>
                  <p>{student.Email}</p>
                </span>
              </TableCell>
              <TableCell className="text-center">
                {student.Courses?.length}
              </TableCell>
              <TableCell className="text-center">
                {student.BootCamps?.length}
              </TableCell>
              <TableCell className="text-center">
                {student.Status ? "Active" : "Inactive"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default StudentsTable;
