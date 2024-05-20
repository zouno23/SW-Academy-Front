
import { Skeleton } from "@/components/ui/skeleton"

export default function loading() {
  return (
    <div className="w-full max-w-xl space-y-6">
    <div className="space-y-4">
      <Skeleton className="h-[25px] w-full rounded-xl" />
      {Array(2).fill(0).map((_, index) => (
        <div key={index} className="space-y-2">
          <Skeleton className="h-4 w-[250px]" />
          <div className="space-y-2">
            {Array(4).fill(0).map((_, optionIndex) => (
              <div key={optionIndex} className="flex items-center gap-2">
            
                <Skeleton className="h-4 w-full" />
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  </div>
  )
}