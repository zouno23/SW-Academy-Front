"use client";
import {
  AddLesson,
  UploadDocumentation,
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
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { GetUserLocalStorage } from "@/app/Hooks/LocalStorage";

export function LessonsTable({ props }: { props: any }) {
  const path = usePathname();
  const LS = GetUserLocalStorage();
  const role = LS?.Role;
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
        {role === "Teacher" ? (
          <Dialog>
            <DialogTrigger asChild>
              <Button size="sm" className="mx-4">
                Add Lesson
              </Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[600px]">
              <DialogHeader>
                <DialogTitle>Add New Lesson</DialogTitle>
                <DialogDescription>
                  Fill out the form to create a new lesson.
                </DialogDescription>
              </DialogHeader>
              <form
                className="grid gap-4 py-4"
                action={async (FormData) => {
                  const Title = FormData.get("Title") as string;
                  const Description = FormData.get("Description");
                  const { error, response } = await AddLesson(CourseId, {
                    Title,
                    Description,
                  });
                  if (response) {
                    const UploadResult = await UploadDocumentation(
                      response.Result._id,
                      CourseId,
                      FormData
                    );

                    if (UploadResult.error) throw new error();
                    setLessons([...Lessons, response.Result]);
                  }
                }}
              >
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right" htmlFor="title">
                    Title
                  </label>
                  <Input
                    className="col-span-3"
                    id="title"
                    name="Title"
                    placeholder="Enter lesson title"
                  />
                </div>
                <div className="grid grid-cols-4 items-start gap-4">
                  <label className="text-right" htmlFor="description">
                    Description
                  </label>
                  <Textarea
                    className="col-span-3 min-h-[120px]"
                    id="description"
                    name="Description"
                    placeholder="Enter lesson description"
                  />
                </div>
                <div className="grid grid-cols-4 items-center gap-4">
                  <label className="text-right" htmlFor="file">
                    File
                  </label>
                  <div className="col-span-3 flex items-center gap-2">
                    <Input
                      id="file"
                      type="file"
                      name="files"
                      multiple
                      max={5}
                    />
                  </div>
                </div>
                <DialogFooter>
                  <DialogClose asChild>
                    <Button type="submit">Save Lesson</Button>
                  </DialogClose>
                  <DialogClose asChild>
                    <Button variant="outline">Cancel</Button>
                  </DialogClose>
                </DialogFooter>
              </form>
            </DialogContent>
          </Dialog>
        ) : null}
      </div>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Lesson</TableHead>
            <TableHead>Description</TableHead>
            <TableHead className="hidden md:table-cell">Documents</TableHead>
            <TableHead className="hidden md:table-cell">Streaming</TableHead>
            {role === "Teacher" && (
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
                    {item?.Streamings?.length || 0}
                  </TableCell>
                  <TableCell className="hidden md:table-cell">
                    <Button type="submit">Submit</Button>
                  </TableCell>
                </TableRow>
              );

            return (
              <TableRow>
                <TableCell className="font-medium">{item?.Title}</TableCell>
                <TableCell>{item?.Description}</TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.Documents?.length || 0}
                </TableCell>
                <TableCell className="hidden md:table-cell">
                  {item?.Streamings?.length || 0}
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
                          console.log(error, response);
                          const gather = Lessons.filter(
                            (lesson: any) => lesson._id !== item._id
                          );
                          setLessons(gather);
                        }}
                      >
                        <Trash className="h-4 w-4 " />
                        <span className="sr-only">Delete</span>
                      </Button>
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
