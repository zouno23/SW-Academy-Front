import { GetAllAdmins } from "@/app/Actions/Admin/AdminUsersActions";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import AdminsTable from "./AdminsTable";
import NewAdmin from "./AddAdmin";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

async function AdminsPage() {
  const AdminsApiResponse = await GetAllAdmins();
  if (AdminsApiResponse.error) {
    throw new Error(AdminsApiResponse.error.message);
  }
  const Admins = AdminsApiResponse.response?.Result;
  const role = GetRole();
  return (
    <main className="bg-white  p-2 rounded-2xl h-full overflow-auto relative shadow-md">
      <AdminsTable Admins={Admins} role={role as string} />
    </main>
  );
}

export default AdminsPage;
