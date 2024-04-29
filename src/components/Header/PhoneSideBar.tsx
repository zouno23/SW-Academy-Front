import SideBar from "../../app/[Role]/SideBar/SideBar";
import OpenBarButton from "./OpenBarButton";

function PhoneSideBar({
  searchParams,
}: {
  searchParams?: { [key: string]: string | string[] | undefined };
}) {
  const sideBarState = searchParams?.sidebar || "false";
  return (
    <>
      <OpenBarButton />
      {sideBarState === "true" && <SideBar parent="header" />}
    </>
  );
}

export default PhoneSideBar;
