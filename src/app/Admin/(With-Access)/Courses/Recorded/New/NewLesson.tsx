"use client"
import {
    Dialog,
    DialogClose,
    DialogContent,
    DialogFooter,
    DialogHeader,
    DialogTitle,
    DialogTrigger
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Dispatch, SetStateAction, useRef } from "react";
import { Lesson, LessonsType } from "@/lib/Types";

export const NewLesson = ({lessons,setLessons}:{lessons : LessonsType ,setLessons : Dispatch<SetStateAction <LessonsType>>}) => {
    const newLessonRef = useRef<HTMLInputElement>(null);
    const AddLesson = ()=>{
        if(lessons){
            const newLesson = { Title:newLessonRef.current?.value || ""} as Lesson
            const oldList = lessons as Lesson[]
            const newList = [...oldList ,  newLesson] as [Lesson]
            setLessons(newList)
        }
        else{
            setLessons([{ Title:newLessonRef.current?.value || ""}])
        }
    }
    return (
        <Dialog>
            <DialogTrigger asChild>
                <Button className="bg-transparent border-2  border-blue-600 text-blue-600 hover:bg-slate-50">Add  a new lesson</Button>
            </DialogTrigger>
            <DialogContent className="sm:max-w-[425px] divide-y-2">
                <DialogHeader>
                    <DialogTitle>Add new Lesson</DialogTitle>
                </DialogHeader>
                <div>
                    <div className="grid gap-4 py-4">
                        <div className=" items-center space-y-2">
                            <label htmlFor="Lesson Name" className="text-right font-medium">
                                Lesson Name
                            </label>
                            <Input
                                id="Lesson Name"
                                className="col-span-3"
                                placeholder="Add new Lesson"
                                ref={newLessonRef} />
                        </div>
                    </div>
                    <DialogFooter className="gap-2">
                        <DialogClose asChild>
                            <Button onClick={AddLesson} >Add </Button>
                        </DialogClose>
                        <DialogClose asChild>
                            <Button>Cancel</Button>
                        </DialogClose>
                    </DialogFooter>
                </div>
            </DialogContent>
        </Dialog>
    );
};
