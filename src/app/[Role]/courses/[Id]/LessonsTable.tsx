"use client";
import {
  FinishLesson,
  deleteLesson,
  updateLesson,
} from "@/app/Actions/CoursesActions";
import { Button } from "@/components/ui/button";
import {
  TableHead,
  TableRow,
  TableHeader,
  TableCell,
  TableBody,
  Table,
} from "@/components/ui/table";
import { Textarea } from "@/components/ui/textarea";
import { FileEdit, Trash } from "lucide-react";
import { usePathname, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { AddNewLesson } from "./AddLesson";
import { Checkbox } from "@/components/ui/checkbox";
import { toast } from "@/components/ui/use-toast";

export function LessonsTable({
  props,
  role,
  state,
  CompletedLessons,
}: {
  CompletedLessons: any;
  props: any;
  role: string;
  state?: string;
}) {
  const path = usePathname();
  const router = useRouter();
  const CourseId = path.split("/")[3];
  const [IsEdit, setIsEdit] = useState("");
  const [Lessons, setLessons] = useState(props);
  useEffect(() => setLessons(props), [props]);
  return (
    <form
      action={async (FormData) => {
        const Title = FormData.get("Title") as string;
        const Description = FormData.get("Description") as string;
        let gather = [];
        for (const item of Lessons) {
          if (
            item._id === IsEdit &&
            (Title != item?.Title || Description != item?.Description)
          ) {
            const { error, response } = await updateLesson(IsEdit, {
              Title,
              Description,
            });
            if (error) throw new error();
            else {
              gather.push({ ...item, Title, Description });
            }
          } else gather.push(item);
        }
        setIsEdit("");
        setLessons(gather);
      }}
    >
      <div className="flex items-center justify-between p-4 md:p-6 ">
        <h2 className="text-lg font-semibold">Lessons</h2>
        {role === "Teacher" && (
          <AddNewLesson
            CourseId={CourseId}
            setLessons={setLessons}
            Lessons={Lessons}
          />
        )}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lesson</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell">Documents</TableHead>
            {(role === "Teacher" || state === "Owned") && (
              <TableHead className="hidden md:table-cell">Actions</TableHead>
            )}
          </TableRow>
        </TableHeader>
        <TableBody>
          {Lessons.map((item: any) => {
            if (item?._id == IsEdit)
              return (
                <TableRow>
                  <TableCell className="font-medium">
                    <Textarea defaultValue={item?.Title} name="Title" />
                  </TableCell>
                  <TableCell>
                    <Textarea
                      defaultValue={item?.Description}
                      name="Description"
                    />
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    {item?.Documents?.length || 0}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button type="submit">Submit</Button>
                  </TableCell>
                </TableRow>
              );

            return (
              <TableRow key={item?._id || 0}>
                <TableCell className="font-medium">{item?.Title}</TableCell>
                <TableCell>{item?.Description}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.Documents?.length || 0}
                </TableCell>

                {role === "Teacher" && (
                  <TableCell className="hidden md:table-cell">
                    <div className="flex items-center gap-2">
                      <Button
                        size="sm"
                        variant="ghost"
                        onClick={() => setIsEdit(item._id)}
                        className="hover:text-blue-600"
                      >
                        <FileEdit className="h-4 w-4" />
                        <span className="sr-only">Edit</span>
                      </Button>

                      <Button
                        size="sm"
                        variant="ghost"
                        type="submit"
                        className="hover:text-red-600"
                        onClick={async () => {
                          const { error, response } = await deleteLesson(
                            item._id
                          );
                          if (response) {
                            router.refresh();
                          }
                        }}
                      >
                        <Trash className="h-4 w-4 " />
                        <span className="sr-only">Delete</span>
                      </Button>
                    </div>
                  </TableCell>
                )}
                {state === "Owned" && (
                  <TableCell>
                    <div className="flex items-center space-x-2">
                      {!CompletedLessons.includes(item._id) ? (
                        <Button
                          disabled={CompletedLessons.includes(item._id)}
                          id="Finish"
                          type="submit"
                          onClick={async () => {
                            const setter = await FinishLesson(
                              item._id,
                              CourseId
                            );
                            if (setter.error)
                              throw new Error(setter.error.message);
                            else if (setter.response) {
                              router.refresh();
                              toast({
                                description: "successfully updated",
                                variant: "verified",
                                icon: "verified",
                              });
                            }
                          }}
                          variant={"outline"}
                        >
                          {" "}
                          Complete Lesson
                        </Button>
                      ) : (
                        "Completed"
                      )}
                    </div>
                  </TableCell>
                )}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </form>
  );
}
