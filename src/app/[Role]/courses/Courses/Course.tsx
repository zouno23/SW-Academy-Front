import Image from "next/image";
import p from "@/../public/next.svg";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import StarsRating from "@/components/StarsRating";
import Link from "next/link";
// import StarsRatingButton from "@/components/StarsRatingButton";

function Course({ props, role, type }: any) {
  const CourseLink =
    role === "Teacher"
      ? "/Teacher/courses/" + props._id
      : type === "All"
      ? "/Student/courses/" + props._id
      : "/Student/courses/" + props?.Course?._id;

  return (
    <Link
      href={CourseLink}
      className="w-full max-md:w-[800px] static h-28  flex items-center text-black/50 gap-16 font-medium hover:bg-slate-50 hover:text-black/80 dark:hover:bg-slate-950 dark:text-white"
    >
      <div className="flex h-full items-center gap-6 p-4 text-black w-1/2 dark:text-white ">
        <Image
          alt="product"
          width={200}
          height={150}
          src={
            role === "Teacher" || type === "All"
              ? props?.Cover
                ? "http://localhost:9000/" + props?.Cover
                : p
              : props?.Course?.Cover
              ? "http://localhost:9000/" + props?.Course?.Cover
              : p
          }
          className="size-24 border rounded-lg object-fit"
        />
        <div className="h-full flex flex-col justify-center gap-2 w-2/3">
          <h4 className="font-semibold">
            {role === "Teacher" || type === "All"
              ? props?.Title
              : props?.Course?.Title}
          </h4>
          {role === "Teacher" || type === "All" ? (
            <div className="flex justify-start gap-9 ">
              <Badge className="bg-blue-600/80 hover:bg-blue-600">
                {props.Field}
              </Badge>
              <StarsRating Rating={parseFloat(props?.Rating)} key={"rating"} />
              {/* I'll get to you later <StarsRatingButton Rating={parseFloat(props?.Rating)}/> */}
            </div>
          ) : (
            <span className=" text-end">
              {props.Progress + "%"}
              <Progress
                value={parseInt(props.Progress)}
                className="mt-1 border-blue-600"
              />
            </span>
          )}
        </div>
      </div>
      <div className=" flex w-1/2 px-6 flex-row-reverse text-center justify-between ">
        <div className="basis-1/3 flex justify-center">
          {" "}
          {role === "Teacher" || type === "All" ? (
            props?.Price || "Free"
          ) : props?.IsCompleted ? (
            <Button disabled>Completed</Button>
          ) : (
            <Button>{props.Progress > 0 ? "Continue" : "Start"}</Button>
          )}{" "}
        </div>
        <div className="basis-1/3 flex justify-center">
          {" "}
          {role === "Teacher" || type === "All" ? (
            props?.sellings || 0
          ) : (
            <StarsRating Rating={props?.Course?.Rating} key="rating" />
          )}
        </div>
        <div className="basis-1/3 flex justify-center">
          {" "}
          {role === "Teacher" || type === "All"
            ? props?.Lessons?.length
            : props?.Course?.Lessons?.length}
        </div>
      </div>
    </Link>
  );
}

export default Course;
