"use client";

import { RateCamp } from "@/app/Actions/BootCampsActions";
import { RateCourse } from "@/app/Actions/CoursesActions";
import { toast } from "@/components/ui/use-toast";
import { cn } from "@/lib/utils";
import { StarIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";

function StudentRate({ rating }: { rating: number }) {
  const router = useRouter();
  const params = useParams();

  const [Rating, setRating] = useState(rating);
  const formRef = useRef<HTMLButtonElement | null>(null);
  const [RatingList, setRatingList] = useState(
    Array.from(Array(5), (_, i) => (i + 1 <= Rating ? 1 : 0))
  );
  useEffect(() => {
    setRatingList(Array.from(Array(5), (_, i) => (i + 1 <= Rating ? 1 : 0)));
    if (Rating != rating) formRef.current?.click();
  }, [Rating]);

  return (
    <>
      {RatingList.map((index, i) => (
        <StarIcon
          key={i}
          className={cn(
            "w-6 h-6 text-yellow-500 cursor-pointer",
            index == 0 && "text-gray-300 dark:text-gray-600"
          )}
          onClick={async () => setRating(i + 1)}
        />
      ))}
      <form
        className="hidden"
        action={async () => {
          const setter = await RateCourse(params.Id as string, Rating);
          if (setter.error)
            toast({
              description: setter.error.message,
              variant: "error",
              icon: "error",
            });
          else if (setter.response) {
            toast({
              description: "Rating updated to " + Rating,
              variant: "verified",
              icon: "verified",
            });
            router.refresh();
          }
        }}
      >
        <button type="submit" ref={formRef} className="hidden" />
      </form>
    </>
  );
}

export default StudentRate;
