"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarDesign.css";
import { useEffect, useState } from "react";
import NewStream from "./NewStreamDialog";
type streams = { title: string; start: Date }[];
function BootCampAgenda({ Courses }: any) {
  const [Streams, setStreams] = useState<streams>([]);
  const [lessons, setLessons] = useState<any[]>([]);

  useEffect(() => {
    let l: any[] = [];
    for (const course of Courses) {
      let ls = [...course.Lessons, ...l];
      l = ls;
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
        <NewStream
          Lessons={lessons}
          Teacher={Courses[0]?.Teacher}
          setStreams={setStreams}
        />
      </div>
      <Card className="  h-full grid p-4 max-h-screen">
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
