import Card from "./Card";

function DashboardCards() {
const items = [1,2,3]

    return ( <div className='flex justify-between gap-8'>
    {items.map((index)=>
    <Card/>
    )}</div> );
}

export default DashboardCards;