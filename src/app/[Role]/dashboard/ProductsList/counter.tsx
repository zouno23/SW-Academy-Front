import {
    Pagination,
    PaginationContent,
    PaginationEllipsis,
    PaginationItem,
    PaginationLink,
    PaginationNext,
    PaginationPrevious,
  } from "@/components/ui/pagination"
  
  export function Counter( 
    {searchParams, max}:
    {
        max:number
        searchParams:{
            [key: string] : string | undefined
        }
    })
    {
    const count = searchParams.count || "1"
    return (
      <Pagination className="pt-8">
        <PaginationContent>
          { parseInt(count)>1 &&
          <>
          <PaginationItem>
            <PaginationPrevious href={`?count=${parseInt(count)-1}`} />
          </PaginationItem>
          <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)-1}`}>{parseInt(count)-1}</PaginationLink>
          </PaginationItem>
          </>
          }
          <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)}`} isActive>
              {count}
            </PaginationLink>
          </PaginationItem>

          {parseInt(count)<max &&
          <>
            <PaginationItem>
            <PaginationLink href={`?count=${parseInt(count)+1}`}>{parseInt(count)+1}</PaginationLink>
          </PaginationItem>
          <PaginationItem>
            <PaginationEllipsis />
          </PaginationItem>
          <PaginationItem>
            <PaginationNext href={`?count=${parseInt(count)+1}`} />
          </PaginationItem>
          </>
          }
        </PaginationContent>
      </Pagination>
    )
  }
  