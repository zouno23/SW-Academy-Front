"use client";
import { Dispatch, SetStateAction, useContext } from "react";
import Peer from "simple-peer";

export const callUser = (
  id: string,
  setPeers: Dispatch<SetStateAction<any[]>>,
  setNewCaller: Dispatch<SetStateAction<any>>,
  stream: MediaStream,
  me: string,
  socket: any
) => {
  const peer = new Peer({ initiator: true, trickle: false, stream });

  peer.on("signal", (data: any) => {
    console.log(data);
    socket.emit("calluser", {
      userToCall: id,
      signal: data,
      from: me,
    });
  });
  setPeers((prevPeers) => [...prevPeers, { peer, id }]);
  setNewCaller(null);
};

export const answerCall = (
  call: any,
  stream: MediaStream,
  socket: any,
  id: string,
  setPeers: Dispatch<SetStateAction<any[]>>,
  setNewCaller: Dispatch<SetStateAction<any>>
) => {
  setNewCaller(null);
  const peer = new Peer({ initiator: false, trickle: false, stream: stream });
  peer.on("signal", async (data: any) => {
    await socket.emit("answercall", { signal: data, to: call.id, id: id });
  });
  if (call) {
    // console.log(call);
    peer.signal(call.signal);
  }
  setPeers((prevPeers) => [...prevPeers, { peer, id: call.id }]);
};

export const onToggleVideo = (
  stream: MediaStream | null,
  setStream: Dispatch<SetStateAction<MediaStream | null>>,
  V: boolean,
  M: boolean
) => {
  if (stream?.getVideoTracks()[0]) {
    const tracks = stream.getVideoTracks();
    tracks.forEach((track) => track.stop());
    if (!M) {
      setStream(null);
      return;
    }
  }

  navigator.mediaDevices
    .getUserMedia({
      video: !V,
      audio: M,
    })
    .then((newStream) => {
      setStream(newStream);
    });
};

export const onToggleAudio = (
  stream: MediaStream | null,
  setStream: Dispatch<SetStateAction<MediaStream | null>>,
  V: boolean,
  M: boolean
) => {
  if (stream?.getAudioTracks()[0]) {
    const tracks = stream.getAudioTracks();
    tracks.forEach((track) => track.stop());
  }
  if (!V) {
    setStream(null);
    return;
  } else {
    navigator.mediaDevices
      .getUserMedia({
        video: V,
        audio: !M,
      })
      .then((newStream) => {
        setStream(newStream);
      });
  }
};
