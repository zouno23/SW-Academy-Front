// "use client"
// import { Star } from 'lucide-react';
// import { StarHalf } from 'lucide-react';
// import { Button } from './ui/button';
// import { useState } from 'react';


// function StarsRatingButton({Rating}:{Rating:number}) {
//     const [color, setColor]=useState(
//         ["#EEEEEE","#EEEEEE","#EEEEEE","#EEEEEE","#EEEEEE"])
//     // const mouseOver = (number:number )=>{
//     //     switch(number){
//     //         case 1 : setColor({ ...color, 1:"#FDD835" });
//     //         case 2 : setColor({ ...color, 1:"#FDD835" , 2:"#FDD835"})
//     //         case 3 : setColor({ ...color, 1:"#FDD835" , 2:"#FDD835" , 3:"#FDD835"})
//     //         case 4 : setColor({ ...color, 1:"#FDD835" , 2:"#FDD835" , 3:"#FDD835" , 4:"#FDD835"})
//     //         case 5 : setColor({ 1:"#FDD835" , 2:"#FDD835" , 3:"#FDD835" , 4:"#FDD835" , 5:"#FDD835"})
//     //     }
//     // }
//     // const mouseOut = (number:number )=>{
//     //     switch(number){
//     //         case 1 : setColor({ ...color, 1:"#EEEEEE", 2:"#EEEEEE" , 3:"#EEEEEE" , 4:"#EEEEEE" , 5:"#EEEEEE" });
//     //         case 2 : setColor({ ...color, 2:"#EEEEEE" , 3:"#EEEEEE" , 4:"#EEEEEE" , 5:"#EEEEEE"})
//     //         case 3 : setColor({ ...color , 3:"#EEEEEE" , 4:"#EEEEEE" , 5:"#EEEEEE"})
//     //         case 4 : setColor({ ...color , 4:"#EEEEEE", 5:"#EEEEEE"})
//     //         case 5 : setColor({ ...color, 5:"#EEEEEE"})
//     //     }
//     // }
//     const stars = [1,2,3,4,5];
//     const Stars= stars.map((star:number)=>{
//         let fill = color[star] || "#EEEEEE"
//             return <Button className='size-fit p-0' variant="ghost"><Star onMouseEnter={()=>setColor(["#FDD835"])} onMouseLeave={()=>setColor(["#EEEEEE"])} className='size-6' fill={fill} strokeWidth={0}/></Button>})
//     return ( <div className='flex gap-0.5'>{Stars}</div> );
// }

// export default StarsRatingButton;