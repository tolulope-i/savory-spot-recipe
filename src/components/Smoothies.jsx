import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import Preloader from './Preloader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NoSearch from './NoSearch';

const Smoothies = () => {
    const [displayCount, setDisplayCount] = useState(8);
    const { data, isPending, error } = useFetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Shake");
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredSmoothies, setFilteredSmoothies] = useState([]);

    useEffect(() => {
        if (data) {
            const filtered = data.drinks.filter(smoothie =>
                smoothie.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredSmoothies(filtered);
        }
    }, [data, searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    if (filteredSmoothies.length === 0) {
        return <NoSearch />
    }

    const handleSeeMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    if (isPending) {
        return <Preloader />;
    }

    if (error) {
        return <div className="p-5 text-center text-red-500">{error}</div>;
    }

    return (
        <div className="p-5 shadow-lg">
            <h1 className="text-3xl p-5 text-center text-primary font-bold mb-4 lg:text-4xl">Smoothie</h1>
            <div className="relative w-full max-w-lg mx-auto mb-6">
                <input
                    type="search"
                    className="w-full p-1 pl-14 pr-4 rounded-3xl  border-1 border-transparent shadow-md focus:outline-none focus:ring-2 focus:ring-accent transition-all duration-300 ease-in-out"
                    placeholder="Search smoothies"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
                    <FontAwesomeIcon icon={faSearch} className="" />
                </span>
            </div>
            {data && data.drinks && (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredSmoothies.slice(0, displayCount).map(smoothie => (
                        <div key={smoothie.idDrink} className="border rounded-lg shadow-sm p-4 z-50">
                            <Link  to={`/smoothie/${smoothie.idDrink}`}>
                                <img
                                    src={smoothie.strDrinkThumb}
                                    alt={smoothie.strDrink}
                                    className="w-full max-w-42 h-42 object-cover rounded transform transition duration-500 hover:scale-105"
                                />
                                <h3 className="mt-2 font-semibold text-lg">{smoothie.strDrink}</h3>
                                <Link
                                    to={`/smoothie/${smoothie.idDrink}`}
                                    className="text-accent font-medium hover:underline mt-2"
                                >
                                    See Recipe
                                </Link>
                            </Link>
                        </div>
                    ))}
                </div>
            )}
            {filteredSmoothies.length > displayCount && (
                <div className="text-center p-4">
                    <button
                        onClick={handleSeeMore}
                        className="mt-4 bg-primary text-white p-2 rounded font-medium hover:scale-110 transition-scale duration-300"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Smoothies;
