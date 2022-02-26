import searchBarProps from "../types/searchBar";


const SearchBar = ({ searchString, setSearchString }: searchBarProps) => {

    return (
        <form className='searchBar'>
            <input
                type="search"
                name="search"
                value={searchString}
                onChange={e => setSearchString(e.target.value)}
                placeholder='Type your search here'
            />
            {/* <button onClick={handleSearch}></button> */}
        </form>
    );
};

export default SearchBar;