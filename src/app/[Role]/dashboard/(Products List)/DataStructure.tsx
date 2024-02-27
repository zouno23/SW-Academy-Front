"use client"

import { ColumnDef } from "@tanstack/react-table"

export type Lesson = {
  courseTitle:string
  status: "Completed" | "In Progress" | "Not Started" 
  totalLectures:number 
  completedLectures:number
  progress: string
  action: string
}

export const columns: ColumnDef<Lesson>[] = [
  {
    accessorKey: "courseTitle",
    header: "Course Title",
  },
  {
    accessorKey: "status",
    header: "Status",
  },
  {
    accessorKey: "totalLectures",
    header: "Total Lectures",
  },
  {
    accessorKey: "completedLectures",
    header: "Completed Lectures",
  },
  {
    accessorKey: "progress",
    header: "Progress",
  },
  {
    accessorKey: "action",
    header: "Action",
  },
]
