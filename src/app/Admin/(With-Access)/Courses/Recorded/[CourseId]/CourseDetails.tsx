import { Button } from "@/components/ui/button";
import {
  Album,
  GraduationCap,
  Bookmark,
  Layers,
  DollarSign,
  Check,
} from "lucide-react";
import StarsRating from "@/components/StarsRating";

export function CourseDetails({ props }: { props: any }) {
  return (
    <div className="grid gap-4 md:grid-cols-[1fr_2fr] lg:grid-cols-[1fr_3fr]">
      <div className="grid gap-4">
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <Album className="h-6 w-6 text-gray-700 dark:text-gray-400" />
            <span className="font-medium">{props?.Title}</span>
          </div>
          <div className="flex items-center gap-2">
            <GraduationCap className="h-5 w-5 text-gray-500 dark:text-gray-400" />
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Teacher?.FullName}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Bookmark className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Field}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Layers className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.RequiredLevel}
            </span>
          </div>
        </div>
        <div className="grid gap-2">
          <div className="flex items-center gap-2">
            <DollarSign className="h-5 w-5 text-gray-500 dark:text-gray-400" />

            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Price || "Free"}
            </span>
          </div>
          <div className="flex items-center gap-2">
            <Check className="h-5 w-5 text-green-500" />
            <span className="text-sm text-green-500">Live</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-0.5">
              <StarsRating Rating={props?.Rating} key="15" />
            </div>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              {props?.Rating || "0.0"}
            </span>
          </div>
        </div>
      </div>
      <div className="grid gap-4 px-4">
        <p className="text-gray-500 dark:text-gray-400">{props?.Description}</p>
      </div>
    </div>
  );
}