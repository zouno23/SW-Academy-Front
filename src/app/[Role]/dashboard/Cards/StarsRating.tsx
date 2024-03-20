import { Star } from 'lucide-react';
import { StarHalf } from 'lucide-react';


function StarsRating({Rating}:{Rating:number}) {
    const stars = [1,2,3,4,5];
    const Stars= stars.map((star)=>{
        if (star <= Rating){
            return <Star className='size-8' fill="#FDD835" strokeWidth={0}/>;
        } else if ((star - Rating) <= .5 ){
            return <StarHalf className='size-8' fill="#FDD835" strokeWidth={0} />
        }else{return <div></div>}})
    return ( <div className='flex gap-1'>{Stars}</div> );
}

export default StarsRating;