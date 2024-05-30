"use client";
import { useEffect, useRef, useState } from "react";
import BasicInfo from "./NewCourseBasicInfo";
import Curriculum from "./NewCourseCurriculum";
import Media from "./NewCourseMedia";
import {
  CourseCoverMedia,
  NewCourseBasicInfoForm,
  LessonsType,
  Lesson,
} from "@/lib/Types";
import { useRouter, useSearchParams } from "next/navigation";
import { AxiosResponseType } from "@/app/Actions/AxiosTypes";
import axios from "axios";
import { Button } from "@/components/ui/button";

function CreateCourseForm({ jwt }: { jwt: string }) {
  const searchParams = useSearchParams();
  const step = searchParams.get("step") || "1";
  const save = searchParams.get("save");
  const router = useRouter();
  const [BasicInfos, setBasicInfos] = useState<NewCourseBasicInfoForm>(null);
  const [Medias, setMedias] = useState<CourseCoverMedia>(null);
  const [Lessons, setLessons] = useState<LessonsType>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  useEffect(() => {
    if (save) {
      buttonRef.current?.click();
      router.replace("/Admin/Courses/Recorded");
    }
  }, [save]);

  const saveCourse = async () => {
    try {
      const input = {
        Title: BasicInfos?.Title,
        Description: BasicInfos?.Description,
        Teacher: BasicInfos?.Teacher,
        RequiredLevel: BasicInfos?.Level,
        Field: BasicInfos?.Field,
        Lessons: Lessons,
      };
      const response: AxiosResponseType = await axios.post(
        "http://localhost:9000/Admin/Course",
        input,
        {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        }
      );
      if (response) {
        console.log(Medias);
        const formData = new FormData();
        formData.append("file", Medias?.Send || "");
        const img: AxiosResponseType = await axios.post(
          "http://localhost:9000/Admin/CourseCover",
          formData,
          {
            headers: {
              Authorization: `Bearer ${jwt}`,
              "Content-Type": "multipart/form-data",
              id: response.data.Result._id,
              CourseTitle: BasicInfos?.Title,
            },
          }
        );
        for (const item of Lessons || []) {
          let List: string[] = [];
          item?.Articles?.map(async (a) => {
            const formData = new FormData();
            formData.append("file", a);
            const result: AxiosResponseType = await axios.post(
              "http://localhost:9000/Admin/Upload",
              formData,
              {
                headers: {
                  Authorization: `Bearer ${jwt}`,
                  Teacher: BasicInfos?.Teacher,
                  CourseTitle: BasicInfos?.Title,
                  LessonTitle: item.Title,
                },
              }
            );
            if (result) {
              List.push(result.data.path);
            }
          });
          if (item) {
            item.Docs = List as [string];
          }
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      {step === "1" && (
        <BasicInfo BasicInfos={BasicInfos} setBasicInfos={setBasicInfos} />
      )}
      {step === "2" && <Media Medias={Medias} setMedias={setMedias} />}
      {step === "3" && <Curriculum lessons={Lessons} setLessons={setLessons} />}
      <Button
        className="hidden"
        onClick={async () => await saveCourse()}
        ref={buttonRef}
      />
    </>
  );
}

export default CreateCourseForm;
