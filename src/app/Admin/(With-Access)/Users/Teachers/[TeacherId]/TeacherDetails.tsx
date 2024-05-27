"use client";
import { UpdateTeacher } from "@/app/Actions/Admin/AdminUsersActions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Switch } from "@/components/ui/switch";
import { toast } from "@/components/ui/use-toast";
import { GetAbbr } from "@/lib/utils";
import { ArrowLeft } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import { useParams, useRouter } from "next/navigation";
import { Dispatch, SetStateAction, useEffect, useRef, useState } from "react";
type teacher = {
  Picture: string;
  FullName: string;
  Email: string;
  Date: Date;
  Numero: number;
  Status: boolean;
};
function TeacherDetails({ teacher }: { teacher: teacher }) {
  const [Teacher, setTeacher] = useState(teacher);
  const [EditMode, setEditMode] = useState(false);
  const router = useRouter();
  return (
    <div className="bg-white dark:bg-gray-950 rounded-lg shadow-md col-span-2">
      {!EditMode ? (
        <>
          <div className="h-32 bg-gradient-to-r from-[#637bf1d5] to-[#615cf6] rounded-t-lg relative">
            <Button
              variant={"ghost"}
              className="rounded-full hover:bg-slate-50/10  p-0 px-2 py-2 left-1 top-1 absolute"
              onClick={() => router.back()}
            >
              <ArrowLeft className="size-5 text-white " />
            </Button>
          </div>

          <div className="flex flex-col items-center -mt-12 mb-4">
            <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
              {Teacher?.Picture ? (
                <Image
                  width={180}
                  height={180}
                  src={"http://localhost:9000/" + Teacher?.Picture}
                  alt="aziz"
                />
              ) : (
                <AvatarFallback>{GetAbbr(Teacher?.FullName)}</AvatarFallback>
              )}
            </Avatar>

            <h2 className="text-xl font-bold mt-2">{Teacher.FullName}</h2>
            <p className="text-gray-500 dark:text-gray-400">Teacher</p>
          </div>
          <div className="px-6 py-4 space-y-4">
            <div className="flex gap-4">
              <h3 className="text-lg font-semibold">Email:</h3>

              <p className="text-gray-500 dark:text-gray-400">
                {Teacher.Email}
              </p>
            </div>

            <div className="flex gap-4">
              <h3 className="text-lg font-semibold">Date Joined:</h3>
              <p className="text-gray-500 dark:text-gray-400">
                {moment(Teacher.Date).format("DD/MM/YYYY") + ""}
              </p>
            </div>

            <div className="flex gap-4">
              <h3 className="text-lg font-semibold">Status:</h3>

              <p className="text-gray-500 dark:text-gray-400">
                {Teacher.Status ? "Active" : "Inactive"}
              </p>
            </div>
          </div>
          <div className="w-full px-4 py-8">
            <Button
              className="w-full text-md"
              variant={"outline"}
              onClick={() => setEditMode(true)}
              type="button"
            >
              Edit
            </Button>
          </div>
        </>
      ) : (
        <TeacherEditMode
          setEditMode={setEditMode}
          Teacher={Teacher}
          setTeacher={setTeacher}
        />
      )}
    </div>
  );
}

export default TeacherDetails;

const TeacherEditMode = ({
  setEditMode,
  Teacher,
  setTeacher,
}: {
  Teacher: teacher;
  setEditMode: Dispatch<SetStateAction<boolean>>;
  setTeacher: Dispatch<SetStateAction<teacher>>;
}) => {
  const [status, setStatus] = useState(Teacher.Status);
  const formRef = useRef<HTMLFormElement | null>(null);
  const params = useParams();
  const router = useRouter();

  return (
    <form
      ref={formRef}
      action={async (FormData) => {
        const FullName = FormData.get("FullName");
        const Email = FormData.get("Email");
        const TeacherSetter = await UpdateTeacher(params.TeacherId as string, {
          Email,
          FullName,
          Status: status,
        });
        if (TeacherSetter.error) {
          toast({
            description: TeacherSetter.error.message,
            icon: "error",
            variant: "error",
          });
        } else {
          setTeacher(TeacherSetter.response.Result);
          setEditMode(false);
        }
      }}
    >
      <div className="h-32 bg-gradient-to-r from-[#637bf1d5] to-[#615cf6] rounded-t-lg relative">
        <Button
          variant={"ghost"}
          className="rounded-full hover:bg-slate-50/10  p-0 px-2 py-2 left-1 top-1 absolute"
          onClick={() => router.back()}
        >
          <ArrowLeft className="size-5 text-white " />
        </Button>
      </div>
      <div className="flex flex-col items-center -mt-12 mb-4">
        <Avatar className="w-24 h-24 border-4 border-white dark:border-gray-950">
          {Teacher?.Picture ? (
            <Image
              width={180}
              height={180}
              src={"http://localhost:9000/" + Teacher?.Picture}
              alt="aziz"
            />
          ) : (
            <AvatarFallback>{GetAbbr(Teacher?.FullName)}</AvatarFallback>
          )}
        </Avatar>

        <Input
          className="text-xl font-bold mt-2 w-2/3"
          name="FullName"
          defaultValue={Teacher.FullName}
          required
        />

        <p className="text-gray-500 dark:text-gray-400">Teacher</p>
      </div>
      <div className="px-6 py-4 space-y-4">
        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Email:</h3>
          <Input
            className="text-gray-500 dark:text-gray-400 mx-4"
            defaultValue={Teacher.Email}
            name="Email"
            type="email"
            required
          />
        </div>

        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Date Joined:</h3>
          <p className="text-gray-500 dark:text-gray-400">
            {moment(Teacher.Date).format("DD/MM/YYYY") + ""}
          </p>
        </div>

        <div className="flex gap-4">
          <h3 className="text-lg font-semibold">Status:</h3>

          <Switch
            className=" data-[state=checked]:bg-blue-600"
            checked={status}
            onClick={() => setStatus((prev) => !prev)}
          />
        </div>
      </div>
      <div className="w-full px-4 py-8">
        <Button className="w-full text-md" variant={"outline"} type="submit">
          save
        </Button>
      </div>
    </form>
  );
};
