"use client";
import { AddStudent } from "@/app/Actions/Admin/AdminUsersActions";
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
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function NewStudent() {
  const formRef = useRef<HTMLFormElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Student</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new student</DialogTitle>
          <DialogDescription>
            Fill the student details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          ref={formRef}
          action={async (FormData) => {
            formRef.current?.reset();
            const FullName = FormData.get("FullName") as string;
            const Email = FormData.get("Email") as string;
            const Password = FormData.get("Password") as string;
            const ApiResponse = await AddStudent({ FullName, Email, Password });
            if (ApiResponse.error) {
              toast({
                icon: "error",
                variant: "error",
                description: ApiResponse.error.message,
              });
            } else {
              router.refresh();
              toast({
                icon: "verified",
                variant: "verified",
                description: ApiResponse.response.message,
              });
              closeRef.current?.click();
            }
          }}
        >
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="FullName" className="text-right font-medium">
              Full Name
            </label>
            <Input
              required
              id="FullName"
              name="FullName"
              className="col-span-3"
              placeholder="Student's name "
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="Email" className="text-right font-medium">
              Email
            </label>
            <Input
              required
              id="Email"
              name="Email"
              type="email"
              placeholder="student@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="Password" className="text-right font-medium">
              Password
            </label>
            <Input
              required
              id="Password"
              name="Password"
              type="password"
              placeholder="********"
              className="col-span-3"
            />
          </div>
          <DialogFooter>
            <Button type="submit">Save changes</Button>
          </DialogFooter>
        </form>
        <DialogClose ref={closeRef}></DialogClose>
      </DialogContent>
    </Dialog>
  );
}

export default NewStudent;
