import { GetCardsNumbers } from "@/app/Actions/DashboardActions";
import Card from "./Card";

async function DashboardCards() {
    const {error,response} = await GetCardsNumbers()
    if(error) throw error
    const items =[
        {index:1, title:"Total Bootcamps",stats:response?.Result.BootCamps},
        {index:2,title:"Complete Courses" ,stats:response?.Result.Courses},
        {index:3,title:"Achieved Certificates",stats:response?.Result.Certificates}
    ]
    return ( <div className='flex justify-between gap-8'>
    {items.map((index )=>
    <Card key={`${index.index}`} title={index.title}  index={index.index} stats={index.stats}/>)}
    </div> );
}

export default DashboardCards;
