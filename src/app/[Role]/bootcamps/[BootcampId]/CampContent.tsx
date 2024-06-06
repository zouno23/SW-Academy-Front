"use client";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { BootcampType } from "./page";
import { useSearchParams } from "next/navigation";
import { Textarea } from "@/components/ui/textarea";
import CourseTable from "./CoursesTable";
import { Button } from "@/components/ui/button";

function BootCampContent({ camp }: { camp: BootcampType }) {
  const Courses = camp.Courses;
  return (
    <div className="flex-1 col-span-1 lg:col-span-3 ">
      <div className="mb-6">
        <p className="text-gray-600">{camp?.Description}</p>
      </div>
      {Courses && (
        <>
          <div className="flex justify-between">
            <h2 className="font-bold text-xl py-4 px-2">Courses</h2>
          </div>
          <Tabs
            defaultValue={Courses[0]?._id}
            className="rounded-lg border p-2"
          >
            <TabsList className="gap-1 flex overflow-x-scroll overflow-y-hidden justify-start p-0 ">
              {Courses?.map((course, index) => (
                <TabsTrigger value={course._id} key={index}>
                  <>{course.Title}</>
                </TabsTrigger>
              ))}
            </TabsList>
            {Courses?.map((course, index) => (
              <TabsContent value={course._id}>
                <CourseTable Course={course} key={index} />
              </TabsContent>
            ))}
          </Tabs>
        </>
      )}
      {!Courses && (
        <div className="flex justify-end p-4">
          <Button>Enroll Now</Button>
        </div>
      )}
    </div>
  );
}

export default BootCampContent;
