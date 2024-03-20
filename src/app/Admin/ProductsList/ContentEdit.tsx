import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React from 'react'
import { teacher } from './DataStructure';
import { Star } from 'lucide-react';

export default function ContentEdit({Data}: {Data:teacher }) {
  return (
    <div className='flex  flex-col w-11/12  bg-white border-2 rounded-lg   mb-10 border-solid border-gray-200  h-full'>
       <div className='flex flex-col sm:flex-col md:flex-row items-center content-center   mx-9 justify-between '>
            <div className='flex flex-col md:flex-row items-center '>
                <Avatar className="w-[80px]  mt-9 h-[80px] rounded-full  border-2 border-gray-400">
                <AvatarImage src={"https://avatars.githubusercontent.com/u/124599?v=4"} />
                <AvatarFallback>Avatar</AvatarFallback>
               </Avatar>
               <div className='flex mt-6 flex-col '>
                  <span className='mx-2 text-slate-800 capitalizea'>{Data.teacherName}</span>
                  {/* reception data */}
                  <div className='flex '>
                    <span className='text-slate-800 ml-4  '>4.7</span>
                    <Star size={18} color="#FDA403" className='ml-1' strokeWidth={2.75} />
                  </div>
                </div>
            </div>
            <div>
           <Button className=' bg-red-600 hover:bg-red-900 mt-4 '>delete picture </Button>
           { Data.status && <Button className=' bg-slate-700 hover:bg-slate-900    ml-3  mt-4 '> disable</Button>}
           {!Data.status && <Button className=' bg-green-700 hover:bg-green-900   ml-3  mt-4 '> enable</Button>}

            </div>
        </div> 
        <form  className='container  flex pb-5 mt-5 border-2 rounded-lg  flex-col  border-solid   bg-white border-gray-200  h-full'>
            
            <label className=' my-4 font-semibold capitalize' > Full name</label>
            <Input name="FullName" type='text'className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' value={Data.teacherName} placeholder='FullName'/>
            
            <label className='mb-4 font-semibold capitalize' > Email</label>
            <Input name="email"  className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' type='email' placeholder='E-mail'/>

            <label className='mb-5 font-semibold capitalize' > phone number</label>
            
            <Input className='mb-5 bg-slate-100  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]'   type='text' placeholder='## ### ###'/>
            <div className='flex content-center items-center justify-center '>
            <Button className=' text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95' variant="outline">
            Button
            </Button>
            </div>

        </form>
        
   
    
    
    </div>
  )
}
