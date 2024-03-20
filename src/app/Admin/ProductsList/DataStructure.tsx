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
  teacherName:string
  email:string 
  number: string
  courses:String 
  availability: "true"|"false"
  status:true|false
}
