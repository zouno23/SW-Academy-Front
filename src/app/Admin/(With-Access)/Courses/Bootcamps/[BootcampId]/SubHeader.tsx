"use client";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AtomIcon, SquarePen, Star, Trash } from "lucide-react";
import { BootcampType } from "./page";
import {
  useParams,
  usePathname,
  useRouter,
  useSearchParams,
} from "next/navigation";
import { Input } from "@/components/ui/input";
import { useCallback } from "react";
import { AdminDeleteBootCamp } from "@/app/Actions/Admin/AdminCoursesActions";
import { Description } from "@radix-ui/react-toast";
import { toast } from "@/components/ui/use-toast";

function BootCampSubHeader({ camp }: { camp: BootcampType }) {
  const searchParams = useSearchParams();
  const params = useParams();
  const router = useRouter();
  const pathname = usePathname();
  const EditMode = searchParams.get("EditMode");

  const createQueryString = useCallback(
    (name: string, value: string) => {
      const params = new URLSearchParams(searchParams.toString());
      params.set(name, value);

      return params.toString();
    },
    [searchParams]
  );

  return (
    <div className="flex items-center justify-between p-6 border-b">
      <div className="flex items-center space-x-2">
        <AtomIcon className="w-5 h-5 text-gray-600" />
        {EditMode === "true" ? (
          <Input defaultValue={camp?.Field} name="Field" />
        ) : (
          <p>{camp.Field}</p>
        )}
        <Star className="w-5 h-5 text-gray-600" />
        <p>{camp?.Rating || 0}/5</p>
        <Badge variant="secondary">Live</Badge>
      </div>
      {EditMode ? (
        <Button type="submit">Save</Button>
      ) : (
        <div className="flex space-x-2">
          <Button
            size="icon"
            variant="ghost"
            className="hover:text-blue-600"
            onClick={() =>
              router.replace(
                pathname + "?" + createQueryString("EditMode", "true")
              )
            }
          >
            <SquarePen className="h-5 w-5" />
            <span className="sr-only">Edit Course</span>
          </Button>
          <Button
            size="icon"
            variant="ghost"
            type="submit"
            className="hover:text-red-600"
            onClick={async () => {
              const deleter = await AdminDeleteBootCamp(
                params.BootcampId as string
              );
              if (deleter.error) {
                toast({
                  description: deleter.error.message,
                  variant: "error",
                  icon: "error",
                });
              } else {
                router.refresh();
                toast({
                  description: deleter.response.message,
                  variant: "verified",
                  icon: "verified",
                });
                router.push("/Admin/Courses/Bootcamps");
              }
            }}
          >
            <Trash className="size-5" />
            <span className="sr-only"> Delete Course</span>
          </Button>
        </div>
      )}
    </div>
  );
}

export default BootCampSubHeader;
