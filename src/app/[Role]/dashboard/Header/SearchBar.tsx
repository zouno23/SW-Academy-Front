import { Input } from "@/components/ui/input";
import { Search } from 'lucide-react';

function SearchBar() {
    return ( 
        <div className="w-full relative h-fit flex ">
            <Input className="rounded-3xl h-8 px-10" placeholder="Search"/>
            <Search className="absolute left-0 m-1 mx-2"/>
        </div>
     );
}

export default SearchBar;