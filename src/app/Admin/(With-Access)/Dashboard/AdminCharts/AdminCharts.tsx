import {
  GetAllSoldCoursesPerMonth,
  GetUsersNumbers,
} from "@/app/Actions/Admin/AdminDashboardActions";
import AdminLineChart from "./AdminLineChart";
import AdminPieChart from "./AdminPieChart";

async function AdminCharts() {
  const UsersApiResult = await GetUsersNumbers();
  if (UsersApiResult.error?.status === 500) {
    throw new Error(UsersApiResult.error.message);
  }
  const SoldCoursesApiResult = await GetAllSoldCoursesPerMonth();
  if (SoldCoursesApiResult.error?.status === 500)
    throw new Error(SoldCoursesApiResult.error.message);
  console.log(SoldCoursesApiResult);
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      <AdminPieChart UsersData={UsersApiResult.response.Result} />
      <AdminLineChart SoldCourses={SoldCoursesApiResult.response?.Result} />
    </div>
  );
}

export default AdminCharts;
