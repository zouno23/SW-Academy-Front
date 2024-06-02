"use client";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import CoursesTable from "./CoursesTable";
import { BootcampType } from "./page";

function BootCampContent({ camp }: { camp: BootcampType }) {
  const Courses = camp.Courses;
  return (
    <div className="flex-1 col-span-1 lg:col-span-3 ">
      <div className="mb-6">
        <p className="text-gray-600">{camp?.Description}</p>
      </div>
      <div className="flex justify-between">
        <h2 className="font-bold text-xl py-4 px-2">Courses</h2>
        <Button>Add Course</Button>
      </div>
      <Tabs defaultValue={Courses[0]._id} className="rounded-lg border p-2">
        <TabsList className="gap-1 flex overflow-x-scroll overflow-y-hidden justify-start p-0 ">
          {Courses?.map((course, index) => (
            <TabsTrigger value={course._id} key={index}>
              {course.Title}
            </TabsTrigger>
          ))}
        </TabsList>
        {Courses?.map((course, index) => (
          <TabsContent value={course._id}>
            <CoursesTable Course={course} key={index} />
          </TabsContent>
        ))}
        <TabsContent value="Lessons"></TabsContent>
      </Tabs>
    </div>
  );
}

export default BootCampContent;
