import { redirect } from "next/navigation"; 
import { GetRole } from "../Actions/RoleCookieManagement";
function Page() {
    const role = GetRole()
    return ( 
        <>
        {redirect(`/${role}/dashboard`)}
        </>
     );
}

export default Page;