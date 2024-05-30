"use client";
import Link from "next/link";
import { Album, SquarePen } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction } from "react";

export function CourseHeaderEditMode({
  Title,
  IsDone,
  setIsDone,
}: {
  Title: string;
  IsDone: string;
  setIsDone: Dispatch<SetStateAction<string>>;
}) {
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
        <Button onClick={() => setIsDone("false")}>Confirm</Button>
      </div>
    </header>
  );
}
