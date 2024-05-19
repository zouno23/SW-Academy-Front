"use client";

import { useEffect, useRef, useState } from "react";

export const Stream = ({ stream }: { stream: MediaStream }) => {
  const videoRef = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.srcObject = stream;
      console.log(stream, videoRef.current.srcObject);
    }
  }, [stream]);

  return (
    <video
      ref={videoRef}
      autoPlay
      playsInline
      className="w-full h-full object-cover rounded-md bg-muted"
    ></video>
  );
};
