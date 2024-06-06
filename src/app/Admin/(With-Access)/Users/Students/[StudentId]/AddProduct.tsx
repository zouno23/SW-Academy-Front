"use client";
import {
  AddStudentCourse,
  GetAllBootcamps,
  GetAllCourses,
} from "@/app/Actions/Admin/AdminUsersActions";
import { Button } from "@/components/ui/button";
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
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { toast } from "@/components/ui/use-toast";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
function AddProduct() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"}>Add Course</Button>
      </DialogTrigger>
      <DialogContent className="">
        <Tabs defaultValue="Course" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="Course">Course</TabsTrigger>
            <TabsTrigger value="Bootcamp">Bootcamp</TabsTrigger>
          </TabsList>
          <TabsContent value="Course">
            <AddCourse />
          </TabsContent>
          <TabsContent value="Bootcamp">
            <AddBootcamp />
          </TabsContent>
        </Tabs>
      </DialogContent>
      <DialogClose></DialogClose>
    </Dialog>
  );
}

export default AddProduct;

const AddCourse = () => {
  const params = useParams();
  const [Courses, setCourses] = useState<any[]>([]);
  const [Display, setDisplay] = useState(Courses);
  const [query, setQuery] = useState("");
  const CoursesGetter = async () => {
    const GetterResponse = await GetAllCourses();
    if (GetterResponse.error) throw new Error(GetterResponse.error.message);
    console.log(GetterResponse.response);
    setCourses(GetterResponse.response.Result);
    setDisplay(GetterResponse.response.Result);
  };

  useEffect(() => {
    CoursesGetter();
  }, []);

  useEffect(() => {
    if (query == "") {
      setDisplay(Courses);
    } else {
      setDisplay(
        Courses.filter((Course, index) =>
          Course.Title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);
  const router = useRouter();
  return (
    <>
      <form
        className="grid gap-2 p-4 w-full"
        action={async (FormData) => {
          const ProductId = FormData.get("Course");
          const StudentId = params.StudentId;
          const type = "Course";
          const setter = await AddStudentCourse({ ProductId, StudentId, type });
          if (setter.error) {
            console.log(setter);
            throw new Error(setter.error.message);
          } else {
            toast({
              description: "Course Added Successfully",
              icon: "verified",
              variant: "verified",
            });
            router.push("/Admin/Users/Students/" + StudentId);
            router.back();
          }
        }}
      >
        <label htmlFor="Course" className="font-semibold">
          Course
        </label>
        <Select name="Course">
          <SelectTrigger className="">
            <SelectValue placeholder="Select Course " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <div className="relative">
                <Input
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  className="h-9 mb-2"
                  placeholder="Search..."
                  type="search"
                />
                {Display.map((course) => (
                  <SelectItem value={course._id} textValue={course.Title}>
                    {course.Title}
                  </SelectItem>
                ))}
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className=" w-fit place-self-end"> Add Course</Button>
      </form>
    </>
  );
};

const AddBootcamp = () => {
  const params = useParams();
  const [Courses, setCourses] = useState<any[]>([]);
  const [Display, setDisplay] = useState(Courses);
  const [query, setQuery] = useState("");
  const CoursesGetter = async () => {
    const GetterResponse = await GetAllBootcamps();
    if (GetterResponse.error) throw new Error(GetterResponse.error.message);
    console.log(GetterResponse.response);
    setCourses(GetterResponse.response.Result);
    setDisplay(GetterResponse.response.Result);
  };

  useEffect(() => {
    CoursesGetter();
  }, []);

  useEffect(() => {
    if (query == "") {
      setDisplay(Courses);
    } else {
      setDisplay(
        Courses.filter((Course, index) =>
          Course.Title.toLowerCase().includes(query.toLowerCase())
        )
      );
    }
  }, [query]);
  const router = useRouter();
  return (
    <>
      <form
        className="grid gap-2 p-4 w-full"
        action={async (FormData) => {
          const ProductId = FormData.get("Course");
          const StudentId = params.StudentId;
          const type = "Bootcamp";
          const setter = await AddStudentCourse({ ProductId, StudentId, type });
          if (setter.error) {
            throw new Error(setter.error.message);
          } else {
            toast({
              description: "Bootcamp Added Successfully",
              icon: "verified",
              variant: "verified",
            });
            router.push("/Admin/Users/Students/" + StudentId);
            router.back();
          }
        }}
      >
        <label htmlFor="Course" className="font-semibold">
          Bootcamp
        </label>
        <Select name="Course">
          <SelectTrigger className="">
            <SelectValue placeholder="Select Bootcamp " />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <div className="relative">
                <Input
                  onChange={(e) => {
                    setQuery(e.target.value);
                  }}
                  className="h-9 mb-2"
                  placeholder="Search..."
                  type="search"
                />
                {Display.map((course) => (
                  <SelectItem value={course._id} textValue={course.Title}>
                    {course.Title}
                  </SelectItem>
                ))}
              </div>
            </SelectGroup>
          </SelectContent>
        </Select>
        <Button className=" w-fit place-self-end"> Add Bootcamp</Button>
      </form>
    </>
  );
};
