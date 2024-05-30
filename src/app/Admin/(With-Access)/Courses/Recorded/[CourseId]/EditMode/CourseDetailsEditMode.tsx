"use client";
import { Button } from "@/components/ui/button";
import {
  Album,
  GraduationCap,
  Bookmark,
  Layers,
  DollarSign,
  Check,
  Share,
} from "lucide-react";

import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import StarsRating from "@/components/StarsRating";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Dispatch, SetStateAction, useEffect, useRef } from "react";
import { updateCourse } from "@/app/Actions/CoursesActions";
import { AdminUpdateCourse } from "@/app/Actions/Admin/AdminCoursesActions";

function CourseDetailsEditMode({
  props,
  isDone,
  setIsDone,
}: {
  props: any;
  isDone: string;
  setIsDone: Dispatch<SetStateAction<string>>;
}) {
  const submitRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (isDone == "false") submitRef.current?.click();
  }, [isDone]);
  return (
    <form
      className="grid gap-4 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]"
      action={async (FormData) => {
        const { error, response } = await AdminUpdateCourse(
          props._id,
          FormData
        );
        if (response) {
          setIsDone("true");
        } else {
          console.log(error);
        }
      }}
    >
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Album className="h-6 w-6 text-gray-700 dark:text-gray-400" />
            <Input
              className="font-medium p-2"
              defaultValue={props?.Title}
              name="Title"
            />
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Teacher?.FullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <Input
              className="text-sm text-gray-500 dark:text-gray-400"
              defaultValue={props?.Field}
              name="Field"
            />
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <Select
              name="RequiredLevel"
              defaultValue={props?.RequiredLevel || ""}
            >
              <SelectTrigger className="text-sm text-gray-500 dark:text-gray-400">
                <SelectValue placeholder="Select Course Level" id="level" />
              </SelectTrigger>
              <SelectContent className="text-sm text-gray-500 dark:text-gray-400">
                <SelectItem value="Beginner">Beginner</SelectItem>
                <SelectItem value="Intermediate">Intermediate</SelectItem>
                <SelectItem value="Advanced">Advanced</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <Input
              className="text-sm text-gray-500 dark:text-gray-400"
              defaultValue={props?.Price}
              name="Price"
            />
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-500">Live</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarsRating Rating={props?.Rating} key="15" />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Rating || "0.0"}
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-4 px-4">
        <Textarea
          className="text-gray-500 dark:text-gray-400"
          defaultValue={props?.Description}
          name="Description"
        />
        <Button className="hidden" type="submit" ref={submitRef} />
      </div>
    </form>
  );
}

export default CourseDetailsEditMode;
