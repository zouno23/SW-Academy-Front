import { Tv2 } from "lucide-react";

function Card() {
    return ( 
    <div className=' flex  justify-center items-center gap-6 rounded-xl p-4 w-full bg-blue-600/10'> 
    <Tv2 className='size-20 text-blue-600 '/>
    <h1 className='text-lg'>
    <p className='font-bold text-xl'>9</p> 
    <p>Total courses</p>
    </h1>  
</div> );
}

export default Card;