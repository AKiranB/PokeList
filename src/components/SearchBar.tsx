import searchBarProps from "../types/searchBar";


const SearchBar = ({ searchString, setSearchString }: searchBarProps) => {

    return (
        <div className="relative mx-auto text-gray-600">
            <form>
                <input
                    className="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
                    type="search"
                    name="search"
                    value={searchString}
                    onChange={e => setSearchString(e.target.value)}
                    placeholder='Type your search here'
                />
                {/* <button onClick={handleSearch}></button> */}
            </form>
        </div>
    );
};

export default SearchBar;