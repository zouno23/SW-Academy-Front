"use client";
import { AddLesson, UploadDocumentation } from "@/app/Actions/CoursesActions";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
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

export function AddNewLesson({ CourseId, setLessons, Lessons }: any) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button size="sm" className="mx-4">
          Add Lesson
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[600px]">
        <DialogHeader>
          <DialogTitle>Add New Lesson</DialogTitle>
          <DialogDescription>
            Fill out the form to create a new lesson.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          action={async (FormData) => {
            const Title = FormData.get("Title") as string;
            const Description = FormData.get("Description");
            const { error, response } = await AddLesson(CourseId, {
              Title,
              Description,
            });

            if (response) {
              const files = FormData.getAll("files");
              const file = files[0] as File;
              if (file.size > 0) {
                const UploadResult = await UploadDocumentation(
                  response.Result._id,
                  CourseId,
                  FormData
                );
                if (UploadResult.error) throw new error();
              }
              setLessons([...Lessons, response.Result]);
            }
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right" htmlFor="title">
              Title
            </label>
            <Input
              className="col-span-3"
              id="title"
              name="Title"
              placeholder="Enter lesson title"
            />
          </div>
          <div className="grid grid-cols-4 items-start gap-4">
            <label className="text-right" htmlFor="description">
              Description
            </label>
            <Textarea
              className="col-span-3 min-h-[120px]"
              id="description"
              name="Description"
              placeholder="Enter lesson description"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right" htmlFor="files">
              File
            </label>
            <div className="col-span-3 flex items-center gap-2">
              <Input id="file" type="file" name="files" multiple max={5} />
            </div>
          </div>
          <DialogFooter>
            <DialogClose asChild>
              <Button type="submit">Save Lesson</Button>
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
