import { GetAllTeachers } from "@/app/Actions/Admin/AdminUsersActions";
import TeachersTable from "./TeachersTable";

async function TeachersPage({
  searchParams,
}: {
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const TeachersApiResponse = await GetAllTeachers();
  if (TeachersApiResponse.error) {
    throw new Error(TeachersApiResponse.error.message);
  }
  const Teachers = TeachersApiResponse.response?.Result;

  return (
    <main className="bg-white rounded-2xl h-full overflow-auto relative shadow-md">
      <TeachersTable Teachers={Teachers} />
    </main>
  );
}

export default TeachersPage;
