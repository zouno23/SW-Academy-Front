"use client";

import { GetTeacherLessons } from "@/app/Actions/CoursesActions";
import { CheckMeeting, CreateMeeting } from "@/app/Actions/MeetingActions";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
  SelectGroup,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "@/components/ui/use-toast";
import { redirect, useRouter } from "next/navigation";
import { useRef } from "react";

export function StartMeeting({ Lessons }: { Lessons: any }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Start Meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (FormData) => {
            const { error, response } = await CreateMeeting(FormData);
            if (!error) redirect("/Teacher/livestream/" + response?.Result);
          }}
        >
          <DialogHeader>
            <DialogTitle>Start a New Meeting</DialogTitle>
            <DialogDescription>
              Invite your team members to join the meeting.
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right" htmlFor="Lesson">
                Lesson
              </label>
              <Select name="Lesson">
                {Lessons && Lessons.length > 0 ? (
                  <SelectTrigger className="col-span-3 ">
                    <SelectValue placeholder="Select a Lesson" />
                  </SelectTrigger>
                ) : (
                  <SelectTrigger className="w-full" disabled>
                    <SelectValue placeholder="No lessons to add Meeting to" />
                  </SelectTrigger>
                )}
                <SelectContent>
                  <SelectGroup>
                    {Lessons?.map((lesson: any, index: any) => (
                      <SelectItem
                        textValue={lesson.Title}
                        value={lesson._id}
                        key={index}
                      >
                        {lesson.Title}
                      </SelectItem>
                    ))}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right" htmlFor="email">
                Email
              </label>
              <Textarea
                name="email"
                className="col-span-3 min-h-[100px]"
                id="email"
                placeholder="Enter email addresses separated by commas to invite people"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Start Meeting</Button>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export function JoinMeeting() {
  const router = useRouter();
  const Closingref = useRef<HTMLButtonElement | null>(null);
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Join Meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <form
          action={async (FormData) => {
            const SecretCode = FormData.get("Secret Code");
            const { error, response } = await CheckMeeting(FormData);
            if (error) {
              toast({
                variant: "error",
                description: error?.message,
                icon: "error",
              });
              Closingref.current?.click();
            } else {
              redirect("/Teacher/livestream/" + SecretCode);
            }
          }}
        >
          <DialogHeader>
            <DialogTitle>Join a Meeting</DialogTitle>
            <DialogDescription>
              Enter the Meeting's secret code to join
            </DialogDescription>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <label className="text-right" htmlFor="secret code">
                Code
              </label>
              <Input
                className="col-span-3 "
                id="secret code"
                name="Secret Code"
                placeholder="********"
              />
            </div>
          </div>
          <DialogFooter>
            <Button type="submit">Join Meeting</Button>
            <DialogClose>
              <Button variant="outline" ref={Closingref}>
                Cancel
              </Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
