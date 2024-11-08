"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarDesign.css";
import { useEffect, useState } from "react";
type streams = { title: string; start: Date }[];
function BootCampAgenda({ Courses }: any) {
  const [Streams, setStreams] = useState<streams>([]);
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    let l: any[] = [];
    if (Courses) {
      for (const course of Courses) {
        course.Lessons.map((lesson: any) => {
          l.push({ ...lesson, Teacher: course.Teacher });
        });
      }
    }
    setLessons(l || []);
  }, []);

  useEffect(() => {
    let streams: any[] = [];
    for (const lesson of lessons) {
      lesson.Streams?.map((stream: any) => {
        console.log(stream.Date, new Date(stream.Date));
        streams.push({ title: lesson.Title, start: stream.Date });
      });
    }
    setStreams(streams);
  }, [lessons]);

  return (
    <div className="w-full pb-8 max-w-xs space-y-2 col-span-1 lg:col-span-2 justify-self-center h-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Upcoming Live Sessions</h2>
      </div>
      <Card className=" min-h-screen border-0   grid py-4 max-h-fit">
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
          progressiveEventRendering={true}
          events={Streams}
        />
      </Card>
    </div>
  );
}

export default BootCampAgenda;
