import { Button } from "@/components/ui/button";
import TeacherCalendar from "../dashboard/Charts/TeacherCalendar";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { MeetingsList } from "./MeetingsList";
import Link from "next/link";
import { JoinMeeting, StartMeeting } from "./EnteringButtons";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
import { GetTeacherAgenda } from "@/app/Actions/DashboardActions";
import { GetTeacherLessons } from "@/app/Actions/CoursesActions";

export default async function LiveStream() {
  const role = GetRole();
  let events;
  if (role === "Teacher") {
    const { error1, response1 } = await GetTeacherAgenda();
    if (error1) console.log(error1);
    events = await response1?.Result;
  }

  const { error, response } = await GetTeacherLessons();
  if (error?.status === 500) throw new Error("server error");
  const Lessons = response?.Result;

  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="mx-auto w-2/3  space-y-6 px-4 sm:px-0 flex flex-col items-center ">
        <div className="flex flex-col items-center space-y-2">
          <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl">
            Online Meeting
          </h1>
          <p className="text-gray-500 dark:text-gray-400">
            Start a new meeting or join an existing one.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-2 w-full">
          <MeetingsList />
          <div className="size-full">
            <TeacherCalendar className={"w-full h-full"} events={events} />
          </div>
        </div>
        <div className="flex gap-8 ">
          <StartMeeting Lessons={Lessons} />
          <JoinMeeting />
        </div>
      </div>
    </main>
  );
}
