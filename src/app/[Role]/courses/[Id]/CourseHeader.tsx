import Link from "next/link";
import { Album, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";

export function CourseHeader({ Title }: { Title: string }) {
  return (
    <header className="flex h-14 lg:h-[60px] items-center gap-4 border-b bg-gray-100/40 px-6 dark:bg-gray-800/40 rounded-xl">
      <Link className="lg:hidden" href="#">
        <Album className="h-6 w-6" />
        <span className="sr-only">Home</span>
      </Link>
      <div className="w-full flex justify-between ">
        <h1 className="font-semibold text-lg md:text-2xl">{Title}</h1>
      </div>
      <div className="flex items-center gap-2">
        <Button size="icon" variant="ghost">
          <SquarePen className="h-5 w-5" />
          <span className="sr-only">Edit Course</span>
        </Button>
      </div>
    </header>
  );
}
