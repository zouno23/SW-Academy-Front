"use client";

import { useEffect, useRef, useState } from "react";

function Test() {
  const VideoRef = useRef<HTMLVideoElement | null>(null);
  const [stream, setStream] = useState<MediaStream | null>(null);
  useEffect(() => {
    navigator.mediaDevices
      .getUserMedia({ video: false, audio: true })
      .then((stream) => {
        VideoRef.current!.srcObject = stream;
        setStream(stream);
      });
  }, []);

  const onclick = () => {
    if (stream) {
      // Turn off the camera

      const tracks = stream.getTracks();
      tracks.forEach((track) => track.stop());
      VideoRef.current!.srcObject = null;
      setStream(null);
    } else {
      // Turn on the camera
      navigator.mediaDevices
        .getUserMedia({ video: { facingMode: "user" } })
        .then((newStream) => {
          VideoRef.current!.srcObject = newStream;
          setStream(newStream);
        })
        .catch((error) => {
          console.log("Error accessing camera:", error);
        });
    }
  };
  return (
    <>
      <button id="toggleCameraButton" onClick={() => onclick()}>
        Toggle Camera
      </button>
      <video id="video" muted autoPlay ref={VideoRef} playsInline />
    </>
  );
}

export default Test;
