import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";
import { GetMeetinsList } from "@/app/Actions/MeetingActions";
import moment from "moment";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

export async function MeetingsList({}) {
  const role = GetRole();
  const { error, response } = await GetMeetinsList();
  if (error?.status === 500) throw new Error();
  const Meetings = response?.Result;
  console.log(error);
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-lg font-medium">Upcoming Meetings</h2>
      {!Meetings && (
        <div className=" w-full h-full flex justify-center items-center text-xl font-semibold text-black/60">
          No upcoming Meetings
        </div>
      )}
      <div className="mt-4 space-y-2 relative">
        {Meetings?.map((meeting: any) => (
          <Link
            className="group flex items-center justify-between rounded-md bg-gray-100 px-3 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
            href={"/" + role + "/livestream/" + meeting.SecretCode}
          >
            <div className="flex items-center space-x-3">
              <CalendarCheck className="h-5 w-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
              <div>
                <div className="font-medium">{meeting.Lesson.Title}</div>
                <div className="text-sm text-gray-500 dark:text-gray-400">
                  {moment(meeting.Date).format("MMM Do YYYY")}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
