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
import NewAdmin from "./AddAdmin";
import { Input } from "@/components/ui/input";
import { useEffect, useState } from "react";

type Admins = {
  Name: string;
  _id: string;
  Status: boolean;
  Email: string;
  Role: string;
  Picture: string;
}[];
function AdminsTable({ Admins, role }: { Admins: Admins; role: string }) {
  const [Display, setDisplay] = useState(Admins);
  const [query, setQuery] = useState("");
  useEffect(() => {
    if (query == "") {
      setDisplay(Admins);
    } else {
      setDisplay(
        Admins.filter(
          (admin, index) =>
            admin.Name.toLowerCase().includes(query.toLowerCase()) && index < 5
        )
      );
    }
  }, [query]);
  return (
    <>
      <div className="flex justify-between w-full  p-2 items-center sticky top-0 z-10 bg-white">
        <h2 className="text-2xl p-4 font-bold">List of Admins</h2>
        <div className="flex gap-4">
          <search>
            <Input
              placeholder="Search"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </search>
          <NewAdmin role={role} />
        </div>
      </div>
      <Table className=" h-full">
        <TableHeader>
          <TableRow>
            <TableCell>Admin</TableCell>
            <TableCell className="text-center">Email</TableCell>
            <TableCell className="text-center"> Role</TableCell>
            <TableCell className="text-center">Status</TableCell>
          </TableRow>
        </TableHeader>
        <TableBody>
          {Display.map((Admin) => (
            <TableRow>
              <TableCell className="flex gap-8 items-center  justify-start text-pretty px-2 ">
                <Avatar className="size-20 bg-slate-100 border border-slate-100">
                  {Admin.Picture ? (
                    <Image
                      width={180}
                      height={180}
                      src={"http://localhost:9000/" + Admin.Picture}
                      alt="aziz"
                    />
                  ) : (
                    <AvatarFallback>{GetAbbr(Admin.Name)}</AvatarFallback>
                  )}
                </Avatar>
                <span>
                  <h4 className="text-xl font-semibold">{Admin.Name}</h4>
                </span>
              </TableCell>
              <TableCell className="text-center">{Admin.Email}</TableCell>
              <TableCell className="text-center">{Admin.Role}</TableCell>
              <TableCell className="text-center">
                {Admin.Status ? "Active" : "Inactive"}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </>
  );
}

export default AdminsTable;
