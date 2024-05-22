import { GetJWT } from "@/app/Actions/JWTmanagement";
import Login from "./AdminLogin";
import { redirect } from "next/navigation";

function mainLogin() {
  const jwt = GetJWT();
  if (jwt) {
    redirect("/Admin/Dashboard");
  }
  return (
    <>
      <Login />
    </>
  );
}

export default mainLogin;
