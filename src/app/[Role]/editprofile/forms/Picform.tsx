/* eslint-disable react/no-unescaped-entities */
"use client";
import { useEffect, useRef, useState } from "react";
import Image, { StaticImageData } from "next/image";
import Modal from "../Image/Model";
import { Pencil } from "lucide-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Picform = ({ data }: any) => {
  const avatarUrl = useRef("http://localhost:9000/" + data.Picture);
  const [modalOpen, setModalOpen] = useState(false);
  const updateAvatar = (imgSrc: any) => {
    console.log("update achieved");
    if (avatarUrl.current) console.log("update done");
    avatarUrl.current = imgSrc;
    console.log(avatarUrl.current);
  };
  return (
    <div className="flex flex-col items-center pt-12">
      <div className="relative">
        <Avatar className="w-[150px] h-[150px] rounded-full border-2 border-gray-400 bg-slate-100 ">
          {data.Picture ? (
            <Image src={avatarUrl.current} width={600} height={600} alt="" />
          ) : (
            <AvatarFallback>Avatar</AvatarFallback>
          )}
        </Avatar>
        <button
          className="absolute -bottom-3 left-0 right-0 m-auto w-fit p-[.35rem] rounded-full bg-gray-200 hover:bg-gray-500 border border-gray-400"
          title="Change photo"
          onClick={() => setModalOpen(true)}
        >
          <Pencil className="size-4" />
        </button>
      </div>
      <h2 className=" text-black font-bold mt-6">{data.FullName}</h2>
      <p className="text-gray-500 text-xs mt-2">{data.Role}</p>
      {modalOpen && (
        <Modal
          updateAvatar={updateAvatar}
          closeModal={() => setModalOpen(false)}
        />
      )}
    </div>
  );
};

export default Picform;
