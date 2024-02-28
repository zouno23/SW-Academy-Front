import { cn } from '@/lib/utils';
import { ClipboardCheck, Tv2, Award  } from 'lucide-react';
import { useState } from 'react';

function Card( {index , title,stats}:{index:number, title:string,stats:number}) {
    const card =()=>{
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
    return ( 
    <div className={cn(' flex  justify-center items-center gap-6 rounded-xl p-4 w-full bg-white dark:bg-slate-900 hover:bg-blue-100/70') }> 
    {card()}
    <h1 className='text-lg'>
    <p className='font-bold text-xl'>{stats}</p> 
    <p>{title}</p>
    </h1>  
</div> );
}

export default Card;
