"use client";
import { Badge } from "@/components/ui/badge";
import { AtomIcon, Key, SquarePen, Star, StarIcon, Trash } from "lucide-react";
import { BootcampType } from "./page";
import { GetUserLocalStorage } from "@/app/Hooks/LocalStorage";
import { cn } from "@/lib/utils";
import { RateCamp } from "@/app/Actions/BootCampsActions";
import { useParams, useRouter } from "next/navigation";
import { toast } from "@/components/ui/use-toast";
import { useEffect, useRef, useState } from "react";

function BootCampSubHeader({ camp }: { camp: any }) {
  const Role = GetUserLocalStorage()?.Role;
  const params = useParams();
  const router = useRouter();
  const [Rating, setRating] = useState(camp.StudentRating);
  const formRef = useRef<HTMLButtonElement | null>(null);
  const [RatingList, setRatingList] = useState(
    Array.from(Array(5), (_, i) => (i + 1 <= Rating ? 1 : 0))
  );
  useEffect(() => {
    setRatingList(Array.from(Array(5), (_, i) => (i + 1 <= Rating ? 1 : 0)));
    if (Rating != camp.StudentRating) formRef.current?.click();
  }, [Rating]);
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <div className="flex items-center space-x-2">
        <AtomIcon className="w-5 h-5 text-gray-600" />

        <p>{camp.Field}</p>

        {camp.Courses?.length > 0 && Role == "Student" ? (
          <div className="flex items-center ">
            <div className="flex items-center mr-4">
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
            </div>
            <span className="text-gray-900 dark:text-gray-100 font-medium">
              {Rating}
            </span>
            <form
              className="hidden"
              action={async () => {
                const setter = await RateCamp(
                  params.BootcampId as string,
                  Rating
                );
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
          </div>
        ) : (
          <>
            <Star className="w-5 h-5 text-gray-600" />
            <p>{camp?.Rating || 0}/5</p>
          </>
        )}
        <Badge variant="secondary">Live</Badge>
      </div>
    </div>
  );
}

export default BootCampSubHeader;
