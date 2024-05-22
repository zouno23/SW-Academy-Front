import React from 'react'
import ProductsTable from '../../ProductsList/TeacherTable/ProductsTable'
import { teacher } from '../../ProductsList/TeacherTable/DataStructure';
import { Getliste } from '@/app/Actions/Admin/TeacherManagement';

export default async function Dash({searchParams,}:
  {
      searchParams:{
          [key: string] : string | undefined
      }
  }) {
  const {error,response} = await Getliste()
  if(error) throw error

 
  return (
    <div>
        <ProductsTable  Data={response.Result}/>
    </div>
  )
}
