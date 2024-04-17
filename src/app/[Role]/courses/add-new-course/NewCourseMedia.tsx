"use client"
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { ChangeEvent, MouseEvent, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import React, { Dispatch, SetStateAction } from 'react';
import { CourseCoverMedia } from "@/lib/Types";
import Link from "next/link";



function Media({Medias,setMedias}:{Medias:CourseCoverMedia , setMedias : Dispatch<SetStateAction <CourseCoverMedia>>}) {
   
        const [CoverImage, setCoverImage] = useState(Medias);
        
        const fileUploadRef = useRef<HTMLInputElement>(null);

        const SubmitRef = useRef <HTMLButtonElement>(null)

        const FormRef = useRef <HTMLFormElement>(null)

        const onNext = ()=>{
            SubmitRef.current?.click()
        }

        const handleImageUpload = (event:MouseEvent) => {
            event.preventDefault();
            fileUploadRef.current?.click();
          };
     
        const uploadImageDisplay = async (event:React.ChangeEvent<HTMLInputElement>) => {
          
            if(fileUploadRef && fileUploadRef.current && fileUploadRef.current?.files && event )
            {
                    const uploadedFile =  await fileUploadRef.current?.files[0] ;
                    const cachedURL =  URL?.createObjectURL(uploadedFile);
                    setCoverImage(cachedURL);
                    const formData = new FormData()
                    formData.append('file', uploadedFile)
                }
                

        }
    return ( 
        <>
        <div className=" bg-white border w-full h-full  flex flex-col rounded-xl divide-y-2 dark:bg-slate-900 px-8 pb-8 pt-4">
            <h2 className="p-4 text-xl font-semibold">Course Media</h2>
            <form className="py-4 px-32 flex flex-col gap-4 h-full font-medium justify-center overflow-hidden items-center" 
            encType="multipart/form-data" 
            ref={FormRef}
            action={()=>{
                setMedias(CoverImage)
            }}
            >
            <label htmlFor="CoverImage" className="-mb-2">Course cover image</label>
                <Button className=" w-56 h-56 border bg-gray-200 flex items-center justify-center rounded-xl overflow-hidden hover:bg-gray-200 p-0" onClick={(e)=>handleImageUpload(e)} type="submit">
                    <Image
                    src={CoverImage || "" }
                    alt="Course Cover Image"
                    className="rounded-md object-cover"
                    width={500}
                    height={500}
                    />
                </Button>
                <Input id="CoverImage" type="file"  accept=".png, .jpg, .jpeg" className="hidden" ref={fileUploadRef} onChange={(e)=> {uploadImageDisplay(e)}}/>
                <p className="text-xs text-gray-500 pl-2 text-muted-foreground">
                    Upload your course image here. It must meet our course image quality standards to be accepted. Important guidelines: 750x440 pixels; .jpg, .jpeg,. gif, or .png. no text on the image.
                </p>
                <Button type="submit" className="hidden" ref={SubmitRef}></Button>
            </form>
        </div>
        <div className="w-full flex justify-between">
        <Link href="?step=1">
            <Button className="w-fit text-md mx-2 " onClick={onNext}>Previous</Button>
        </Link>
        <Link href="?step=3">
            <Button className="w-fit text-md mx-2 " onClick={onNext}>Next</Button>
        </Link>
        </div>
                    </>
     );
}

export default Media;