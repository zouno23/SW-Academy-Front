import Image from "next/image";
import p from "@/../public/next.svg"
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

function Course( {props}:any) {
    return (    
    <div className="w-full max-md:w-[800px] static h-28  flex items-center text-black/50 gap-16 font-medium hover:bg-slate-50 hover:text-black/80 dark:hover:bg-slate-950 dark:text-white">
    <div className="flex h-full items-center gap-6 p-4 text-black w-1/2 dark:text-white ">
    <Image alt="product" width={150} height={150} src={p} className="size-24 bg-slate-200 rounded-lg px-3"/>
    <div className="h-full flex flex-col justify-center gap-2 w-2/3">
        <h4 className="font-semibold">{props.Title}</h4>
        <div className="flex justify-start gap-9 ">
        <Badge className="bg-blue-600/80 hover:bg-blue-600">{props.Field}</Badge>
        <span>{parseFloat(props.Rating.toFixed(1))}/5.0</span>
        </div>
    </div>
    </div>
    <div className=" flex w-1/2 px-6 flex-row-reverse text-center justify-between ">
    <p className="basis-1/3"> Price</p>
    <p className="basis-1/3"> number of sellings</p>
    <p className="basis-1/3"> {props?.Lessons.length}</p>
    </div>
</div>
  );
}

export default Course;