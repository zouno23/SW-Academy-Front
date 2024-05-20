import { cn } from "@/lib/utils";
import BootCampCard from "./BootCampCard";

function BootCamp() {
  const list = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <main
      className={cn(
        "bg-gray-100 w-full h-full relative overflow-auto overflow-x-hidden p-8 flex flex-col gap-8 dark:bg-black z-0 "
      )}
    >
      <div className=" bg-gray-50 border w-full h-max  flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 ">
        <h2 className=" w-full  text-3xl font-bold flex p-8 ">BootCamps</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 p-8 ">
          {list.map((item, index) => (
            <BootCampCard />
          ))}
        </div>
      </div>
    </main>
  );
}

export default BootCamp;
