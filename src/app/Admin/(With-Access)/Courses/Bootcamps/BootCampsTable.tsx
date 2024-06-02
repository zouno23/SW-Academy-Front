"use client";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import Image from "next/image";
import { GetAbbr } from "@/lib/utils";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import moment from "moment";

type Bootcamps = {
  Title: string;
  _id: string;
  Description: string;
  StartingDate: Date;
  EndingDate: Date;
  Rating: number;
  Cover: string;
  Students: string[];
}[];
function BootcampssTable({ Bootcamps }: { Bootcamps: Bootcamps }) {
  const [Display, setDisplay] = useState(Bootcamps);
  const [query, setQuery] = useState("");
  const router = useRouter();
  useEffect(() => {
    if (query == "") {
      setDisplay(Bootcamps);
    } else {
      setDisplay(
        Bootcamps.filter(
          (Course, index) =>
            Course.Title.toLowerCase().includes(query.toLowerCase()) &&
            index < 5
        )
      );
    }
  }, [query]);
  return (
    <>
      <div className="flex justify-between w-full p-2 items-center sticky top-0 z-10 bg-white">
        <h2 className="text-2xl p-4 font-bold">List of Bootcamps</h2>
        <div className="flex gap-4">
          <search>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </search>
          <Link href={"/Admin/Courses/Bootcamps/New"}>
            <Button>Add Bootcamp</Button>
          </Link>
        </div>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Bootcamp</TableCell>
            <TableCell className="text-center">Total Enrollements</TableCell>
            <TableCell className="text-center"> Rating</TableCell>
            <TableCell className="text-center">Time Range</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display?.map((Bootcamp, index) => (
            <TableRow
              onClick={() =>
                router.push("/Admin/Courses/Bootcamps/" + Bootcamp._id)
              }
              key={index}
            >
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-2 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100 rounded-lg">
                  {Bootcamp.Cover ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + Bootcamp.Cover}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>{GetAbbr(Bootcamp.Title)}</AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{Bootcamp.Title}</h4>
                  <p>{Bootcamp.Description}</p>
                </span>
              </TableCell>
              <TableCell className="text-center">
                {Bootcamp.Students.length || 0}
              </TableCell>
              <TableCell className="text-center">
                {Bootcamp.Rating || 0}
              </TableCell>
              <TableCell className="text-center">
                {moment
                  .duration(
                    moment(Bootcamp.EndingDate).diff(
                      moment(Bootcamp.StartingDate)
                    )
                  )
                  .asDays()}{" "}
                Days
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default BootcampssTable;
