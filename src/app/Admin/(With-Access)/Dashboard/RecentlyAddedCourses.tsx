import { GetLatestCourses } from "@/app/Actions/Admin/AdminDashboardActions";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
async function RecentCourses() {
  const RecentCoursesApiResult = await GetLatestCourses();
  if (RecentCoursesApiResult.error?.status === 500) {
    throw new Error(RecentCoursesApiResult.error.message);
  }
  const RecentCourses = RecentCoursesApiResult.response?.Result;
  return (
    <Card className="bg-white rounded-2xl p-4 dark:slate-900 border col-span-1 space-y-4 shadow-md">
      <CardHeader>
        <CardTitle>Recently Added Courses</CardTitle>
      </CardHeader>
      <CardContent className="grid gap-4">
        {RecentCourses.map((item: any) => (
          <div className="flex items-center gap-4">
            <Image
              alt="Course"
              className="aspect-square rounded-md object-cover border"
              height={60}
              src={item?.Cover && "http://localhost:9000/" + item.Cover}
              width={60}
            />
            <div>
              <h4 className="font-medium">{item.Title}</h4>
              <div className="text-sm text-gray-500 dark:text-gray-400">
                {item?.Description}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}

export default RecentCourses;
