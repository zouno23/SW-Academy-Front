import React from 'react'

import {Input} from '@/components/ui/input'
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import PasswordInput from './PaswordInput'

export default function passform() {
  return (
    <form action="" className='container border-solid mb-10 rounded-xl border-2 w-full bg-white border-gray-200 flex flex-col h-full '>
    <span className=' text-slate-800 font-bold '>Change Your Password:</span>
    <label className='mb-4 ' > password</label>
    <PasswordInput className=' bg-slate-100 ' name='CheckPassword'/>

    <label className='mb-5  ' > check password</label>
    <PasswordInput className='mb-5 bg-slate-100 ' name='password'/>

   
    <div className='mb-5 flex content-center items-center justify-center mb '>
    <Button className=' text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95' variant="outline">change password</Button>
    </div>
    </form>
  )
}
