import {
  GetMostActiveStudents,
  GetMostActiveTeachers,
} from "@/app/Actions/Admin/AdminDashboardActions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";

type UserType = {
  _id: string;
  FullName: string;
  Email: string;
  Picture: string;
  Numbers: number;
};
function UserActivity() {
  return (
    <Tabs defaultValue="Teachers" className="shadow-sm border rounded-lg">
      <TabsList className="p-4 py-6">
        <TabsTrigger value="Teachers" className="rounded-lg ">
          Teachers
        </TabsTrigger>
        <TabsTrigger value="Students" className="rounded-lg">
          Students
        </TabsTrigger>
      </TabsList>
      <TabsContent value="Teachers">
        <MostActiveTeachers />
      </TabsContent>
      <TabsContent value="Students">
        <MostActiveStudents />
      </TabsContent>
    </Tabs>
  );
}

export default UserActivity;

const MostActiveTeachers = async () => {
  const TeacherActivityApiResult = await GetMostActiveTeachers();
  if (TeacherActivityApiResult.error?.status === 500)
    throw new Error(TeacherActivityApiResult.error.message);
  const mostActiveTeachers = TeacherActivityApiResult.response?.Result || [];
  return (
    <Card>
      <CardHeader>
        <CardTitle> Most Active Teacher </CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Most Active Teachers by course publishings and sellings this month
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {mostActiveTeachers.length > 0 ? (
          mostActiveTeachers.map((teacher: UserType) => (
            <div className="grid grid-cols-4 gap-2 w-full bg-slate-50 px-4 p-2 rounded-xl ">
              <div className="flex gap-8 items-center col-span-2 justify-start ">
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
                    <AvatarFallback>T</AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{teacher.FullName}</h4>
                  <p>{teacher.Email}</p>
                </span>
              </div>
              <span className=" gap-10 col-span-2 flex   items-center  text-pretty font-semibold">
                <p className="text-xl">{teacher.Numbers}</p>
                <p> Course Published & sold this month </p>
              </span>
            </div>
          ))
        ) : (
          <NoResult Role="Teacher" />
        )}
      </CardContent>
    </Card>
  );
};

const MostActiveStudents = async () => {
  const StudentActivityApiResult = await GetMostActiveStudents();
  if (StudentActivityApiResult.error?.status === 500)
    throw new Error(StudentActivityApiResult.error.message);
  const mostActiveStudents = StudentActivityApiResult.response?.Result || [];
  return (
    <Card>
      <CardHeader>
        <CardTitle> Most Active Students </CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Most Active Students by courses Completed and Purshases this month
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {mostActiveStudents.length > 0 ? (
          mostActiveStudents.map((student: UserType) => (
            <div className="grid grid-cols-4 gap-2 w-full bg-slate-50 px-4 p-2 rounded-xl ">
              <div className="flex gap-8 items-center col-span-2 justify-start ">
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
                    <AvatarFallback>S</AvatarFallback>
                  )}
                </Avatar>
                <h4 className="text-xl font-semibold">{student.FullName}</h4>
              </div>
              <span className=" gap-10 col-span-2 flex   items-center  text-pretty font-semibold">
                <p className="text-xl">{student.Numbers}</p>
                <p> Course Completed & Bought this month </p>
              </span>
            </div>
          ))
        ) : (
          <NoResult Role={"Student"} />
        )}
      </CardContent>
    </Card>
  );
};

const NoResult = ({ Role }: { Role: string }) => {
  return (
    <div className="grid place-items-center w-full h-full text-3xl font-bold text-gray-600/80 p-40">
      No {Role} Activity This month
    </div>
  );
};
