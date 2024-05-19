"use client";
import { Button } from "@/components/ui/button";
import {
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useRef,
  useState,
} from "react";
import { useParams } from "next/navigation";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Camera, CameraOff, Mic, MicOff } from "lucide-react";
import { callUser, onToggleAudio, onToggleVideo } from "./Utils";
import { SocketContext } from "./CCMain";
function Lobby({
  stream,
  setStream,
  setIsInRoom,
  setPeers,
  setNewCaller,
}: {
  stream: MediaStream | null;
  setStream: Dispatch<SetStateAction<MediaStream | null>>;
  setIsInRoom: Dispatch<SetStateAction<boolean>>;
  setPeers: Dispatch<SetStateAction<any[]>>;
  setNewCaller: Dispatch<SetStateAction<any>>;
}) {
  const IOContext = useContext(SocketContext);
  const socket = IOContext?.socket;
  const MyId = IOContext?.id;
  const params = useParams();
  const MyStreamRef = useRef<HTMLVideoElement | null>(null);
  const openCamerButton = useRef<HTMLButtonElement | null>(null);
  const [V, setV] = useState(stream?.getVideoTracks()[0]?.enabled || false);
  const [M, setM] = useState(true);
  useEffect(() => {
    if (MyStreamRef.current) {
      MyStreamRef.current.srcObject = stream;
    }
  }, [stream]);

  return (
    <main className="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-950">
      <div className="mx-4 flex w-full max-w-3xl flex-col items-center gap-6 rounded-xl bg-white p-6 shadow-lg dark:bg-gray-900 sm:p-8">
        <div className="flex w-full flex-col items-center gap-2">
          <h1 className="text-2xl font-bold">Video Chat</h1>
          <p className="text-gray-500 dark:text-gray-400">
            Adjust your settings before joining the room
          </p>
        </div>
        <div className="flex w-full flex-col gap-4">
          <div className="relative aspect-video rounded-lg overflow-hidden ">
            <video
              autoPlay
              playsInline
              ref={MyStreamRef}
              className="w-full h-full object-cover rounded-md bg-muted"
              muted
            />
          </div>
          <div className="grid grid-cols-2 gap-4">
            <Button
              className="flex gap-1 items-center justify-center"
              id="toggle-camera"
              variant="outline"
              ref={openCamerButton}
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
              <span>Turn Camera{V ? " Off" : " On"}</span>
            </Button>
            <Button
              className="flex gap-1 items-center justify-center"
              id="toggle-microphone"
              variant="outline"
              onClick={() => {
                onToggleAudio(stream, setStream, V, M);
                setM(!M);
              }}
            >
              {M ? <Mic className="h-5 w-5" /> : <MicOff className="h-5 w-5" />}
              <span>{M ? "Mute" : "Open"} Microphone</span>
            </Button>
          </div>
          <Button
            disabled={!MyId ? true : false}
            className="w-full"
            onClick={() => {
              socket?.emit("check", params.RoomId);
              socket?.on("check", (users) => {
                console.log(users);
                if (users.length > 0)
                  users.map(async (element: string) => {
                    callUser(
                      element,
                      setPeers,
                      setNewCaller,
                      stream as MediaStream,
                      MyId,
                      socket
                    );
                  });
              });
              setIsInRoom(true);
            }}
          >
            Join Room
          </Button>
        </div>
        <div className="mt-auto flex w-full items-center justify-end gap-4">
          <div className="flex items-center gap-2">
            <Avatar className="h-8 w-8">
              <AvatarImage alt="@username" src="" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="text-sm font-medium">John Doe</div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Lobby;
