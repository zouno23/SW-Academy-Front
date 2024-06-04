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
import NewLesson from "./NewLessonDialog";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import {
  AdminDeleteLesson,
  AdminUpdateLesson,
} from "@/app/Actions/Admin/AdminCoursesActions";
import { useRouter } from "next/navigation";
export type CourseType = {
  Title: string;
  Description: string;
  Teacher: { FullName: string; _id: string };
  _id: string;
  Lessons: any[];
};
function CourseTable({ Course }: { Course: CourseType }) {
  const router = useRouter();
  const [EditMode, setEditMode] = useState(-1);
  const [lesson, setLesson] = useState({ Title: "", Description: "" });
  const Lessons = Course.Lessons;
  return (
    <>
      <div className="grid grid-cols-1">
        <div className="flex justify-between mb-4">
          <h2 className="text-lg font-semibold">{Course?.Title}</h2>
          <NewLesson Course={Course} />
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
              <TableHead className="text-center">Description</TableHead>
              <TableHead className="text-center">Streamings</TableHead>
              <TableHead className="text-center">Actions</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Lessons?.map((Lesson, index) => (
              <>
                {EditMode == index ? (
                  <TableRow>
                    <TableCell>
                      <Input
                        defaultValue={Lesson?.Title}
                        onChange={(e) => {
                          setLesson((prev) => ({
                            ...prev,
                            Title: e.target.value,
                          }));
                        }}
                      />
                    </TableCell>
                    <TableCell>
                      <Input
                        defaultValue={Lesson?.Description}
                        onChange={(e) => {
                          setLesson((prev) => ({
                            ...prev,
                            Description: e.target.value,
                          }));
                        }}
                      />
                    </TableCell>
                    <TableCell className="text-center">
                      {Lesson?.Streams?.length}
                    </TableCell>
                    <TableCell>
                      <Button
                        variant="ghost"
                        onClick={async () => {
                          setEditMode(-1);
                          const setter = await AdminUpdateLesson(
                            Lesson._id,
                            lesson
                          );
                          if (setter.error)
                            throw new Error(setter.error.message);
                          setLesson({ Title: "", Description: "" });
                          router.refresh();
                        }}
                      >
                        Save
                      </Button>
                    </TableCell>
                  </TableRow>
                ) : (
                  <TableRow>
                    <TableCell>{Lesson?.Title}</TableCell>
                    <TableCell className="text-center">
                      {Lesson?.Description}
                    </TableCell>
                    <TableCell className="text-center">
                      {Lesson?.Streams?.length}
                    </TableCell>
                    <TableCell className="text-center">
                      <Button
                        variant="ghost"
                        onClick={() => {
                          setEditMode(index);
                          setLesson({
                            Title: Lesson?.Title,
                            Description: Lesson?.Description,
                          });
                        }}
                      >
                        Edit
                      </Button>
                      <Button
                        variant={"ghost"}
                        onClick={async () => {
                          const deleter = await AdminDeleteLesson(Lesson._id);
                          if (deleter.error)
                            throw new Error(deleter.error.message);
                          router.refresh();
                        }}
                      >
                        Delete
                      </Button>
                    </TableCell>
                  </TableRow>
                )}
              </>
            ))}
          </TableBody>
        </Table>
      </div>
    </>
  );
}

export default CourseTable;
