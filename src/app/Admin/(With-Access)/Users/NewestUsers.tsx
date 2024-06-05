import {
  GetNewestAdmins,
  GetNewestStudents,
  GetNewestTeachers,
} from "@/app/Actions/Admin/AdminUsersActions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { GetAbbr } from "@/lib/utils";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
type UsersFormat = {
  FullName: string;
  Name?: string;
  Email: string;
  Date: string;
  Picture: string;
};
export async function NewestStudents() {
  const NewestStudentsApiResult = await GetNewestStudents();
  if (NewestStudentsApiResult.error?.status === 500) {
    throw new Error(NewestStudentsApiResult.error.message);
  }
  const newestStudents = NewestStudentsApiResult.response?.Result || [];
  return (
    <section className="col-span-1">
      <Card className="h-full shadow-md ">
        <CardHeader className="grid grid-cols-3">
          <span className=" col-span-2 text-pretty space-y-2">
            <CardTitle> Most Recent Student enrollement </CardTitle>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Newest Students to join our platform
            </p>
          </span>
          <Link
            href={"/Admin/Users/Students"}
            className="w-fit  self-start place-self-end text-lg font-semibold "
          >
            <Button variant={"outline"}>See All</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {newestStudents.map((student: UsersFormat) => (
            <div className="flex gap-8 items-center  justify-start text-pretty px-2 ">
              <Avatar className="size-20 bg-slate-100 border border-slate-100">
                {student.Picture ? (
                  <Image
                    src={"http://localhost:9000/" + student.Picture}
                    width={120}
                    height={120}
                    className="object-fit size-full"
                    alt=""
                  />
                ) : (
                  <AvatarFallback>{GetAbbr(student.FullName)}</AvatarFallback>
                )}
              </Avatar>
              <span className=" grid  items-center  text-pretty font-medium ">
                <h4 className="text-xl font-semibold">{student.FullName}</h4>
                <p className="text-sm">
                  Joined on{" "}
                  {moment(student.Date).format("MMMM Do YYYY , h:mm:ss a")}
                </p>
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export async function NewestTeachers() {
  const NewestTeachersApiResult = await GetNewestTeachers();
  if (NewestTeachersApiResult.error?.status === 500) {
    throw new Error(NewestTeachersApiResult.error.message);
  }
  const newestTeachers = NewestTeachersApiResult.response?.Result || [];

  return (
    <section className="col-span-1">
      <Card className="h-full shadow-md ">
        <CardHeader className="grid grid-cols-3">
          <span className=" col-span-2 text-pretty space-y-2">
            <CardTitle> Most Recent Teacher sign up </CardTitle>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Newest Teachers to join our platform
            </p>
          </span>
          <Link
            href={"/Admin/Users/Teachers"}
            className="w-fit  self-start place-self-end text-lg font-semibold "
          >
            <Button variant={"outline"}>See All</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {newestTeachers.map((teacher: UsersFormat) => (
            <div className="flex gap-8 items-center  justify-start text-pretty px-2 ">
              <Avatar className="size-20 bg-slate-100 border border-slate-100">
                {teacher.Picture ? (
                  <Image
                    src={"http://localhost:9000/" + teacher.Picture}
                    width={120}
                    height={120}
                    className="object-fit size-full"
                    alt=""
                  />
                ) : (
                  <AvatarFallback>{GetAbbr(teacher.FullName)}</AvatarFallback>
                )}
              </Avatar>
              <span className=" grid  items-center  text-pretty font-medium ">
                <h4 className="text-xl font-semibold">{teacher.FullName}</h4>
                <p className="text-sm">
                  Joined on{" "}
                  {moment(teacher.Date).format("MMMM Do YYYY , h:mm:ss a")}
                </p>
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}

export async function NewestAdmins() {
  const NewestAdminsApiResults = await GetNewestAdmins();
  if (NewestAdminsApiResults.error?.status === 500) {
    throw new Error(NewestAdminsApiResults.error.message);
  }
  const NewestAdmins = NewestAdminsApiResults.response?.Result || [];
  return (
    <section className="col-span-1">
      <Card className="h-full shadow-md ">
        <CardHeader className="grid grid-cols-3">
          <span className=" col-span-2 text-pretty space-y-2">
            <CardTitle> Latest Admins </CardTitle>
            <p className="text-md text-gray-500 dark:text-gray-400">
              Newest Admins to join our platform
            </p>
          </span>
          <Link
            href={"/Admin/Users/Admins"}
            className="w-fit self-start place-self-end text-lg font-semibold "
          >
            <Button variant={"outline"}>See All</Button>
          </Link>
        </CardHeader>
        <CardContent className="space-y-4">
          {NewestAdmins.map((admin: UsersFormat) => (
            <div className="flex gap-8 items-center  justify-start text-pretty px-2 ">
              <Avatar className="size-20 bg-slate-100 border border-slate-100">
                {admin.Picture ? (
                  <Image
                    src={"http://localhost:9000/" + admin.Picture}
                    width={120}
                    height={120}
                    className="object-fit size-full"
                    alt=""
                  />
                ) : (
                  <AvatarFallback>
                    {GetAbbr(admin.Name as string)}
                  </AvatarFallback>
                )}
              </Avatar>
              <span className=" grid  items-center  text-pretty font-medium ">
                <h4 className="text-xl font-semibold">{admin.Name}</h4>
                <p className="text-sm">
                  Joined on{" "}
                  {moment(admin.Date).format("MMMM Do YYYY , h:mm:ss a")}
                </p>
              </span>
            </div>
          ))}
        </CardContent>
      </Card>
    </section>
  );
}
