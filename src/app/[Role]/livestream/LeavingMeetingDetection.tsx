"use client";

import { useEffect, useState } from "react";
import { usePathname, useSearchParams, useParams } from "next/navigation";

export function LeavingMeetingDetection() {
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const [route, setRoute] = useState("");

  useEffect(() => {
    const url = `${pathname}`;
    if (
      route.split("/")[2] === "livestream" &&
      route.split("/")[3] &&
      route != url
    ) {
      location.reload();
    }
    setRoute(url);
  }, [pathname, searchParams]);

  return null;
}
