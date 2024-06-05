"use client";
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
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  BarChartIcon,
  BookIcon,
  ClipboardListIcon,
  UserIcon,
} from "lucide-react";
import { toast } from "@/components/ui/use-toast";
import { AddStudent, AddTeacher } from "@/app/Actions/Admin/AdminUsersActions";
import { useRouter } from "next/navigation";
import { useRef } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

function QuickActions() {
  const router = useRouter();
  return (
    <Card className="bg-white rounded-2xl p-4 dark:slate-900 border col-span-1 space-y-4 shadow-md ">
      <CardHeader>
        <CardTitle>Quick Actions</CardTitle>
        <p className="text-md text-gray-500 dark:text-gray-400">
          Commonly used actions for managing the platform.
        </p>
      </CardHeader>
      <CardContent className="grid gap-4 grid-cols-1 p-4 *:w-full  place-items-center ">
        <AddUser />
        <Button
          size="sm"
          variant="outline"
          onClick={() => {
            router.push("/Admin/Courses/Recorded/New");
          }}
        >
          <BookIcon className="mr-2 h-4 w-4" />
          Add Course
        </Button>
        <Button size="sm" variant="outline">
          <ClipboardListIcon className="mr-2 h-4 w-4" />
          Manage Enrollments
        </Button>
        <Button size="sm" variant="outline">
          <BarChartIcon className="mr-2 h-4 w-4" />
          View Analytics
        </Button>
      </CardContent>
    </Card>
  );
}

export default QuickActions;

const AddUser = () => {
  const formRef = useRef<HTMLFormElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant={"outline"} size="sm">
          <UserIcon className="mr-2 h-4 w-4" />
          Add User
        </Button>
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
            const FullName = FormData.get("FullName") as string;
            const Email = FormData.get("Email") as string;
            const Password = FormData.get("Password") as string;
            const Role = (FormData.get("Role") as string) || "Student";
            let ApiResponse;
            if (Role === "Student") {
              ApiResponse = await AddStudent({ FullName, Email, Password });
            } else if (Role === "Teacher") {
              ApiResponse = await AddTeacher({ FullName, Email, Password });
            } else {
              throw new Error("Error while choosing the User Role");
            }
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
              placeholder="User's name "
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
              placeholder="User@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="Email" className="text-right font-medium">
              Email
            </label>
            <Select name="Role">
              <SelectTrigger className="col-span-3">
                <SelectValue defaultValue={"Student"} placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="Teacher">Teacher</SelectItem>
                  <SelectItem value="Student">Student</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
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
};
