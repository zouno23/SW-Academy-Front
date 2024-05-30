export type NewCourseBasicInfoForm ={
    Title:string,
    Field :string,
    Level :string,
    Description : string
    Teacher?:any
} | null

export type CourseCoverMedia =   {Display?:string |null,Send?:File|null}| null

type Article =  File | string
export type Lesson =  {
    Title:string,
    Description?:string,
    Articles ?:[Article] | null,
    Docs?: string[]
}

export type LessonsType = [Lesson|null]|null;