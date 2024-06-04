"use client";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarDesign.css";
import { cn } from "@/lib/utils";

export default function TeacherCalendar({ events, className }: any) {
  console.log(events);
  return (
    <div
      className={cn(
        "w-1/2  max-md:w-full max-md:h-min  h-full bg-white rounded-2xl p-2 shrink-0 dark:bg-slate-900 min-h-[420px] ",
        className
      )}
    >
      <FullCalendar
        plugins={[timeGridPlugin, dayGridPlugin, interactionPlugin]}
        initialView="timeGridWeek"
        slotDuration="1:30"
        slotMinTime="9:00:00"
        slotMaxTime="24:00:00"
        allDaySlot={false}
        expandRows
        firstDay={1}
        selectMirror
        eventMaxStack={1}
        initialDate={Date.now()}
        dateAlignment="week"
        fixedWeekCount={false}
        progressiveEventRendering
        events={events}
        //     {[
        //      {"title": "React", "start": "2024-03-04T14:41"},
        //      {"title": "React", "start": "2024-03-04T19:28"},
        //      {"title": "React", "start": "2024-03-05T07:34"},
        //      {"title": "React", "start": "2024-03-05T16:55"},
        //      {"title": "React", "start": "2024-03-05T21:06"},
        //      {"title": "React", "start": "2024-03-06T02:14"},
        //      {"title": "React", "start": "2024-03-06T13:12"},
        //      {"title": "React", "start": "2024-03-06T18:41"},
        //      {"title": "React", "start": "2024-03-07T09:37"},
        //      {"title": "React", "start": "2024-03-07T17:47"},
        //      {"title": "React", "start": "2024-03-07T22:02"},
        //      {"title": "React", "start": "2024-03-08T06:03"},
        //      {"title": "React", "start": "2024-03-08T12:42"},
        //      {"title": "React", "start": "2024-03-08T18:54"},
        //      {"title": "React", "start": "2024-03-09T03:27"},
        //      {"title": "React", "start": "2024-03-09T11:19"},
        //      {"title": "React", "start": "2024-03-09T17:35"},
        //      {"title": "React", "start": "2024-03-10T22:30"}
        //  ]}
      />
    </div>
  );
}
