import { Star } from 'lucide-react';
import { StarHalf } from 'lucide-react';


function StarsRating({Rating ,key}:{Rating:number, key:string}) {
    const stars = [1,2,3,4,5];
    const Stars= stars.map((star)=>{
        if (star <= Rating){
            return <Star className='size-6' fill="#FDD835" strokeWidth={0} key={key}/>;
        } else if ((star - Rating) <= .5 ){
            return <span className='relative size-6 ' key={key}>
            <Star className='size-6 absolute' fill="#EEEEEE" strokeWidth={0} key={key}/>
            <StarHalf className='size-6 absolute z-10' fill="#FDD835" strokeWidth={0} key={key+1} />
            </span>
        }else{return <Star className='size-6' fill="#EEEEEE" strokeWidth={0} key={key}/>}})
    return ( <div className='flex gap-0.5' >{Stars}</div> );
}

export default StarsRating;