import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ScrollArea } from "@/components/ui/scroll-area";
import { PlusIcon, SendIcon } from "lucide-react";
import { useContext, useEffect, useRef, useState } from "react";
import { SocketContext } from "./StreamMain";
import { useParams } from "next/navigation";

type chat = { message: string; id?: string; role: "you" | "other" }[];
function Messanger() {
  const params = useParams();
  const [Texts, setTexts] = useState<chat>([]);
  const [Message, setMessage] = useState<string>("");
  const IOContext = useContext(SocketContext);
  const socket = IOContext.socket;
  const inputRef = useRef<HTMLInputElement | null>(null);
  useEffect(() => {
    socket?.on("message", ({ message, id }: any) => {
      setTexts((prev) => {
        const list = prev.filter((x) => x.id != id);
        const set = new Set(list);
        set.add({ message, id, role: "other" });
        const newValue = Array.from(set);
        return newValue;
      });
    });
  }, []);

  const onSend = () => {
    socket?.emit("message", { message: Message, roomId: params.RoomId });
    setTexts((prev) => [...prev, { message: Message || "", role: "you" }]);
    setMessage("");
  };

  return (
    <div className="bg-gray-950 w-full md:w-80 p-4 flex flex-col gap-4 overflow-hidden ">
      <div className="bg-gray-900 rounded-lg p-4 h-full flex flex-col justify-between">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-medium text-white">Chat</h3>
          <Button className="text-white" size="icon" variant="ghost">
            <PlusIcon className="w-6 h-6" />
          </Button>
        </div>
        <div className=" relative overflow-hidden  flex flex-col justify-end p-2 h-max">
          <ScrollArea className="h-full overflow-y-auto overflow-x-clip flex flex-col gap-4 scrollbar-none">
            {Texts.map((item) =>
              item.role === "other" ? (
                <div className="flex items-start gap-2 mt-3 max-w-[90%]">
                  <Avatar className="bg-white rounded-full size-fit p-2 text-xs ">
                    <AvatarImage alt={item.id} src="" />
                    <AvatarFallback>OTH</AvatarFallback>
                  </Avatar>
                  <div className="bg-gray-800 rounded-lg p-2 max-w-[80%]  overflow-clip text-wrap break-words">
                    <div className="text-white font-medium">{item.id}</div>
                    <div className="text-gray-400 ">{item.message}</div>
                  </div>
                </div>
              ) : (
                <div className="flex items-start gap-2 justify-end mt-3 max-w-[90%] ">
                  <div className="bg-blue-500 rounded-lg p-2 max-w-[80%] overflow-clip text-wrap break-words ">
                    <div className="text-white font-medium">You</div>
                    <div className="text-white text-sm w-full ">
                      {item.message}
                    </div>
                  </div>
                  <Avatar className="bg-white rounded-full size-fit p-2 text-xs  ">
                    <AvatarImage alt="You" src="" />
                    <AvatarFallback>YOU</AvatarFallback>
                  </Avatar>
                </div>
              )
            )}
          </ScrollArea>
          <form
            className="mt-4 flex items-center gap-2  bottom-0 "
            onSubmit={(e) => {
              e.preventDefault();
              if (inputRef.current) {
                inputRef.current.value = "";
              }
            }}
          >
            <Input
              ref={inputRef}
              onChange={(e) => {
                setMessage(e.target.value);
              }}
              className="flex-1 bg-gray-800 border-none focus:ring-0 focus:ring-offset-0 text-white "
              placeholder="Type your message..."
            />
            <Button
              type="submit"
              className="text-white"
              size="icon"
              variant="ghost"
              onClick={(e) => {
                onSend();
              }}
            >
              <SendIcon className="w-6 h-6" />
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Messanger;
