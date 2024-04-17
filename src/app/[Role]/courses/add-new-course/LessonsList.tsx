"use client"
import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lesson, LessonsType } from "@/lib/Types";
import { Dispatch, SetStateAction, useRef } from "react";

export const LessonsList = ({lessons,setLessons}:{lessons : LessonsType , setLessons : Dispatch<SetStateAction <LessonsType>>}) => {
    
    const NewArticleRef = useRef<HTMLInputElement>(null)
    const handleArticleUpload = (event:any) => {
        event.preventDefault();
        NewArticleRef.current?.click();

      };
    

    const newDoc =  (lesson:Lesson , event:React.ChangeEvent<HTMLInputElement> , index:number )=>{
        if(NewArticleRef && NewArticleRef.current && NewArticleRef.current?.files && event && lessons ){
            const uploadedFile = NewArticleRef.current?.files[0]
            const doc = uploadedFile
            const prev =  lesson.Articles as File[]
            let next
            if(prev){
             next =  [...prev,doc] as  [File]
            }
            else {
             next = [doc] as [File]
            }
            lesson = {...lesson, Articles : next || null    }
            const lack = lessons?.filter((_,v)=> v!==index)  as  LessonsType;
            let newList:LessonsType=  lessons
            if (lack)
             newList = [...lack.slice(0,index) , lesson , ...lack.slice(index)] as  LessonsType
             setLessons(newList)
             return 
            //  setLessons(lessons)
        }
    }
    return (
        <Accordion type="multiple"  className="w-full space-y-2 ">
            {lessons?.map(
                (item: any, index: number) => {
                    return (
                        <AccordionItem value={"item-" + index} className="border-2 rounded-xl px-4  " key={index}>
                            <AccordionTrigger className="text-lg font-semibold " type="button">{item.Title}</AccordionTrigger>
                            <AccordionContent className=" text-base pb-5 pt-2">
                                <div className="flex gap-2 pb-2 overflow-auto">
                                {item?.Articles?.map((Article:File , i:number)=>{
                                    return (
                                        <Badge className="bg-white border border-blue-600 text-blue-600 hover:bg-gray-100" key={i}>
                                            {Article?.name}
                                        </Badge>
                                    )
                                })}
                                </div>
                                <div className="flex justify-start gap-4">
                                <Button onClick={(e)=>handleArticleUpload(e)}>
                                    Add Article
                                </Button>
                                <Input id="NewArticle" type="file" className="hidden" ref={NewArticleRef} onChange={(e)=>newDoc(item,e,index)}/>
                                <Button>
                                    Add Description
                                </Button>
                                </div>
                            </AccordionContent>
                        </AccordionItem>
                    );
                })}
        </Accordion>
    );
};
