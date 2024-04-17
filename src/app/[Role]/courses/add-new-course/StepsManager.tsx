"use client"
import {  useState } from "react";
import BasicInfo from "./NewCourseBasicInfo";
import Curriculum from "./NewCourseCurriculum";
import Media from "./NewCourseMedia";
import p from "@/../public/next.svg"
import { CourseCoverMedia, NewCourseBasicInfoForm ,LessonsType } from '@/lib/Types';
import { useSearchParams } from "next/navigation";


function CreateCourseForm() {
    const searchParams = useSearchParams()
    const step = searchParams.get( 'step' ) || "1";
    const [BasicInfos , setBasicInfos]  = useState <NewCourseBasicInfoForm> (null);
    const [Medias , setMedias] = useState <CourseCoverMedia> (p);
    const [Lessons , setLessons ]= useState <LessonsType> (null);
    return ( 
        <>
        {step ==="1" && <BasicInfo BasicInfos={BasicInfos} setBasicInfos={setBasicInfos}/>}
        {step ==="2" && <Media Medias={Medias} setMedias={setMedias}/>}
        {step ==="3" && <Curriculum lessons={Lessons} setLessons={setLessons}/>}
        </>
     );
}

export default CreateCourseForm;