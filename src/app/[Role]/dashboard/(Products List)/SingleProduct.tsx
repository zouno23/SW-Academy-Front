import Image from "next/image";
import p from "@/../public/next.svg"
import { Progress } from "@/components/ui/progress"
import { Button } from "@/components/ui/button";
import { Lesson } from "./DataStructure";

function SingleProduct({Data}:{Data:Lesson}) {
    return ( 
    <div className="w-full h-28 flex items-center text-black/50 justify-between font-medium hover:bg-slate-50 hover:text-black/80">
        <div className="flex h-full items-center gap-6 p-4 text-black">
        <Image alt="product" width={150} height={150} src={p} className="size-24 bg-slate-200 rounded-lg px-3"/>
        <div className="h-full flex flex-col justify-center gap-2">
            <h4 className="font-semibold">{Data.courseTitle}</h4>
            <span className="  text-end">
            {Data.progress}
            <Progress value={parseInt(Data.progress.slice(0,-1))} className="mt-1 border-blue-600"/>
            </span>
        </div>
        </div>
        <div className=" flex w-1/2 px-5 justify-between">
        <p className="w-1/4 text-start"> {Data.totalLectures}</p>
        <p className="w-1/4 text-center"> {Data.completedLectures}</p>
        <div className=" w-1/3 flex justify-center">
        <Button>{Data.action}</Button>
        </div>
        </div>
    </div> );
}

export default SingleProduct;