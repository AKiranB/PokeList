import { useState } from "react";
import { Link } from "react-router-dom";
import SearchBar from './SearchBar'

type props = {
    searchString: string,
    setSearchString: React.Dispatch<React.SetStateAction<string>>
}

const Nav = ({ searchString, setSearchString }: props) => {

    const [navbarOpen,] = useState<boolean>();

    return (
        <nav className="relative flex flex-wrap items-center justify-between px-10 py-3 bg-blue-500 ">
            <div className="container flex flex-wrap items-center justify-between">
                <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                    <Link
                        className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                        to="/"
                    >
                        Home
                    </Link>


                </div>
                <SearchBar searchString={searchString} setSearchString={setSearchString} />
                <div
                    className={
                        "lg:flex flex-grow items-center" +
                        (navbarOpen ? " flex" : " hidden")
                    }
                    id="example-navbar-danger"
                >
                    <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
                        <li className="nav-item">
                            <Link
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                to="/favourites"
                            >
                                Favourites
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link
                                className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
                                to="/favourites"
                            >
                                Favourites
                            </Link>
                        </li>

                    </ul>
                </div>
            </div>
        </nav>
    )
}


export default Nav;