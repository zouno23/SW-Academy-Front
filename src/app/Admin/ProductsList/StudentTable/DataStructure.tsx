"use client"


export type Lesson = {
  courseTitle:string
  status: "Completed" | "In Progress" | "Not Started" 
  totalLectures:number 
  completedLectures:number
  progress: string
  action: string
}
export type Student = {
  _id:string
  Name:string
  email:string 
  Role:String
  numero: string
  Courses:String 
  availability: "true"|"false"
  Status:true|false
}
