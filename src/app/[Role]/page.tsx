import { useRouter } from "next/navigation"; 
function Page({ params }: { params: { Role: string } }) {
    localStorage.setItem("role/params", params?.Role);
    const role = localStorage.getItem("role") || ""
    const router = useRouter()
    return ( 
        <>
            {router.push(`/${params?.Role}/dashboard`)}
        </>
     );
}

export default Page;