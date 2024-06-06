import { GetJWT } from "@/app/Actions/JWTmanagement";
import Meeting from "./StreamMain";
import { CheckMeeting } from "@/app/Actions/MeetingActions";
import { redirect } from "next/navigation";
import { GetRole } from "@/app/Actions/RoleCookieManagement";

async function Main({
  params,
  searchParams,
}: {
  params: { slug: string } | any;
  searchParams: {
    [key: string]: string | undefined;
  };
}) {
  const Token = GetJWT();
  const Role = GetRole();
  const secretCode = new FormData();
  secretCode.append("Secret Code", params.RoomId);
  const VerifMeet = await CheckMeeting(secretCode);
  if (VerifMeet.error) {
    redirect("/" + Role + "/livestream");
  }
  return <Meeting jwt={Token || ""} />;
}

export default Main;
