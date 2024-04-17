import React from 'react'
import {Form} from './AddForm'

export default function Container({ Role }: { Role: string }) {
  return (
    <div className=' w-full flex justify-center content-center items-center'> 
    
         <Form rol={Role} />
        
    </div>
  )
}
