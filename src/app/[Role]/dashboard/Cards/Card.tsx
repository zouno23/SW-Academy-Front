import { GetRole } from '@/app/Actions/RoleCookieManagement';
import { cn } from '@/lib/utils';
import { ClipboardCheck, Tv2, Award, Star,BookText ,MonitorUp } from 'lucide-react';

function Card( {index , title,stats}:{index:number, title:string,stats:number}) {
    const cardStudent =()=>{
        switch (index) {
            case 1:{ 
               
                return <Tv2 className="text-blue-600 size-20 dark:text-slate-50" />};
            case 3: 
            {
            return <Award className="text-blue-600 size-20 dark:text-slate-50"  />};
            case 2: 
            {
            return <ClipboardCheck className="text-blue-600 size-20 dark:text-slate-50"  />};
            default :return null;
        }
    }
    const cardTeacher = ()=>{
        switch (index) {
            case 1:{
                return <Star className='text-blue-600 size-20 ' fill='#2563eb'/> ;
            }
            case 3: 
            {
            return <MonitorUp className="text-blue-600 size-20 dark:text-slate-50"  />};
            case 2: 
            {
            return <BookText className="text-blue-600 size-20 dark:text-slate-50"  />};
            default :return null;
        }
    }
    const role = GetRole()
    return ( 
        <>
    
    <div className={cn(' flex  justify-center items-center gap-6 rounded-xl p-4 w-full bg-white dark:bg-slate-900 hover:bg-blue-100/70') }> 
    {role==="Teacher"?cardTeacher():cardStudent()}
    <h1 className='text-lg text-center'>
    <p className='font-bold text-xl'>{stats}</p> 
    <p>{title}</p>
    </h1>  
    </div>
    </>
);
}

export default Card;
