import { Button } from "@/components/ui/button";
import ProductsHeader from "./ProductsHeader";
import SingleProduct from "./SingleProduct";
import { Counter } from "./counter";
import { Data } from "./Data";
import { Lesson } from "./DataStructure";

function ProductsTable() {
    const liste = Data
    return (   <div className="h-max bg-white border rounded-xl  divide-y-2">
    <div className=" flex w-full justify-between p-8">
        <h3 className="text-3xl font-bold">My Courses List</h3>
        <Button>View all courses</Button>
    </div>
<div className=" h-max divide-y-[1px]  p-8">
<ProductsHeader/>
{ liste.map((index,i)=>

 i<5 ?
<SingleProduct Data={index}/>:null

)}
<Counter/>

</div>
</div> );
}

export default ProductsTable;