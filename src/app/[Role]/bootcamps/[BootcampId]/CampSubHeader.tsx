import { Badge } from "@/components/ui/badge";
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
    </div>
  );
}

export default BootCampSubHeader;
