import Image from "next/image";
import moment from "moment";
import Link from "next/link";
import { GetRole } from "@/app/Actions/RoleCookieManagement";
function BootCampCard({
  BootCamp,
}: {
  BootCamp: {
    Cover: string;
    Title: string;
    Description: string;
    Field: string;
    StartingDate: Date;
    _id: string;
  };
}) {
  const Role = GetRole();
  return (
    <Link
      href={"/" + Role + "/bootcamps/" + BootCamp?._id}
      className="rounded-lg bg-white shadow-md dark:bg-gray-800 hover:bg-slate-100/60"
    >
      <div className="relative h-48 overflow-hidden rounded-t-lg">
        <Image
          alt="Mobile App Development"
          className="h-full w-full object-cover"
          height={300}
          src={"http://localhost:9000/" + BootCamp?.Cover}
          style={{
            aspectRatio: "600/300",
            objectFit: "cover",
          }}
          width={600}
        />
      </div>
      <div className="p-6">
        <h2 className="text-xl font-bold mb-2">{BootCamp.Title}</h2>
        <p className="text-gray-500 dark:text-gray-400 mb-4 max-h-44 text-wrap text-clip overflow-hidden">
          {BootCamp.Description}
        </p>
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-medium mb-1">Starting Date</h3>
            <p className="text-gray-500 dark:text-gray-400">
              {moment(BootCamp.StartingDate).format("MMM Do YYYY")}
            </p>
            <span className="inline-block bg-gray-100 dark:bg-gray-700 px-2 py-1 rounded-full text-xs font-medium text-gray-500 dark:text-gray-400 mt-2">
              {BootCamp.Field}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default BootCampCard;
