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
import { Button } from "@/components/ui/button";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  AdminAddBootCampCourse,
  AdminAddStream,
} from "@/app/Actions/Admin/AdminCoursesActions";
import { redirect, useParams, usePathname, useRouter } from "next/navigation";
import { DatePicker } from "../New/DatePicker";
import { Input } from "@/components/ui/input";
import moment from "moment";

function NewStream({
  Lessons,
  Teacher,
  setStreams,
}: {
  Lessons: any[];
  Teacher: string;
  setStreams: Dispatch<SetStateAction<any>>;
}) {
  const router = useRouter();
  const params = useParams();
  const pathname = usePathname();
  const closeref = useRef<HTMLButtonElement | null>(null);
  const [Date, setDate] = useState<any>();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Stream</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (FormData) => {
            const Lesson = FormData.get("Lesson");
            const Hours = FormData.get("hours");
            const Minutes = FormData.get("minutes");
            const date = moment(Date?.StartingDate)
              .add(Number(Hours), "hour")
              .add(Number(Minutes), "minutes")
              .format();
            const setter = await AdminAddStream({
              lesson: Lesson,
              date,
              Teacher,
            });
            if (setter.error) {
              throw new Error(setter.error.message);
            } else {
              setStreams((prev: any) => [
                ...prev,
                { title: Lesson, start: date },
              ]);
              closeref.current?.click();
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Add Stream</DialogTitle>
            <DialogDescription>
              Create a new Stream for this Bootcamp. Click save when you're
              done.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor="" className="text-right">
                Date
              </label>
              <DatePicker
                change={0}
                defaultValue="select stream date"
                setTimeRange={setDate}
                TimeRange={Date}
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor={"Time"} className="text-right">
                Time
              </label>
              <div className="flex items-center gap-2">
                <div className="grid gap-1">
                  <Input
                    id="hours"
                    name="hours"
                    type="number"
                    min="9"
                    max="22"
                    defaultValue={9}
                    className="w-16 text-center"
                  />
                </div>
                <span className="text-gray-500 dark:text-gray-400">:</span>
                <div className="grid gap-1">
                  <Input
                    id="minutes"
                    name="minutes"
                    type="number"
                    min="00"
                    max="30"
                    step={30}
                    defaultValue={0}
                    className="w-16 text-center"
                  />
                </div>
              </div>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label htmlFor={"Lesson"} className="text-right">
                Lessons
              </label>
              <Select name={"Lesson"} required>
                <SelectTrigger className="col-span-3">
                  <SelectValue
                    id="Lessons"
                    placeholder="select Lesson"
                    className="col-span-3"
                  />
                </SelectTrigger>
                <SelectContent>
                  {Lessons?.map((Lesson, index) => (
                    <SelectItem value={Lesson._id} key={index}>
                      {Lesson.Title}{" "}
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

export default NewStream;
