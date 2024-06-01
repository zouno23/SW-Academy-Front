"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { DatePicker } from "./DatePcker";
import BootcampCover from "./BootcampCover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEffect, useState } from "react";
import { GetAllTeachers } from "@/app/Actions/Admin/AdminUsersActions";
import { useRouter } from "next/navigation";
import {
  AdminAddBootCamp,
  AdminUploadBootcampCover,
} from "@/app/Actions/Admin/AdminCoursesActions";

function NewBootcamp() {
  const [Courses, setCourses] = useState<number[]>([]);
  const [Teachers, setTeachers] = useState<any[]>([]);
  const [TimeRange, setTimeRange] = useState({
    StartingDate: null,
    EndingDate: null,
  });
  const router = useRouter();
  const getTeachers = async () => {
    const Getter = await GetAllTeachers();
    if (Getter.error) return;
    setTeachers(Getter.response.Result);
  };
  useEffect(() => {
    getTeachers();
  }, []);

  return (
    <form
      action={async (FormData) => {
        const Title = FormData.get("Title");
        const Description = FormData.get("Description");
        const Field = FormData.get("Field");
        const StartingDate = TimeRange.StartingDate;
        const EndingDate = TimeRange.EndingDate;
        let courses: any[] = [];
        Courses.map((index) => {
          const CourseTitle = FormData.get("CourseTitle" + index);
          const CourseDescription = FormData.get("CourseDescription" + index);
          const Teacher = FormData.get("Teacher" + index);
          const Course = {
            Title: CourseTitle,
            Dexcription: CourseDescription,
            Teacher,
            Field,
          };
          courses.push(Course);
        });
        let postData = {
          Bootcamp: {
            Title,
            Description,
            Field,
            EndingDate,
            StartingDate,
          },
          Courses: courses,
        };
        const setter = await AdminAddBootCamp(postData);
        if (setter.error) throw new Error(setter.error.message);
        await AdminUploadBootcampCover(FormData, setter.response.Result);
        router.refresh();
        router.back();
      }}
      className="bg-white  rounded-2xl h-full overflow-auto relative shadow-md "
    >
      <div className="flex justify-between items-center p-8 bg-blue-600 text-white">
        <span className="flex flex-col gap-2">
          <h1 className="text-2xl font-bold">Add New Bootcamp</h1>
          <p className="font-semibold">
            Just Fill the form and create your Bootcamp
          </p>
        </span>
        <span className="flex gap-2">
          <Button
            className="bg-white text-blue-600 hover:bg-white/80 hover:text-blue-600"
            type="button"
            onClick={() => {
              router.back();
            }}
          >
            Back to Bootcamps
          </Button>{" "}
          <Button
            className="bg-white text-blue-600 hover:bg-white/80 hover:text-blue-600"
            type="submit"
          >
            Save Bootcamp
          </Button>
        </span>
      </div>

      <div className="flex flex-col  divide-y-2 px-8 pb-8 pt-4">
        <h2 className="p-4 text-xl font-semibold">Basic Information</h2>
        <div className="py-4 px-32 flex flex-col gap-8 h-full font-medium">
          <span className=" space-y-2">
            <label htmlFor="Title">Bootcamp Title</label>
            <Input
              name="Title"
              id="Title"
              placeholder="Bootcamp Title"
              required
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              Write a 60 character maximum Bootcamp title.
            </p>
          </span>
          <span className=" space-y-2">
            <label htmlFor="Description">Bootcamp Description</label>
            <Textarea
              required
              name="Description"
              id="Description"
              placeholder="Bootcamp Description"
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              A brief summary of your Bootcamp.
            </p>
          </span>
          <span className=" space-y-2">
            <label htmlFor="Field">Bootcamp Field</label>
            <Input
              required
              name="Field"
              id="Field"
              placeholder="Select Bootcamp Field"
              list="Fields"
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              Help people find your courses by choosing the field that represent
              your Bootcamp.
            </p>
            <datalist id="Fields">
              <option value="Computer Science"></option>
              <option value="Mathematics and Statistics"></option>
              <option value="Physics"></option>
              <option value="Biology"></option>
              <option value="Chemistry"></option>
              <option value="Bioinformatics"></option>
              <option value="Molecular Biology"></option>
              <option value="Immunology"></option>
            </datalist>
          </span>
          <span className=" gap-2 grid">
            <label htmlFor="">Pick the Time Range of the Bootcamp</label>
            <span className="flex items-center gap-2">
              <label className=" text-sm ">Starting Date:</label>
              <DatePicker
                defaultValue="Starting date"
                change={0}
                setTimeRange={setTimeRange}
                TimeRange={TimeRange}
              />
              <label className=" text-sm ">Ending Date:</label>
              <DatePicker
                defaultValue="Ending date"
                change={1}
                setTimeRange={setTimeRange}
                TimeRange={TimeRange}
              />
            </span>
          </span>
          <BootcampCover />
        </div>
      </div>
      {Courses?.length > 0 && (
        <div className="flex flex-col  divide-y-2 px-8 pb-8 pt-4">
          <h2 className="p-4 text-xl font-semibold">Courses</h2>
          {Courses.map((index) => (
            <div className="py-4 px-32 flex flex-col gap-8 h-full font-medium">
              <h4 className="text-lg font-semibold">Course No{index}</h4>
              <span className=" space-y-2">
                <label htmlFor={"CourseTitle" + index}>Course Title</label>
                <Input
                  required
                  name={"CourseTitle" + index}
                  placeholder="Course Title"
                />
                <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
                  Write a 60 character maximum course title.
                </p>
              </span>
              <span className=" space-y-2">
                <label htmlFor={"Teacher" + index}>Teacher</label>
                <Select name={"Teacher" + index} required>
                  <SelectTrigger className="">
                    <SelectValue id="Teacher" placeholder="select teacher" />
                  </SelectTrigger>
                  <SelectContent>
                    {Teachers.map((teacher, index) => (
                      <SelectItem value={teacher._id}>
                        {teacher.FullName}{" "}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </span>
              <span className=" space-y-2">
                <label htmlFor={"CourseDescription" + index}>
                  Course Description
                </label>
                <Textarea
                  required
                  name={"CourseDescription" + index}
                  id={"CourseDescription" + index}
                  placeholder="Course Description"
                />
                <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
                  A brief summary of your course.
                </p>
              </span>
            </div>
          ))}
        </div>
      )}
      <div className=" flex justify-start items-center px-40 pb-8 pt-4">
        <Button
          variant={"outline"}
          onClick={() => setCourses([...Courses, Courses.length + 1])}
          type="button"
        >
          Add Course
        </Button>
      </div>
    </form>
  );
}

export default NewBootcamp;
