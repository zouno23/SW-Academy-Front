"use client";
import React, {
  useState,
  useRef,
  useEffect,
  useContext,
  createContext,
} from "react";
import { io } from "socket.io-client";
import { useParams } from "next/navigation";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import Lobby from "./Lobby";
import Room from "./Room";

export const SocketContext = createContext({ socket: null, id: "" });
const Meeting = ({ jwt }: { jwt: string }) => {
  const [stream, setStream] = useState<MediaStream | null>(null);
  const [isInRomm, setIsInRoom] = useState(false);
  const [Peers, setPeers] = useState<any[]>([]);
  const [newCaller, setNewCaller] = useState<any>(null);
  const [socket, setSocket] = useState<any>();

  const connect = async () => {
    let s = await io("http://localhost:9000/", { auth: { token: jwt } });
    if (s) {
      setSocket(s);
    }
  };
  useEffect(() => {
    if (!socket) {
      connect();
    }
  }, [socket]);

  useEffect(() => {
    navigator?.mediaDevices
      ?.getUserMedia({ video: false, audio: true })
      .then((stream) => {
        setStream(stream);
      });
  }, []);

  return (
    <SocketContext.Provider value={{ socket: socket, id: socket?.id }}>
      {isInRomm ? (
        <Room
          stream={stream as MediaStream}
          Peers={Peers}
          setPeers={setPeers}
          newCaller={newCaller}
          setNewCaller={setNewCaller}
          setStream={setStream}
        />
      ) : (
        <Lobby
          stream={stream}
          setIsInRoom={setIsInRoom}
          setStream={setStream}
          setPeers={setPeers}
          setNewCaller={setNewCaller}
        />
      )}
    </SocketContext.Provider>
  );
};

export default Meeting;
