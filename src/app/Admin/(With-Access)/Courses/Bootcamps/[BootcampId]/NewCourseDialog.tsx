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
import { AdminAddBootCampCourse } from "@/app/Actions/Admin/AdminCoursesActions";
import { useParams, useRouter } from "next/navigation";

function NewCourse({ Field }: { Field: string }) {
  const [Teachers, setTeachers] = useState<any[]>();
  const router = useRouter();
  const params = useParams();
  const closeref = useRef<HTMLButtonElement | null>(null);
  const getTeachers = async () => {
    const Getter = await GetAllTeachers();
    if (Getter.error) return;
    setTeachers(Getter.response.Result);
  };
  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Course</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (FormData) => {
            const Title = FormData.get("Title");
            const Description = FormData.get("Description");
            const Teacher = FormData.get("Teacher");
            console.log(Title, Description, Teacher);
            const setter = await AdminAddBootCampCourse(
              params.BootcampId as string,
              { Title, Description, Teacher, Field }
            );
            if (setter.error) {
              throw new Error(setter.error.message);
            } else {
              closeref.current?.click();
              router.refresh();
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Course</DialogTitle>
            <DialogDescription>
              Create a new course for this Bootcamp. Click save when you're
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
                placeholder="Course Title"
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
                placeholder="Course Description"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor={"Teacher"} className="text-right">
                Teacher
              </label>
              <Select name={"Teacher"} required>
                <SelectTrigger className="col-span-3">
                  <SelectValue
                    id="Teacher"
                    placeholder="select teacher"
                    className="col-span-3"
                  />
                </SelectTrigger>
                <SelectContent>
                  {Teachers?.map((teacher, index) => (
                    <SelectItem value={teacher._id} key={index}>
                      {teacher.FullName}{" "}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
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

export default NewCourse;
