import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { AtomIcon, SquarePen, Star, Trash } from "lucide-react";
import { BootcampType } from "./page";

function BootCampSubHeader({ camp }: { camp: BootcampType }) {
  return (
    <div className="flex items-center justify-between p-6 border-b">
      <div className="flex items-center space-x-2">
        <AtomIcon className="w-5 h-5 text-gray-600" />
        <p>{camp.Field}</p>
        <Star className="w-5 h-5 text-gray-600" />
        <p>{camp?.Rating || 0}/5</p>
        <Badge variant="secondary">Live</Badge>
      </div>
      <div className="flex space-x-2">
        <Button size="icon" variant="ghost" className="hover:text-blue-600">
          <SquarePen className="h-5 w-5" />
          <span className="sr-only">Edit Course</span>
        </Button>
        <Button
          size="icon"
          variant="ghost"
          type="submit"
          className="hover:text-red-600"
        >
          <Trash className="size-5" />
          <span className="sr-only"> Delete Course</span>
        </Button>
      </div>
    </div>
  );
}

export default BootCampSubHeader;
