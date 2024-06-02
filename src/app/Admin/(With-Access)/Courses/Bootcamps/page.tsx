import { GetAllBootcamps } from "@/app/Actions/Admin/AdminUsersActions";
import BootcampssTable from "./BootCampsTable";

async function BootCamps() {
  const BootcampsGetter = await GetAllBootcamps();
  if (BootcampsGetter.error?.status === 500)
    throw new Error(BootcampsGetter.error.message);
  const Bootcamps = BootcampsGetter.response?.Result;
  console.log(BootcampsGetter.response.Result);
  return (
    <main className="bg-white  p-2 rounded-2xl h-full overflow-auto relative shadow-md ">
      <BootcampssTable Bootcamps={Bootcamps} />
    </main>
  );
}

export default BootCamps;
