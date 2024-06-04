"use client";
import Image from "next/image";
import { BootcampType } from "./page";
import { useSearchParams } from "next/navigation";
import { Input } from "@/components/ui/input";

function BootCampHeader({ camp }: { camp: BootcampType }) {
  const searchParams = useSearchParams();
  const EditMode = searchParams.get("EditMode");
  return (
    <div className="relative">
      <Image
        width={1920}
        height={1080}
        src={"http://localhost:9000/" + camp?.Cover}
        alt="Bootcamp Cover"
        className="w-full h-[300px] object-cover rounded-t-2xl"
      />
      <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/50 to-transparent p-6 rounded-t-md">
        {EditMode === "true" ? (
          <Input
            defaultValue={camp?.Title}
            name="Title"
            className="bg-transparent text-white font-semibold text-xl"
          />
        ) : (
          <h1 className="text-2xl font-semibold text-white">{camp?.Title}</h1>
        )}
      </div>
    </div>
  );
}

export default BootCampHeader;
