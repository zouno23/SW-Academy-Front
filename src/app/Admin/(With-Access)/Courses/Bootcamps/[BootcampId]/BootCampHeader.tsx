import Image from "next/image";
import { BootcampType } from "./page";

function BootCampHeader({ camp }: { camp: BootcampType }) {
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
        <h1 className="text-2xl font-semibold text-white">{camp?.Title}</h1>
      </div>
    </div>
  );
}

export default BootCampHeader;
