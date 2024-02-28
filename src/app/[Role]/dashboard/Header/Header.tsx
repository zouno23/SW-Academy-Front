import DarkSwitch from "./DarkSwitch";
import SearchBar from "./SearchBar";

function Header() {
    return ( <div className="w-full flex gap-6 px-2">
        <SearchBar/>
        <DarkSwitch/>
    </div> );
}

export default Header;