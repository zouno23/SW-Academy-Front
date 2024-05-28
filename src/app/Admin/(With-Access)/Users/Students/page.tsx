import { GetAllStudents } from "@/app/Actions/Admin/AdminUsersActions";
import StudentsTable from "./StudentsTable";

async function StudentsPage() {
  const StudentsApiResponse = await GetAllStudents();
  if (StudentsApiResponse.error) {
    throw new Error(StudentsApiResponse.error.message);
  }
  const Students = StudentsApiResponse.response.Result;
  return (
    <main className="bg-white  p-2 rounded-2xl h-full overflow-auto relative shadow-md">
      <StudentsTable Students={Students} />
    </main>
  );
}

export default StudentsPage;
