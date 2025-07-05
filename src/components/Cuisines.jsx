import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import useFetch from './useFetch';
import Preloader from './Preloader';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import NoSearch from './NoSearch';

const Cuisines = () => {
    const { data, isPending, error } = useFetch('https://dummyjson.com/recipes');
    const [visibleRecipes, setVisibleRecipes] = useState(12);
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredRecipes, setFilteredRecipes] = useState([]);

    useEffect(() => {
        if (data) {
            const filtered = data.recipes.filter(recipe =>
                recipe.name.toLowerCase().includes(searchTerm.toLowerCase())
            );
            setFilteredRecipes(filtered);
        }
    }, [data, searchTerm]);

    const handleSearchChange = (event) => {
        setSearchTerm(event.target.value);
    };

    const handleSeeMore = () => {
        setVisibleRecipes(prevVisible => prevVisible + 20);
    };

    if (isPending) {
        return <Preloader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="p-5">
            <h1 className="text-3xl p-5 text-center text-primary font-bold mb-4 lg:text-4xl">Cuisines</h1>
            <div className="relative w-full max-w-lg mx-auto mb-6">
                <input
                    type="search"
                    className="w-full p-1 pl-14 pr-4 rounded-3xl  border-1 border-transparent shadow-xl focus:outline-none focus:ring-4 focus:ring-accent transition-all duration-300 ease-in-out"
                    placeholder="Search cuisines"
                    value={searchTerm}
                    onChange={handleSearchChange}
                />
                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black">
                    <FontAwesomeIcon icon={faSearch} className="" />
                </span>
            </div>
            {filteredRecipes.length > 0 ? (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredRecipes.slice(0, visibleRecipes).map(recipe => (
                        <div key={recipe.id} className="border rounded-lg shadow-sm p-4">
                            <Link to={`/recipe/${recipe.id}`}>
                                <img
                                    src={recipe.image}
                                    alt={recipe.name}
                                    className="w-full max-w-42 h-42 object-cover rounded transform transition duration-500 hover:scale-110"
                                />
                                <h3 className="mt-2 font-semibold text-lg">{recipe.name}</h3>
                                <Link
                                    to={`/recipe/${recipe.id}`}
                                    className="text-accent font-medium hover:underline mt-2"
                                >
                                    See Recipe
                                </Link>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : (
                < NoSearch />
            )}

            {/* "See More" Button */}
            {filteredRecipes.length > visibleRecipes && (
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

export default Cuisines;
