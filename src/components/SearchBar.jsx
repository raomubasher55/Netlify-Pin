import React, { useState, useRef, useEffect } from 'react';
import { SearchBarCard } from './SearchBarCard';
import { Spinner } from './Spinner';

export const SearchBar = () => {
    const [search, setSearch] = useState("");
    const [searchResult, setSearchResult] = useState(null);
    const [error, setError] = useState(null);
    const [component, setComponent] = useState(false);
    const [spinner, setSpinner] = useState(false)


    const searchRef = useRef(null);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    const handleClickOutside = (event) => {
        if (searchRef.current && !searchRef.current.contains(event.target)) {
            setComponent(false);
        }
    };
    const handleOnChange = (e) => {
        setSearch(e.target.value);
        document.querySelector('#searchBtn').click();
    };

    const componentContainer = () => {
        setComponent(true);
    }
    const handleSearch = async () => {
      
    };


    return (
        <>
            {/* {spinner && <Spinner/>} */}
            <div className='flex flex-row flex-nowrap md:border-solid md:border-2 md:border-gray-800 rounded-lg md:pt-0 pt-1  ' ref={searchRef}>
                <input
                    type='search'
                    onClick={componentContainer}
                    onChange={handleOnChange}
                    className="h-9 w-52 md:h-12 py-2 px-4  lg:rounded-l-md md:rounded-l-md rounded-lg shadow-md text-white bg-slate-900"
                    placeholder="Search..."
                    value={search}
                />
                <button
                    onClick={handleSearch}
                    id='searchBtn'
                    disabled={search.length === 0}
                    className="hidden md:block md:h-12 lg:block search-btn py-2 px-4 rounded-r-md shadow-md bg-slate-900 hover:bg-slate-800 transition duration-200"
                >
                    &#x027A4;
                </button>
                {component && <SearchBarCard searchResult={searchResult} search={search} setComponent={setComponent} searchFuntion={handleSearch} />}
            </div>
        </>

    );
};
