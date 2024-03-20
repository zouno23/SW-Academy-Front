import Link from "next/link";
import { Button } from "@/components/ui/button";

function Home() {
  const theme = "dark"
 
  return (
    <div className="h-screen  flex justify-center gap-10 items-center" >
      <Button>
      <Link
        href="/login" >
        login
      </Link>
      </Button>
      <Button>
      <Link
        href="/signup"
      >
        signup
      </Link>
      </Button>
      
     
    </div>
  );
}

export default Home;
