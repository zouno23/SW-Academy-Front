import { GetUsersNumbers } from "@/app/Actions/Admin/AdminDashboardActions";
import AdminPieChart from "../Dashboard/AdminCharts/AdminPieChart";
import { NewestAdmins, NewestStudents, NewestTeachers } from "./NewestUsers";

async function Users() {
  const UsersApiResult = await GetUsersNumbers();
  if (UsersApiResult.error?.status === 500) {
    throw new Error(UsersApiResult.error.message);
  }
  return (
    <main className=" flex flex-col md:grid md:grid-cols-2 gap-8 h-full md:place-items-evenly ">
      <NewestStudents />
      <NewestTeachers />
      <NewestAdmins />
      <AdminPieChart UsersData={UsersApiResult.response?.Result} />
      <footer className=" w-screen md:col-span-2 h-4"></footer>
    </main>
  );
}

export default Users;
