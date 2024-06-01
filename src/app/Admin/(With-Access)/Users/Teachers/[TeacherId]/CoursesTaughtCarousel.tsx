"use client";
import { UserIcon } from "lucide-react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import { Dispatch, SetStateAction } from "react";

type courses = {
  Title: string;
  Description: string;
  _id: string;
  Buyers: number;
}[];
function CoursesTaught({
  Courses,
  IsCourses,
  setIsCourses,
}: {
  Courses: courses;
  IsCourses: boolean;
  setIsCourses: Dispatch<SetStateAction<boolean>>;
}) {
  return (
    <div className="space-y-4">
      <span className="flex justify-between items-center">
        <h3 className="text-2xl font-bold ">Courses Taught</h3>
        <Button
          variant={"outline"}
          disabled={Courses.length === 0}
          onClick={() => setIsCourses(true)}
        >
          {" "}
          View All
        </Button>
      </span>
      <Carousel className=" relative ">
        {Courses?.length > 0 ? (
          <CarouselContent className="-ml-1">
            {Courses.map((course, index) => (
              <CarouselItem
                key={index}
                className={cn(
                  "pl-1 basis-1/2 md:basis-1/3",
                  Courses.length === 1 && "md:basis-full ",
                  Courses.length === 2 && "md:basis-1/2 "
                )}
              >
                <Card className="">
                  <CardContent className="p-4">
                    <h4 className="text-lg font-semibold mb-2">
                      {course.Title}
                    </h4>
                    <p className="text-gray-500 dark:text-gray-400 mb-4">
                      {course.Description}
                    </p>
                    <div className="flex items-center gap-2">
                      <UserIcon className="w-4 h-4 text-gray-500 dark:text-gray-400" />
                      <span className="text-sm text-gray-500 dark:text-gray-400">
                        {course.Buyers} students
                      </span>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
        ) : (
          <NoCourses />
        )}
        <CarouselPrevious className="-left-10" />
        <CarouselNext className="-right-10" />
      </Carousel>
    </div>
  );
}

export default CoursesTaught;

const NoCourses = () => {
  return (
    <div className="w-full h-full text-center text-3xl font-bold text-gray-500 ">
      No Courses Found
    </div>
  );
};
