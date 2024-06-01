"use client";
import { Input } from "@/components/ui/input";
import { CourseCoverMedia } from "@/lib/Types";
import Image from "next/image";
import { useRef, useState } from "react";
import p from "@/../public/next.svg";
import { Avatar } from "@/components/ui/avatar";

function BootcampCover() {
  const [image, setImage] = useState<CourseCoverMedia>(null);
  const [ImageDisplay, setImageDisplay] = useState(image?.Display || p);
  const fileUploadRef = useRef<HTMLInputElement>(null);

  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (
      fileUploadRef &&
      fileUploadRef.current &&
      fileUploadRef.current?.files &&
      event
    ) {
      const uploadedFile = await fileUploadRef.current?.files[0];
      const cachedURL = URL!.createObjectURL(uploadedFile);
      setImageDisplay(cachedURL);
      const formData = new FormData();
      formData.append("file", uploadedFile);
      setImage({ Send: uploadedFile, Display: cachedURL });
    }
  };
  return (
    <div className="grid text-left gap-3  place-items-center">
      <label htmlFor="Cover" className="flex w-full justify-start">
        Select the BootCamp Cover Picture
      </label>
      <Input
        type="file"
        name="Cover"
        accept=".png, .jpg, .jpeg"
        ref={fileUploadRef}
        className="hidden"
        onChange={(e) => uploadImage(e)}
      />
      <Avatar className="size-40 rounded-lg">
        <Image
          onClick={() => fileUploadRef.current?.click()}
          src={ImageDisplay}
          alt="Course Cover Image"
          className="rounded-md object-fit border-2"
          width={500}
          height={500}
        />
      </Avatar>
      <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
        Upload your bootcamp image here. It must meet our bootcamp image quality
        standards to be accepted. Important guidelines: 750x440 pixels; .jpg,
        .jpeg,. gif, or .png. no text on the image.
      </p>
    </div>
  );
}

export default BootcampCover;
