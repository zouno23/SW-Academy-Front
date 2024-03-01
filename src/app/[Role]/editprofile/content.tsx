import React from 'react'
import Form from "./forms/form";
import Picform from './forms/Picform';
import  Title  from './Head/title';
import 'react-image-crop/dist/ReactCrop.css'
import { Separator } from '@/components/ui/separator';

function content() {
  return (
    <div className='   overflow-auto relative rounded-2xl my-5 pb-12  border-solid h-full  border-2 w-full bg-white border-gray-100'>

       
       <Title/>
        <Picform/>
       
     <div className='  flex justify-center'>
     <Form/>

     </div>

       

    </div>
  )
}

export default content