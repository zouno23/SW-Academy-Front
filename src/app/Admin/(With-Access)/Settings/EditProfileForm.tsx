"use client";
import { UpdateAdminData } from "@/app/Actions/Admin/AdminAuthActions";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "@/components/ui/use-toast";
import { GetAbbr } from "@/lib/utils";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
function SettingsForm({ Admin }: { Admin: any }) {
  const [ProfilePicture, setProfilePicture] = useState<string>();
  const router = useRouter();
  const picRef = useRef<HTMLInputElement | null>(null);
  const formRef = useRef<HTMLFormElement | null>(null);
  const uploadImage = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (picRef && picRef.current && picRef.current?.files && event) {
      const uploadedFile = await picRef.current?.files[0];
      const cachedURL = URL!.createObjectURL(uploadedFile);
      setProfilePicture(cachedURL);
      const formData = new FormData();
    }
  };
  return (
    <form
      ref={formRef}
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 md:p-10 space-y-8"
      action={async (FormData) => {
        const Name = FormData.get("Name");
        const Email = FormData.get("Email");
        const Password = FormData.get("Password");
        const Picture = FormData.get("Picture");
        const setter = await UpdateAdminData(FormData);
        formRef.current?.reset();
        if (setter.error) throw new Error(setter.error.message);
        router.refresh();
        toast({
          description: setter.response.message,
          variant: "verified",
          icon: "verified",
        });
      }}
    >
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div>
          <h2 className="text-lg font-semibold">Profile Picture</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update your profile picture.
          </p>
        </div>
        <div className="flex flex-col items-start gap-4">
          <div className="flex items-center gap-4">
            <Avatar className="h-20 w-20">
              {Admin?.Picture || ProfilePicture ? (
                <Image
                  src={
                    ProfilePicture || "http://localhost:9000/" + Admin?.Picture
                  }
                  alt="Profile Picture"
                  width={160}
                  height={160}
                />
              ) : (
                <AvatarFallback>{GetAbbr(Admin.Name)}</AvatarFallback>
              )}
            </Avatar>
            <Button
              variant="outline"
              type="button"
              onClick={() => picRef.current?.click()}
            >
              Change
            </Button>
          </div>
          <Input
            type="file"
            id="profile-picture"
            name="file"
            ref={picRef}
            className="hidden"
            onChange={(e) => uploadImage(e)}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div>
          <h2 className="text-lg font-semibold">Full Name</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update your full name.
          </p>
        </div>
        <div className="space-y-2">
          <Input
            name="Name"
            id="full-name"
            placeholder="Enter your full name"
            defaultValue={Admin.Name}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div>
          <h2 className="text-lg font-semibold">Email</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update your email address.
          </p>
        </div>
        <div className="space-y-2">
          <Input
            name="Email"
            id="email"
            type="email"
            placeholder="Enter your email"
            defaultValue={Admin.Email}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-[200px_1fr] gap-6">
        <div>
          <h2 className="text-lg font-semibold">Password</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Update your password.
          </p>
        </div>
        <div className="space-y-2">
          <Input
            name="Password"
            id="password"
            type="password"
            placeholder="Enter your password"
          />
        </div>
      </div>
      <div className="flex justify-end">
        <Button type="submit">Save Changes</Button>
      </div>
    </form>
  );
}

export default SettingsForm;
