import DarkSwitch from "./DarkSwitch";
import PhoneSideBar from "./PhoneSideBar";
import SearchBar from "./SearchBar";

function Header({
    searchParams,
  }: {
    searchParams?: { [key: string]: string | string[] | undefined };
  }) {
  
    return ( <div className="w-full flex gap-6 px-2 items-center">
       <PhoneSideBar searchParams={searchParams} />
        <SearchBar/>
        <DarkSwitch/>
    </div> );
}

export default Header;