import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CalendarCheck } from "lucide-react";

export function MeetingsList({}) {
  return (
    <div className="rounded-lg border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-950">
      <h2 className="text-lg font-medium">Upcoming Meetings</h2>
      <div className="mt-4 space-y-2">
        <Link
          className="group flex items-center justify-between rounded-md bg-gray-100 px-3 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          href="#"
        >
          <div className="flex items-center space-x-3">
            <CalendarCheck className="h-5 w-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            <div>
              <div className="font-medium">Weekly Team Meeting</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Today, 2:00 PM
              </div>
            </div>
          </div>
        </Link>
        <Link
          className="group flex items-center justify-between rounded-md bg-gray-100 px-3 py-2 transition-colors hover:bg-gray-200 dark:bg-gray-800 dark:hover:bg-gray-700"
          href="#"
        >
          <div className="flex items-center space-x-3">
            <CalendarCheck className="h-5 w-5 text-gray-500 group-hover:text-gray-700 dark:text-gray-400 dark:group-hover:text-gray-300" />
            <div>
              <div className="font-medium">Design Review</div>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                Tomorrow, 10:00 AM
              </div>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
