import { GetCoursesSample } from "@/app/Actions/Admin/AdminCoursesActions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import NotFound from "./NotFound";
import { GetAbbr } from "@/lib/utils";
import Link from "next/link";

async function CoursesList() {
  const CoursesGetter = await GetCoursesSample();
  if (CoursesGetter.error?.Status === 500)
    throw new Error(CoursesGetter.error.message);
  const Courses = CoursesGetter.response?.Result;
  return (
    <div className=" bg-white rounded-2xl col-span-2 md:col-span-1 shadow-md">
      <span className="flex justify-between p-4 items-center">
        <h2 className="text-2xl font-bold">Courses</h2>
        <Link href={"/Admin/Courses/Recorded"}>
          <Button variant={"outline"}>View all</Button>
        </Link>{" "}
      </span>
      {Courses?.length > 0 ? (
        <Table className="h-full">
          <TableHeader>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Status</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Courses.map((Course: any) => (
              <TableRow className="text-pretty ">
                <TableCell className="flex gap-2 items-center text-lg font-semibold">
                  <Avatar className="size-16 text-sm font-normal rounded-lg">
                    {Course.Cover ? (
                      <Image
                        src={"http://localhost:9000/" + Course.Cover}
                        alt=""
                        height={160}
                        width={160}
                      />
                    ) : (
                      <AvatarFallback className="rounded-lg">
                        {GetAbbr(Course.Title)}
                      </AvatarFallback>
                    )}
                  </Avatar>
                  {Course.Title}
                </TableCell>
                <TableCell>{Course.Description}</TableCell>
                <TableCell>{Course.Field}</TableCell>
                <TableCell>{Course.IsLive ? "Live" : "Recorded"}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <>
          <Table className="h-full">
            <TableHeader>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Field</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHeader>
          </Table>
          <NotFound message="No Courses Found" />
        </>
      )}
    </div>
  );
}

export default CoursesList;
