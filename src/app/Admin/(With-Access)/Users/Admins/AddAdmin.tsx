"use client";
import { AddAdmin } from "@/app/Actions/Admin/AdminUsersActions";
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
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "@/components/ui/use-toast";
import { useRouter } from "next/navigation";
import { useRef } from "react";

function NewAdmin({ role }: { role: string }) {
  const formRef = useRef<HTMLFormElement | null>(null);
  const closeRef = useRef<HTMLButtonElement | null>(null);
  const router = useRouter();

  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button>Add Admin</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Add a new admin</DialogTitle>
          <DialogDescription>
            Fill the admin details. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <form
          className="grid gap-4 py-4"
          ref={formRef}
          action={async (FormData) => {
            formRef.current?.reset();
            const FullName = FormData.get("FullName") as string;
            const Email = FormData.get("Email") as string;
            const Role = FormData.get("Role") as string;
            const Password = FormData.get("Password") as string;
            const ApiResponse = await AddAdmin({
              Name: FullName,
              Email,
              Password,
              Role,
            });
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
              placeholder="Admin's name "
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
              placeholder="admin@gmail.com"
              className="col-span-3"
            />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="Role" className="text-right font-medium">
              Role
            </label>
            <Select name="Role">
              <SelectTrigger className="col-span-3">
                <SelectValue placeholder="Role" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="Assisstant">Assisstant</SelectItem>
                <SelectItem value="Admin" disabled={role === "Assisstant"}>
                  Admin
                </SelectItem>
                <SelectItem
                  value="SuperAdmin"
                  disabled={role === ("Admin" || "Assisstant")}
                >
                  Super Admin
                </SelectItem>
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
}

export default NewAdmin;
