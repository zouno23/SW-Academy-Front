function ProductsHeader() {
    return ( 
    <div className="w-full h-fit px-8 py-5 flex items-center gap-32 justify-between font-bold bg-slate-950 text-white rounded-xl  text-base ">
    <h2 className="w-3/6">Course Title</h2>
    <div className=" gap-16 flex w-4/6 px-1 ">
    <h2>Total Lectures</h2>
    <h2>Completed Lectures</h2>
    <h2>Action</h2>
    </div>
    </div> );
}

export default ProductsHeader;