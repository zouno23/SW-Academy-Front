import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import React, { useRef } from 'react'
import { teacher } from '../TeacherTable/DataStructure';
import { Star } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { useRouter } from "next/navigation";
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

import { DeletePicture, EditTeacher, ToggleStatus } from '@/app/Actions/Admin/TeacherManagement';
import ToggleButton from './ToggleButton';
import { Student } from '../StudentTable/DataStructure';

export default function ContentEdit({Data}: {Data:any }) {


  const router=useRouter()
  const [formData, setFormData] = React.useState(Data);
  const FormRef = useRef<HTMLFormElement>(null);
  const { toast } = useToast();

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData: any) => ({ ...prevFormData, [name]: value }));
  };
  const handleDeleteClick = () => {
    console.log("ID à supprimer :", Data._id);
    DeletePicture(Data._id);
  };
  // const handleStatusClick = () => {
  //   ToggleStatus(Data._id);
  // };
  return (
    <div className='flex  flex-col w-11/12  bg-white border-2 rounded-lg   mb-10 border-solid border-gray-200  h-full'>
       <div className='flex flex-col sm:flex-col md:flex-row items-center content-center   mx-9 justify-between '>
            <div className='flex flex-col md:flex-row items-center '>
                <Avatar className="w-[80px]  mt-9 h-[80px] rounded-full  border-2 border-gray-400">
                <AvatarImage src={"https://avatars.githubusercontent.com/u/124599?v=4"} />
                <AvatarFallback>Avatar</AvatarFallback>
               </Avatar>
               <div className='flex mt-4 flex-col justify-center items-center '>
                  <span className=' text-slate-800 capitalizea'>{Data.Name} </span>
                  {/* reception data */}
                  <div className='flex  '>
                    <span className='text-slate-800  md:ml-4 '>4.7</span>
                    <Star size={18} color="#FDA403" className='ml-1' strokeWidth={2.75} />
                  </div>
                </div>
            </div>
            <div className='flex flex-col   items-center md:flex md:flex-row'>
           
           <AlertDialog>
              <AlertDialogTrigger ><Button className=' bg-red-600 hover:bg-red-900 mt-4 ' >delete picture </Button></AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This action cannot be undone. This will permanently delete your account
                    and remove your data from our servers.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleDeleteClick} className=' bg-red-600 hover:bg-red-900  ' >Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
            <ToggleButton Status={Data.Status} id={Data._id} Role={Data.Role}/>
           {/* <AlertDialog>
              <AlertDialogTrigger >
                { !Data.Status && <Button className=' bg-slate-700 hover:bg-slate-900    ml-3  mt-4 '> disable</Button>}
                {Data.Status && <Button className=' bg-green-700 hover:bg-green-900   ml-3  mt-4 '> enable</Button>}
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Are you absolutely sure?</AlertDialogTitle>
                  <AlertDialogDescription>
                    // /* This action cannot be undone. 
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Cancel</AlertDialogCancel>
                  <AlertDialogAction onClick={handleStatusClick} className=' bg-red-600 hover:bg-red-900  ' >Continue</AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog> */}
            </div>
        </div> 
        <form  className='container  flex pb-5 mt-5 border-2 rounded-lg  flex-col  border-solid   bg-white border-gray-200  h-full'
        

          ref={FormRef}
          // eslint-disable-next-line react/jsx-no-duplicate-props
          action={
            async (FormData)=>{
            FormRef.current?.reset();

            const {error,response} = await EditTeacher(FormData);
            if(response){
              //  router.push("/Admin/Dash")
            }
            else if (error){
              toast({
                variant:"error",
                description:`${error?.message}`,
                icon:"error"
              })
            }
            else{
              toast({
                variant:"error",
                description:`Sorry we encountered a server error`,
                icon:"error"
              })
            }
          }}
          >
              <label className=' my-4 font-semibold capitalize' > User Id</label>
              
              <Input name="id"  type='text'className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' value={Data._id} placeholder='FullName'/>

              <label className=' mb-4 font-semibold capitalize' > Full name</label>
              <Input name="teacherName" onChange={handleInputChange} type='text'className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' value={formData.teacherName} placeholder='FullName'/>
              
              <label className='mb-4 font-semibold capitalize' > Email</label>
              <Input name="email" onChange={handleInputChange} className='mb-4 bg-slate-100 focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' value={formData.email} type='email' placeholder='E-mail'/>

              <label className='mb-5 font-semibold capitalize' > phone number</label>
              
              <Input name='numero' className='mb-5 bg-slate-100  focus-visible:ring-offset-0 focus-visible:ring-[#2752B8]' value={formData.numero} 
              onChange={handleInputChange} type='text' placeholder='## ### ###'/>
              <div className='flex content-center items-center justify-center '>
              <Button className=' text-white font-medium text-sm bg-blue-600 hover:bg-blue-600/95' variant="outline">
              Button
              </Button>
              </div>

        </form>
        
   
    
    
    </div>
  )
}
