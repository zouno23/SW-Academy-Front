"use client";
import { File, Trash, Video } from "lucide-react";
import AddNewDocument from "./AddNewDocument";
import { Button } from "@/components/ui/button";
import { GetUserLocalStorage } from "@/app/Hooks/LocalStorage";

export function DocumentsTable({
  props,
  CourseId,
}: {
  props: any;
  CourseId?: string;
}) {
  const Docs = props.map((item: any) => {
    return item?.Documents;
  });

  const Role = GetUserLocalStorage()?.Role;

  const DownloadFile = (path: string, Title: string) => {
    const url = "http://localhost:9000/";
    const pdfUrl = url + path;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.target = "_blank";
    link.download = Title; // specify the filename
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };
  return (
    <div className="p-4 md:p-6">
      <div className="w-full items-center flex justify-between p-4 md:p-6">
        <h2 className="text-lg font-semibold">Course Resources</h2>
        <AddNewDocument props={props} courseId={CourseId} />
      </div>
      <div className="mt-4 grid gap-8">
        {Docs?.map((item: any) =>
          item?.map((i: any) => {
            const ext = i.split(".")[1];
            const type = ext === "mp4" ? "Video" : "File";
            const Title = i.split("\\")[4];
            return (
              <Button
                className="flex items-center justify-start gap-2 "
                key={i.split("")[0]}
                variant={"link"}
                onClick={() => DownloadFile(i, Title)}
              >
                {type === "Video" ? (
                  <Video className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <File className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Title}
                </span>
              </Button>
            );
          })
        )}
      </div>
    </div>
  );
}
