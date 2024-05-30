import { GetAllTeachers } from "@/app/Actions/Admin/AdminUsersActions";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { NewCourseBasicInfoForm } from "@/lib/Types";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import React, {
  Dispatch,
  MouseEvent,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";

function BasicInfo({
  BasicInfos,
  setBasicInfos,
}: {
  BasicInfos: NewCourseBasicInfoForm;
  setBasicInfos: Dispatch<SetStateAction<NewCourseBasicInfoForm>>;
}) {
  const SubmitRef = useRef<HTMLButtonElement>(null);

  const FormRef = useRef<HTMLFormElement>(null);
  const [Teachers, setTeachers] = useState<any[]>([]);

  useEffect(() => {
    SubmitRef.current?.click();
  }, [BasicInfos]);
  useEffect(() => {
    getTeachers();
  }, []);
  const getTeachers = async () => {
    const Getter = await GetAllTeachers();
    if (Getter.error) return;
    setTeachers(Getter.response.Result);
  };
  const updateInput = (FormData: FormData) => {
    if (FormData) {
      setBasicInfos({
        Title: (FormData.get("title") as string) || "",
        Description: (FormData.get("description") as string) || "",
        Field: (FormData.get("field") as string) || "",
        Level: (FormData.get("level") as string) || "",
        Teacher: FormData.get("Teacher") || BasicInfos?.Teacher || "",
      });
    }
  };

  return (
    <>
      <div className=" bg-white border w-full h-full  flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 px-8 pb-8 pt-4 shadow-md">
        <h2 className="p-4 text-xl font-semibold">Basic Information</h2>
        <form
          action={(FormData) => updateInput(FormData)}
          ref={FormRef}
          className="py-4 px-32 flex flex-col gap-8 h-full font-medium "
        >
          <span className=" space-y-2">
            <label htmlFor="title">Course Title</label>
            <Input
              name="title"
              id="title"
              placeholder="Course Title"
              defaultValue={BasicInfos?.Title || ""}
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              Write a 60 character maximum course title.
            </p>
          </span>
          <span className=" space-y-2">
            <label htmlFor="Teacher">Teacher</label>
            <Select
              name="Teacher"
              defaultValue={
                Teachers.filter((x) => x._id == BasicInfos?.Teacher)[0]?._id
              }
            >
              <SelectTrigger className="">
                <SelectValue
                  placeholder={
                    Teachers.filter((x) => x._id == BasicInfos?.Teacher)[0]
                      ?.FullName || "Select Teacher"
                  }
                  id="Teacher"
                />
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
            <label htmlFor="field">Course Field</label>
            <Input
              name="field"
              id="field"
              placeholder="Select Course Field"
              list="Fields"
              defaultValue={BasicInfos?.Field || ""}
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              Help people find your courses by choosing the field that represent
              your course.
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
          <span className=" space-y-2">
            <label htmlFor="level">Course Level</label>
            <Select name="level" defaultValue={BasicInfos?.Level || ""}>
              <SelectTrigger className="">
                <SelectValue placeholder="Select Course Level" id="level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </span>
          <span className=" space-y-2">
            <label htmlFor="description">Course Description</label>
            <Textarea
              name="description"
              id="description"
              placeholder="Course Description"
              defaultValue={BasicInfos?.Description || ""}
            />
            <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
              A brief summary of your course.
            </p>
          </span>
          <Button type="submit" className="hidden" ref={SubmitRef}></Button>
        </form>
      </div>
      <Link href="?step=2">
        <Button className="w-fit text-md mx-2 ">Next</Button>
      </Link>
    </>
  );
}

export default BasicInfo;
