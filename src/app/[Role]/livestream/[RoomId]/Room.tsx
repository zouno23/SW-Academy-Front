"use client";
import { Button } from "@/components/ui/button";
import { Camera, CameraOff, Mic, MicOff, Phone, Share } from "lucide-react";
import { Stream } from "./Stream";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { SocketContext } from "./CCMain";
import { answerCall, onToggleAudio, onToggleVideo } from "./Utils";
import { cn } from "@/lib/utils";
import Messanger from "./MessagingSpace";

function Room({
  stream,
  Peers,
  setPeers,
  newCaller,
  setNewCaller,
  setStream,
}: {
  stream: MediaStream;
  Peers: any[];
  newCaller: any;
  setStream: Dispatch<SetStateAction<MediaStream | null>>;
  setPeers: Dispatch<SetStateAction<any[]>>;
  setNewCaller: Dispatch<SetStateAction<any>>;
}) {
  const [calls, setCalls] = useState<any[]>([]);
  const [callAccepted, setCallAccepted] = useState(false);
  const [streams, setstreams] = useState<MediaStream[]>([]);
  const [V, setV] = useState(stream?.getVideoTracks()[0]?.enabled || false);
  const [M, setM] = useState(stream?.getAudioTracks()[0]?.enabled || false);
  const IOContext = useContext(SocketContext);
  const socket = IOContext.socket;
  const id = IOContext.id;

  useEffect(() => {
    if (Peers) {
      Peers.map((peer) => {
        peer.peer.on("stream", (currentStream: MediaStream) => {
          setstreams((prev) => {
            const set = new Set(prev);
            set.add(currentStream);
            const newList = Array.from(set);
            return newList;
          });
        });
      });
    }
  }, [Peers, streams, calls]);

  useEffect(() => {
    if (Peers.length > 0) {
      socket?.on("callaccepted", async (data: any) => {
        setCallAccepted(true);
        const p = await Peers.filter((item) => item.id == data.id);
        const peer = p[0];

        if (peer) {
          await peer.peer.signal(data.signal);
        } else {
          console.log(Peers + " error returning the signal");
        }
      });
    }
  }, [Peers]);

  useEffect(() => {
    if (calls.length > 0 && newCaller) {
      console.log(calls, newCaller);
      answerCall(newCaller, stream, socket, id, setPeers, setNewCaller);
    }
  }, [calls, newCaller]);

  useEffect(() => {
    socket?.on("calluser", ({ from, signal }: any) => {
      console.log("user calling");
      setCalls([...calls, { id: from, signal: signal }]);
      setNewCaller({ id: from, signal: signal });
    });
  }, [socket?.connected]);

  return (
    <div key="1" className="flex flex-col md:flex-row h-screen w-full">
      <div
        className={cn(
          `flex-1 grid grid-cols-${streams.length} gap-4 p-4 bg-gray-900`,
          streams.length >= 3 && "grid-cols-2",
          streams.length > 4 && "grid-cols-3"
        )}
      >
        <div
          className="relative rounded-lg bg-gray-800 overflow-hidden"
          key={"0"}
        >
          <Stream stream={stream} />
          <div className="absolute bottom-2 left-2 bg-gray-900/50 px-2 py-1 rounded-md text-sm text-gray-300">
            {stream?.id}
          </div>
        </div>
        {streams?.map((stream: any, index: any) => {
          return (
            <div
              className="relative rounded-lg bg-gray-800 overflow-hidden"
              key={index}
            >
              <Stream stream={stream} />
              <div className="absolute bottom-2 left-2 bg-gray-900/50 px-2 py-1 rounded-md text-sm text-gray-300">
                {stream?.id}
              </div>
            </div>
          );
        })}
      </div>
      <div className="bg-gray-900 p-4 flex items-center justify-center gap-4 md:flex-col md:justify-center md:h-full">
        <Button
          className="text-white"
          size="icon"
          variant="ghost"
          onClick={() => {
            onToggleAudio(stream, setStream, V, M);
            setM(!M);
          }}
        >
          {M ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
        </Button>
        <Button
          className="text-white"
          size="icon"
          variant="ghost"
          onClick={() => {
            onToggleVideo(stream, setStream, V, M);
            setV(!V);
          }}
        >
          {V ? (
            <Camera className="h-5 w-5" />
          ) : (
            <CameraOff className="h-5 w-5" />
          )}
        </Button>
        <Button className="text-white" size="icon" variant="ghost">
          <Share className="w-6 h-6" />
        </Button>
        <Button className="text-white" size="icon" variant="ghost">
          <Phone className="w-6 h-6" />
        </Button>
      </div>
      <Messanger />
    </div>
  );
}

export default Room;
