"use client"


export type Lesson = {
  courseTitle:string
  status: "Completed" | "In Progress" | "Not Started" 
  totalLectures:number 
  completedLectures:number
  progress: string
  action: string
}
export type teacher = {
  _id:string
  Name:string
  email:string 
  numero: string
  Courses:String 
  availability: "true"|"false"
  Status:true|false
}
