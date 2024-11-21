import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import Preloader from './Preloader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NoSearch from './NoSearch';

const Cocktails = () => {
    const [displayCount, setDisplayCount] = useState(8);
    const { data, isPending, error } = useFetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?c=Cocktail");
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredCocktails, setFilteredCocktails] = useState([]);

    useEffect(() => {

        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };

    }, [])

    // Filter cocktails whenever the data or search term changes
    useEffect(() => {
        if (data) {
            const filtered = data.drinks.filter(cocktail =>
                cocktail.strDrink.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredCocktails(filtered);
        }
    }, [data, searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSeeMore = () => {
        setDisplayCount(prevCount => prevCount + 20);
    };

    if (isPending) {
        return <Preloader />;
    }
    if (error) {
        return <Error message={error} />;
    }

    if (filteredCocktails.length === 0) {
        return <NoSearch />
    }

    return (
        <div className="p-5 bg-red-100 shadow-lg">
            <h1 className="text-3xl p-5 text-center text-accent font-bold mb-4 lg:text-4xl">Cocktail</h1>
            <div className="relative w-full max-w-lg mx-auto mb-6">
                <input
                    type="search"
                    className="w-full p-1 pl-14 pr-4 rounded-3xl  border-1 border-transparent shadow-xl focus:outline-none focus:ring-4 focus:ring-accent transition-all duration-300 ease-in-out"
                    placeholder="Search cocktails"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
                    <FontAwesomeIcon icon={faSearch} className="" />
                </span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {filteredCocktails.slice(0, displayCount).map(cocktail => (
                    <div key={cocktail.idDrink} className="border rounded-lg shadow-lg p-4">
                        <Link to={`/cocktail/${cocktail.idDrink}`}>
                            <img
                                src={cocktail.strDrinkThumb}
                                alt={cocktail.strDrink}
                                className="w-full max-w-42 h-42 object-cover rounded transform transition duration-500 hover:scale-105"
                            />
                            <div className="mt-2">
                                <h3 className="font-semibold text-lg">{cocktail.strDrink}</h3>
                                <Link
                                    to={`/cocktail/${cocktail.idDrink}`}
                                    className="text-accent font-medium hover:underline mt-2"
                                >
                                    See Recipe
                                </Link>
                            </div>
                        </Link>
                    </div>
                ))}
            </div>

            {/* "See More" Button */}
            {displayCount < filteredCocktails.length && (
                <div className="text-center mt-6">
                    <button
                        onClick={handleSeeMore}
                        className="mt-4 bg-primary text-white p-2 rounded font-medium hover:scale-110 transition-scale duration-1000"
                    >
                        See More
                    </button>
                </div>
            )}
        </div>
    );
};

export default Cocktails;
