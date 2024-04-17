import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"

  export const searchParamsKeep = (changeable:string , searchParams:{[key: string] : string | undefined})=>
    {
      let newSeachParams =""
      if (searchParams){
      for (const param in searchParams){
        if(param!=changeable)
        newSeachParams+="&"+param+"="+searchParams[param];
      }
    }
    return newSeachParams
  }
  
  export default function ListPagination( 
    {searchParams, max}:
    {
        max:number
        searchParams:{
            [key: string] : string | undefined
        }
    })
    {
    const count = searchParams.count || "1"
    
    const OldSearchParams= searchParamsKeep("count",searchParams)
    return (
      <Pagination className="p-8">
        <PaginationContent>
          { parseInt(count)>1 &&
          <>
          <PaginationItem>
            <PaginationPrevious href={
              `?count=${parseInt(count)-1}`+OldSearchParams} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)-1}`+OldSearchParams}>{parseInt(count)-1}</PaginationLink>
          </PaginationItem>
          </>
          }
          <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)}`+OldSearchParams} isActive>
              {count}
            </PaginationLink>
          </PaginationItem>

          {parseInt(count)<max &&
          <>
            <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)+1}`+OldSearchParams}>{parseInt(count)+1}</PaginationLink>
          </PaginationItem>
          {parseInt(count)+1<max &&
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
    }
          <PaginationItem>
            <PaginationNext href={`?count=${parseInt(count)+1}`+OldSearchParams} />
          </PaginationItem>
          </>
          }
        </PaginationContent>
      </Pagination>
    )
  }
  