import { GetAdminData } from "@/app/Actions/Admin/AdminAuthActions";
import SettingsForm from "./EditProfileForm";

export default async function AdminSettings() {
  const Getter = await GetAdminData();
  if (Getter.error) throw new Error(Getter.error.message);
  const Admin = Getter.response.Result;
  return (
    <div className="grid h-full w-full ">
      <header className="bg-gray-100 dark:bg-gray-800 py-6 px-4 md:px-6  ">
        <div className="container max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold">Account Settings</h1>
        </div>
      </header>
      <main>
        <div className="container max-w-4xl mx-auto">
          <SettingsForm Admin={Admin} />
        </div>
      </main>
    </div>
  );
}
