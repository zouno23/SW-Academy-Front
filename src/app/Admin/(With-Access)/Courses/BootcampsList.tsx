import { GetBootcampsSample } from "@/app/Actions/Admin/AdminCoursesActions";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import NotFound from "./NotFound";
import { GetAbbr } from "@/lib/utils";
import Link from "next/link";

async function BootcampsList() {
  const BootcampsGetter = await GetBootcampsSample();
  if (BootcampsGetter.error?.status === 500)
    throw new Error(BootcampsGetter.error.message);
  const Bootcamps = BootcampsGetter.response?.Result;
  return (
    <div className=" col-span-2 md:col-span-1 bg-white rounded-2xl shadow-md">
      <span className="flex justify-between p-4 items-center">
        <h2 className="text-2xl font-bold">Bootcamps</h2>
        <Link href={"/Admin/Courses/Bootcamps"}>
          <Button variant={"outline"}>View all</Button>
        </Link>
      </span>
      {Bootcamps?.length > 0 ? (
        <Table className="h-full">
          <TableHeader>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Description</TableCell>
              <TableCell>Field</TableCell>
              <TableCell>Enrollements</TableCell>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Bootcamps?.map((camp: any) => (
              <TableRow className="text-pretty ">
                <TableCell className="flex gap-2 items-center text-lg font-semibold">
                  <Avatar className="size-16 text-sm font-normal">
                    <AvatarFallback className=" rounded-lg">
                      {" "}
                      {GetAbbr(camp.Title)}
                    </AvatarFallback>
                  </Avatar>
                  {camp.Title}
                </TableCell>
                <TableCell>{camp.Description}</TableCell>
                <TableCell>{camp.Field}</TableCell>
                <TableCell>{camp.Enrollements}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      ) : (
        <>
          <Table className="h-full">
            <TableHeader>
              <TableRow>
                <TableCell>Title</TableCell>
                <TableCell>Description</TableCell>
                <TableCell>Field</TableCell>
                <TableCell>Enrollements</TableCell>
              </TableRow>
            </TableHeader>
          </Table>

          <NotFound message="No BootCamps Found" />
        </>
      )}
    </div>
  );
}

export default BootcampsList;
