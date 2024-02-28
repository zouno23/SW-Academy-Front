import { Button } from "@/components/ui/button";
import ProductsHeader from "./ProductsHeader";
import SingleProduct from "./SingleProduct";
import { Counter } from "./counter";
import { Data } from "./Data";
import { redirect } from "next/navigation";
import { GetProducts } from "@/app/Actions/DashboardActions";
async function ProductsTable( 
    {searchParams,}:
    {
        searchParams:{
            [key: string] : string | undefined
        }
    }) 
    {
    
    // const {error, response}= await GetProducts()
    // if(error) throw error;

    let ListePage = searchParams.count || "1"

    const Lessons = Data

    if(parseFloat(ListePage) % 1 !=0){
    ListePage = Math.round(parseInt(ListePage))+""
    redirect(`?count=${ListePage}`)
}
    if (parseInt(ListePage) > (Lessons.length/5)+1){
        ListePage = Math.round(Lessons.length/5) + ""
        redirect(`?count=${ListePage}`)
    }
    else if (parseInt(ListePage)<=0){
        ListePage = "1"
        redirect(`?count=${ListePage}`)
    }

    return (
    <div className="h-max bg-white border rounded-xl  divide-y-2 dark:bg-slate-900 ">
    <div className=" flex w-full justify-between p-8">
        <h3 className="text-3xl font-bold">My Courses List</h3>
        <Button>View all courses</Button>
    </div>
    <div className=" h-max divide-y-[1px]  p-8 min-h-max">
        <ProductsHeader/>
        { Lessons.map((index,i)=>
            i< (5 * parseInt(ListePage))  &&  i> ((5 * (parseInt(ListePage)-1))-1) ?
            <SingleProduct Data={index} key={i} /> : null )}
        <Counter searchParams={searchParams} max={Math.round(Lessons.length/5)}/>
    </div>
    </div> 
    
    );
}

export default ProductsTable;