import Link from "next/link";
import { Button } from "@/components/ui/button";

function Home() {
  return (
    <div className="h-screen  flex justify-center gap-10 items-center">
      <Link href="/login">
        <Button>login</Button>
      </Link>
      <Link href="/signup">
        <Button>signup</Button>
      </Link>
    </div>
  );
}

export default Home;
