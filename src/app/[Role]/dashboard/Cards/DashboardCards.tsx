import {
  GetCardsNumbers,
  GetTeacherStats,
} from "@/app/Actions/DashboardActions";
import Card from "./Card";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

async function DashboardCards() {
  let items;
  const role = GetRole();
  if (role == "Student") {
    const { error, response } = await GetCardsNumbers();
    if (error) throw error;
    items = [
      { index: 1, title: "Total Bootcamps", stats: response?.Result.BootCamps },
      { index: 2, title: "Total Courses", stats: response?.Result.Courses },
      {
        index: 3,
        title: "Achieved Certificates",
        stats: response?.Result.Certificates,
      },
    ];
  } else if (role === "Teacher") {
    const { error, response } = await GetTeacherStats();
    if (error) throw error;
    items = [
      {
        index: 1,
        title: "Average Rating",
        stats: (parseFloat(response?.Result.averageRating) || "0.0") + "/5.0",
      },
      {
        index: 2,
        title: "Total Courses",
        stats: response?.Result.totalCourses,
      },
      {
        index: 3,
        title: "Online Courses",
        stats: response?.Result.liveCourses,
      },
    ];
  } else {
    return null;
  }
  return (
    <div className="flex justify-between gap-8 max-md:flex-col">
      {items.map((index) => (
        <Card
          key={`${index.index}`}
          title={index.title}
          index={index.index}
          stats={index.stats}
        />
      ))}
    </div>
  );
}

export default DashboardCards;
