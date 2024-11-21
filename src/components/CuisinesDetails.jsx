import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useFetch from './useFetch';
import Preloader from './Preloader'; // Import the Preloader component
import Error from './Error'; // Ensure you import the Error component

const CuisinesDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useFetch(`https://dummyjson.com/recipes/${id}`);

    // Show Preloader if data is still loading
    if (isPending) {
        return <Preloader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    useEffect(() => {

        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };

    }, [])

    return (
        <div className="p-8 mx-auto bg-light-accent min-h-screen">
            {data && (
                <div className="flex flex-col md:flex-row pt-8 pb-6 md:space-x-8">
                    {/* Image and basic info */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="flex justify-center mb-6">
                            <img
                                src={data.image}
                                alt={data.name}
                                className="w-full max-w-lg h-72 object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
                            />
                        </div>
                        <h1 className="text-4xl font-extrabold mt-4 text-primary text-center">{data.name}</h1>
                        <p className="mt-2 text-xl text-center text-gray-600">Cuisine: {data.cuisine}</p>
                        <p className="mt-2 text-lg text-center text-gray-600">Prep Time: {data.prepTimeMinutes} mins</p>
                        <p className="mt-2 text-lg text-center text-gray-600">Cook Time: {data.cookTimeMinutes} mins</p>
                        <p className="mt-2 text-lg text-center text-gray-600">Servings: {data.servings}</p>
                    </div>

                    {/* Ingredients and Instructions */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
                        <div className="mb-6">
                            <p className="mt-2 font-semibold text-gray-800 text-xl">Ingredients:</p>
                            <ul className="list-disc ml-6 text-lg text-gray-700">
                                {data.ingredients.map((ingredient, index) => (
                                    <li key={index}>{ingredient}</li>
                                ))}
                            </ul>
                        </div>

                        <div>
                            <p className="mt-4 font-semibold text-xl text-gray-800">Instructions:</p>
                            <ol className="list-decimal ml-6 text-lg text-gray-700">
                                {data.instructions.map((instruction, index) => (
                                    <li key={index}>{instruction}</li>
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CuisinesDetails;
