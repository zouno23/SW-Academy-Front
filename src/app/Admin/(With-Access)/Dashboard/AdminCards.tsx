import {
  GetCoursesNumbers,
  GetUsersNumbers,
} from "@/app/Actions/Admin/AdminDashboardActions";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Book, BookAudio, BookIcon, Users } from "lucide-react";
async function AdminCards() {
  const UserNumbersApiResult = await GetUsersNumbers();
  if (UserNumbersApiResult.error) {
    throw new Error(UserNumbersApiResult.error.message);
  }
  const CoursesNumbersApiResult = await GetCoursesNumbers();
  if (CoursesNumbersApiResult.error) {
    throw new Error(CoursesNumbersApiResult.error.message);
  }

  const LiveCourses = CoursesNumbersApiResult.response.Result.LiveCourses;
  const TotalCourses = CoursesNumbersApiResult.response.Result.TotalCourses;
  const UsersNumbers = UserNumbersApiResult.response.Result;
  const users: number =
    UsersNumbers?.admins + UsersNumbers?.students + UsersNumbers?.teachers;

  const Cards = [
    {
      name: "Total Number of Users",
      description: "Total number of users on the platform",
      icon: <Users className="h-6 w-6 text-blue-600/80 dark:text-gray-400" />,
      number: users,
    },
    {
      name: "Online Courses",
      description: "Total number of live courses on the platform",
      icon: (
        <BookAudio className="h-6 w-6 text-blue-600/80 dark:text-gray-400" />
      ),
      number: LiveCourses,
    },
    {
      name: "Total Courses",
      description: "Total number of courses on the platform",
      icon: <Book className="h-6 w-6 text-blue-600/80 dark:text-gray-400" />,
      number: TotalCourses,
    },
  ];
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {Cards.map((card) => (
        <Card className="space-2 rounded-2xl" key={card.number}>
          <CardHeader className="flex flex-row items-center justify-center gap-2 text-center">
            {card.icon}
            <CardTitle>{card.name}</CardTitle>
          </CardHeader>
          <CardContent className="flex flex-col justify-center gap-2">
            <Badge className=" self-center bg-blue-600">{card.number}</Badge>
            <p className="text-sm text-gray-500 dark:text-gray-400 text-pretty text-center ">
              {card.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}

export default AdminCards;
