"use client";
import { File, Trash, Video } from "lucide-react";
import AddNewDocument from "./AddNewDocument";

export function DocumentsTable({ props }: { props: any }) {
  const Docs = props.map((item: any) => {
    return item?.Documents;
  });
  return (
    <div className="p-4 md:p-6">
      <div className="w-full items-center flex justify-between p-4 md:p-6">
        <h2 className="text-lg font-semibold">Course Resources</h2>
        <AddNewDocument props={props} />
      </div>
      <div className="mt-4 grid gap-8">
        {Docs?.map((item: any) =>
          item?.map((i: any) => {
            const ext = i.split(".")[1];
            const type = ext === "mp4" ? "Video" : "File";
            const Title = i.split("\\")[4];
            return (
              <div className="flex items-center gap-2" key={i.split("")[0]}>
                {type === "Video" ? (
                  <Video className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <File className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Title}
                </span>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
