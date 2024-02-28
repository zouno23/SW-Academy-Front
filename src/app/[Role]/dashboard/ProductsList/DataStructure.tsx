"use client"


export type Lesson = {
  courseTitle:string
  status: "Completed" | "In Progress" | "Not Started" 
  totalLectures:number 
  completedLectures:number
  progress: string
  action: string
}

