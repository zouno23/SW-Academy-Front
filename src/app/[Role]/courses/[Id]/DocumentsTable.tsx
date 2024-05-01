import { Button } from "@/components/ui/button";
import { File, Trash, Video } from "lucide-react";
const Documents = [
  { Title: "Introduction to HTML.pdf", type: "File" },
  { Title: "CSS Fundamentals.pdf", type: "File" },
  { Title: "JavaScript Basics.mp4", type: "Video" },
  { Title: " Responsive Web Design.pdf", type: "File" },
];
export function DocumentsTable({ props }: { props: any }) {
  const Docs = props.map((item: any) => {
    return item?.Documents;
  });
  return (
    <div className="p-4 md:p-6">
      <h2 className="text-lg font-semibold">Course Resources</h2>
      <div className="mt-4 grid gap-4">
        {Docs?.map((item: any) =>
          item?.map((i: any) => {
            const ext = i.split(".")[1];
            const type = ext === "mp4" ? "Video" : "File";
            const Title = i.split("\\")[4];
            return (
              <div className="flex items-center gap-2">
                {type === "Video" ? (
                  <Video className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                ) : (
                  <File className="h-5 w-5 text-gray-500 dark:text-gray-400" />
                )}
                <span className="text-sm text-gray-500 dark:text-gray-400">
                  {Title}
                </span>
                <div className="ml-auto flex items-center gap-2">
                  <Button size="sm" variant="ghost">
                    <Trash className="h-4 w-4" />
                    <span className="sr-only">Delete</span>
                  </Button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
}
