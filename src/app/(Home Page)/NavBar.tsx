import Link from "next/link";
import Image from "next/image";
import Logo from "@/../public/logo.svg";
import { Button } from "@/components/ui/button";
function NavBar() {
  return (
    <header className="px-4 lg:px-6 h-14 flex items-center bg-slate-50/100 rounded-xl dark:bg-slate-900 overflow-x-auto">
      <Link
        href="#"
        className="flex items-center justify-center"
        prefetch={false}
      >
        <Image src={Logo} alt="SW Academy" className="h-10 w-full" />
      </Link>
      <nav className="ml-auto flex gap-4 sm:gap-6">
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"link"}>Courses</Button>
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"link"}>Pricing</Button>
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"link"}>About</Button>
        </Link>
        <Link
          href="#"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"link"}>Contact</Button>
        </Link>
        <Link
          href="/signup"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"outline"}>Sign Up</Button>
        </Link>
        <Link
          href="login"
          className="text-sm font-medium hover:underline underline-offset-4"
          prefetch={false}
        >
          <Button variant={"outline"}>Login</Button>
        </Link>
      </nav>
    </header>
  );
}

export default NavBar;
