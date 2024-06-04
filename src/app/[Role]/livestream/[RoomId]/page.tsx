import { GetJWT } from "@/app/Actions/JWTmanagement";
import Meeting from "./StreamMain";

function Main() {
  const Token = GetJWT();
  return <Meeting jwt={Token || ""} />;
}

export default Main;
