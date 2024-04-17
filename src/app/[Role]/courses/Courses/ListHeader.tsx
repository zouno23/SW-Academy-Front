function ListHeader({role}:{role:string}) {
    return ( <div className=" w-full max-md:w-[800px] static my-2 h-max p-5 text-base bg-blue-600 rounded-xl flex items-center text-white gap-16 font-bold">
    <span className="w-1/2 px-4  ">Title</span>
    <div className="flex w-1/2 px-4 flex-row text-center gap-1 justify-between">
    <span className="basis-1/3 flex justify-center"> Lessons</span>
    <span className="basis-1/3 flex justify-center">{role === "Teacher"?"Sellings":"Rating"}</span>
    <span className="basis-1/3 flex justify-center">{role==="Teacher"?"Price":"Status"}</span>
    </div>
</div> );
}

export default ListHeader;