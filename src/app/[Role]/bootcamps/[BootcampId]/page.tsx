import { AdminGetBootCamp } from "@/app/Actions/Admin/AdminCoursesActions";
import BootCampAgenda from "./BootCampAgenda";
import BootCampContent from "./CampContent";
import BootCampHeader from "./CampHeader";
import BootCampSubHeader from "./CampSubHeader";
import { GetCamp } from "@/app/Actions/BootCampsActions";

export type BootcampType = {
  Title: string;
  _id: string;
  Description: string;
  StartingDate: Date;
  EndingDate: Date;
  Field: string;
  Rating: number;
  Cover: string;
  Student: string[];
  Courses: any[];
};
async function Camp({
  params,
  searchParams,
}: {
  params: { slug: string } | any;
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const campGetter = await GetCamp(params.BootcampId);
  if (campGetter.error) throw new Error(campGetter.error.message);
  return (
    <main className="flex flex-col min-h-max pb-8 bg-white rounded-2xl shadow-xl overflow-y-auto w-full  border m-4">
      <BootCampHeader camp={campGetter.response.Result} />
      <BootCampSubHeader camp={campGetter.response.Result} />
      <div className="flex-1 p-6">
        <div className=" gap-8 grid grid-cols-1  lg:grid-cols-5 w-full ">
          <BootCampContent camp={campGetter.response.Result} />
          <BootCampAgenda Courses={campGetter.response.Result?.Courses} />
        </div>
      </div>
    </main>
  );
}

export default Camp;
