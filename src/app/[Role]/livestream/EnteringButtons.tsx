import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function JoinMeeting() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Join Meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Join a Meeting</DialogTitle>
          <DialogDescription>
            Enter the Meeting's secret code to join
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right" htmlFor="secret code">
              Code
            </label>
            <Input
              className="col-span-3 "
              id="secret code"
              placeholder="********"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Join Meeting</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
export function StartMeeting() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="">Start Meeting</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Start a New Meeting</DialogTitle>
          <DialogDescription>
            Invite your team members to join the meeting.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label className="text-right" htmlFor="email">
              Email
            </label>
            <Textarea
              className="col-span-3 min-h-[100px]"
              id="email"
              placeholder="Enter email addresses separated by commas to invite people"
            />
          </div>
        </div>
        <DialogFooter>
          <Button>Start Meeting</Button>
          <div>
            <Button variant="outline">Cancel</Button>
          </div>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
