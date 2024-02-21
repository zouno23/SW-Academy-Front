import Link from "next/link";

function Dashboard() {
    return (
  <div className=" font-bold h-screen bg-orange-600 flex gap-5 flex-col justify-center items-center">
    This is the dashboard
    
    <Link
        href="/"
        className=" text-white bg-gradient-to-br from-blue-500/90 to-blue-700 hover:bg-blue-900 focus:ring-4 focus:outline-none  font-medium rounded-lg text-sm w-9/12 sm:w-auto px-5 py-2.5 text-center"
      >
        Home
      </Link>
    </div>
    )
  }
  
  export default Dashboard;
  