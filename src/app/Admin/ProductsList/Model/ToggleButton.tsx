"use client"
import React, { useState } from 'react'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import { Button } from '@/components/ui/button'
import { ToggleStatus } from '@/app/Actions/Admin/TeacherManagement'
const ToggleButton = ({ Status,id,Role }: { Status: boolean,id:string ,Role:String})=>{

    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [toggle, setToggle] = useState(Status);
    const handleToggleClick = () => {
        setToggle(!toggle);
        ToggleStatus(id,Role);
      };
  return (
    <AlertDialog>
    <AlertDialogTrigger  >
      { toggle && <Button className=' bg-slate-700 hover:bg-slate-900    md:ml-3  mt-4 '> disable</Button>}
      {!toggle && <Button className=' bg-green-700 hover:bg-green-900   md:ml-3  mt-4 '> enable</Button>}
    </AlertDialogTrigger>
    <AlertDialogContent>
      <AlertDialogHeader>
        <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
        <AlertDialogDescription>
          {/* This action cannot be undone. */}
        </AlertDialogDescription>
      </AlertDialogHeader>
      <AlertDialogFooter>
        <AlertDialogCancel>Cancel</AlertDialogCancel>
        <AlertDialogAction onClick={handleToggleClick} className=' bg-red-600 hover:bg-red-900  ' >Continue</AlertDialogAction>
      </AlertDialogFooter>
    </AlertDialogContent>
  </AlertDialog>
  )
}
export default ToggleButton;