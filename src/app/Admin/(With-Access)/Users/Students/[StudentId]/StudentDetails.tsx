import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Image from "next/image";

function StudentDetails() {
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md col-span-2">
      <div className="h-32 bg-gradient-to-r from-[#637bf1d5] to-[#615cf6] rounded-t-lg relative">
        <Button
          variant={"ghost"}
          className="rounded-full hover:bg-slate-50/10  p-0 px-2 py-2 left-1 top-1 absolute"
        >
          <ArrowLeft className="size-5 text-white " />
        </Button>
      </div>

      <div className="flex flex-col items-center -mt-12 mb-4">
        <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
          <Image
            width={180}
            height={180}
            src={"http://localhost:9000/" + "Teacher?.Picture"}
            alt="aziz"
          />

          <AvatarFallback>{"GetAbbr(Teacher?.FullName)"}</AvatarFallback>
        </Avatar>

        <h2 className="text-xl font-bold mt-2">{"Teacher.FullName"}</h2>
        <p className="text-gray-500 dark:text-gray-400">Teacher</p>
      </div>
      <div className="px-6 py-4 space-y-4">
        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Email:</h3>

          <p className="text-gray-500 dark:text-gray-400">{"Teacher.Email"}</p>
        </div>

        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Date Joined:</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {"moment(Teacher.Date).format(" + "DD/MM/YYYY" + ")" + ""}
          </p>
        </div>

        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Status:</h3>

          <p className="text-gray-500 dark:text-gray-400">
            {"Teacher.Status" ? "Active" : "Inactive"}
          </p>
        </div>
      </div>
      <div className="w-full px-4 py-8">
        <Button className="w-full text-md" variant={"outline"} type="button">
          Edit
        </Button>
      </div>
    </div>
  );
}

export default StudentDetails;
