import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from "next/image";
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

const MostActiveTeachers = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <Card>
      <CardHeader>
        <CardTitle> Most Active Teacher </CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Most Active Teachers by course publishings and sellings this month
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {list.map(() => (
          <div className="grid grid-cols-4 gap-2 w-full bg-slate-50 px-4 p-2 rounded-xl ">
            <div className="flex gap-8 items-center col-span-2 justify-start ">
              <Avatar className="size-20 bg-slate-100 border border-slate-100">
                <Image
                  src="/images/teacher/teacher-1.jpg"
                  width={60}
                  height={60}
                  alt="teacher"
                />
                <AvatarFallback>Teacher</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold">Jhon Doe</h4>
            </div>
            <span className=" gap-2 col-span-2 grid grid-cols-2  items-center  text-pretty font-semibold">
              <p>1500 Course Sold</p>
              <p>200 Course Published</p>
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

const MostActiveStudents = () => {
  const list = [1, 2, 3, 4, 5];
  return (
    <Card>
      <CardHeader>
        <CardTitle> Most Active Students </CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Most Active Students by courses Completed and Purshases this month
        </p>
      </CardHeader>
      <CardContent className="space-y-4">
        {list.map(() => (
          <div className="grid grid-cols-4 gap-2 w-full bg-slate-50 px-4 p-2 rounded-xl ">
            <div className="flex gap-8 items-center col-span-2 justify-start ">
              <Avatar className="size-20 bg-slate-100 border border-slate-100">
                <Image
                  src="/images/teacher/teacher-1.jpg"
                  width={60}
                  height={60}
                  alt="teacher"
                />
                <AvatarFallback>Student</AvatarFallback>
              </Avatar>
              <h4 className="text-xl font-semibold">Jhon Doe</h4>
            </div>
            <span className=" gap-2 col-span-2 grid grid-cols-2  items-center  text-pretty font-semibold">
              <p>1500 Course Bought</p>
              <p>200 Course Completed</p>
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
};
