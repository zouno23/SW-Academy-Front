import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { GraduationCap } from "lucide-react";
type CourseType = {
  Title: string;
  Description: string;
  Teacher: { FullName: string; _id: string };
  _id: string;
  Lessons: any[];
};
function CoursesTable({ Course }: { Course: CourseType }) {
  const Lessons = Course.Lessons;
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">{Course?.Title}</h2>
          <Button variant={"outline"}>Add Lesson</Button>
        </div>
        <div className="grid gap-2">
          <Badge className="w-fit space-x-1" variant={"secondary"}>
            <GraduationCap />
            <p>{Course?.Teacher.FullName}</p>
          </Badge>
          <span className="text-gray-400 px-2">{Course?.Description}</span>
        </div>
      </div>
      <div className="mb-6">
        <h3 className=" text-base font-semibold px-2">Lessons</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Lesson</TableHead>
              <TableHead>Description</TableHead>
              <TableHead>Streamings</TableHead>
              <TableHead>Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Lessons?.map((Lesson) => (
              <TableRow>
                <TableCell>{Lesson?.Title}</TableCell>
                <TableCell>{Lesson?.Description}</TableCell>
                <TableCell>{Lesson?.Streams?.length}</TableCell>
                <TableCell>
                  <Button variant="ghost">Edit</Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default CoursesTable;
