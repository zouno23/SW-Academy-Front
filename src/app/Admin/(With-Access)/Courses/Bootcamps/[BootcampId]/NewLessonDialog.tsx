"use client";
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
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { GetAllTeachers } from "@/app/Actions/Admin/AdminUsersActions";
import { useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AdminAddBootCampCourse,
  AdminAddLesson,
} from "@/app/Actions/Admin/AdminCoursesActions";
import { useParams, useRouter } from "next/navigation";
import { CourseType } from "./CoursesTable";

function NewLesson({ Course }: { Course: CourseType }) {
  const router = useRouter();
  const closeref = useRef<HTMLButtonElement | null>(null);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add Lesson</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (FormData) => {
            const Title = FormData.get("Title");
            const Description = FormData.get("Description");
            const Teacher = FormData.get("Teacher");
            console.log(Title, Description, Teacher);
            const setter = await AdminAddLesson(Course._id, {
              Title,
              Description,
            });

            if (setter.error) {
              throw new Error(setter.error.message);
            } else {
              closeref.current?.click();
              router.refresh();
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Lesson</DialogTitle>
            <DialogDescription>
              Create a new Lesson for this Bootcamp. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="Title" className="text-right">
                Title
              </label>
              <Input
                id="Title"
                name="Title"
                className="col-span-3"
                required
                placeholder="Lesson Title"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="Description" className="text-right">
                Description
              </label>
              <Textarea
                required
                id="Description"
                name="Description"
                className="col-span-3"
                placeholder="Lesson Description"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
            <DialogClose ref={closeref}></DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default NewLesson;
