import React from 'react'
import Container from './Content/Container'

function page() {
  const role="Teacher"
  return (
    <div className='  absolute  h-full w-full  bg-gray-100 dark:bg-slate-800  flex justify-center content-center items-center'>
        <Container Role={role.toString()}/>

    </div>
    
  )
}

export default page