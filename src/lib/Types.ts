export type NewCourseBasicInfoForm ={
    Title:string,
    Field :string,
    Level :string,
    Description : string
} | null

export type CourseCoverMedia =  string |null

type Article =  File
export type Lesson =  {
    Title:string,
    Description?:string,
    Articles ?:[Article] | null
}

export type LessonsType = [Lesson|null]|null;