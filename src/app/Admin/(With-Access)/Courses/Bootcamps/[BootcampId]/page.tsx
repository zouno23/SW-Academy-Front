import BootCampHeader from "./BootCampHeader";
import BootCampSubHeader from "./SubHeader";
import BootCampContent from "./BootCampContent";
import BootCampAgenda from "./BootCampAgenda";
import {
  AdminEditBootCamp,
  AdminGetBootCamp,
} from "@/app/Actions/Admin/AdminCoursesActions";
import { redirect } from "next/navigation";

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
export default async function Component({
  params,
  searchParams,
}: {
  params: { slug: string } | any;
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const campGetter = await AdminGetBootCamp(params.BootcampId);
  if (campGetter.error) throw new Error(campGetter.error.message);
  const EditMode = searchParams.EditMode;
  return (
    <main className="flex flex-col h-max pb-8 bg-white rounded-2xl shadow">
      {EditMode === "true" ? (
        <form
          action={async (FormData) => {
            "use server";
            const Title = FormData.get("Title");
            const Description = FormData.get("Description");
            const Field = FormData.get("Field");
            const setter = await AdminEditBootCamp(params.BootcampId, {
              Title,
              Description,
              Field,
            });
            if (setter.error) {
              throw new Error(setter.error.message);
            } else {
              redirect("/Admin/Courses/Bootcamps/" + params.BootcampId);
            }
          }}
        >
          <BootCampHeader camp={campGetter.response.Result} />
          <BootCampSubHeader camp={campGetter.response.Result} />
          <div className="flex-1 p-6">
            <div className=" gap-8 grid grid-cols-1  lg:grid-cols-5 w-full ">
              <BootCampContent camp={campGetter.response.Result} />
              <BootCampAgenda
                streams={campGetter.response.Result?.Courses?.Lessons?.Streams}
              />
            </div>
          </div>
        </form>
      ) : (
        <>
          <BootCampHeader camp={campGetter.response.Result} />
          <BootCampSubHeader camp={campGetter.response.Result} />
          <div className="flex-1 p-6">
            <div className=" gap-8 grid grid-cols-1  lg:grid-cols-5 w-full ">
              <BootCampContent camp={campGetter.response.Result} />
              <BootCampAgenda Courses={campGetter.response.Result?.Courses} />
            </div>
          </div>
        </>
      )}
    </main>
  );
}
