"use client";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Calendar } from "@/components/ui/calendar";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import "./CalendarDesign.css";
import { Button } from "@/components/ui/button";

function BootCampAgenda({ streams }: any) {
  return (
    <div className="w-full pb-8 max-w-xs space-y-2 col-span-1 lg:col-span-2 justify-self-center h-full">
      <div className="flex justify-between">
        <h2 className="text-lg font-semibold">Upcoming Live Sessions</h2>
        <Button variant={"outline"}>Add Stream</Button>
      </div>
      <Card className="  h-full grid p-4">
        <FullCalendar
          viewClassNames={""}
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
          events={streams}
        />
      </Card>
    </div>
  );
}

export default BootCampAgenda;
