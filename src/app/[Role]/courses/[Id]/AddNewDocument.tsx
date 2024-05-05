"use client";
import { UploadDocumentation } from "@/app/Actions/CoursesActions";
import { Button } from "@/components/ui/button";

import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useParams, useRouter } from "next/navigation";

function AddNewDocument({ props }: any) {
  const params = useParams();
  const CourseId = params.Id as string;
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="mx-4">
          Add Document
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Document</DialogTitle>
          <DialogDescription>
            Fill out the form to add a new Document to a specific lesson.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          action={async (FormData) => {
            const files = FormData.getAll("files");
            const file = files[0] as File;
            const Lesson = FormData.get("Lesson") as string;
            if (file?.size > 0 && file) {
              const UploadResult = await UploadDocumentation(
                Lesson,
                CourseId,
                FormData
              );
              if (UploadResult.error) throw new Error();
              router.refresh();
            }
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4 w-full">
            <label htmlFor="Lesson" className="text-right">
              Lesson Name
            </label>
            <div className="col-span-3 flex items-center gap-2">
              <Select name="Lesson">
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a fruit" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    {props.map((item: any) => {
                      return (
                        <SelectItem
                          textValue={item.Title}
                          value={item._id}
                          key={item._id}
                        >
                          {item.Title}
                        </SelectItem>
                      );
                    })}
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="Doc" className="text-right">
              Documents
            </label>
            <div className="col-span-3 flex items-center gap-2">
              <Input type="file" multiple max={5} name="files" />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Add</Button>
            </DialogClose>
            <DialogClose asChild>
              <Button variant="outline">Cancel</Button>
            </DialogClose>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}

export default AddNewDocument;
