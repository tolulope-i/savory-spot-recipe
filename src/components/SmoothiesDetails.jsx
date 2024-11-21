import React from 'react';
import { useParams } from 'react-router-dom';
import useSmoothieFetch from './useSmoothieFetch';
import Preloader from './Preloader'; // Import Preloader component
import Error from './Error'; // Ensure you import the Error component

const SmoothiesDetails = () => {
    const { id } = useParams();
    const { data, isPending, error } = useSmoothieFetch(id);

    if (isPending) {
        return <Preloader />;
    }

    if (error) {
        return <Error message={error} />;
    }

    return (
        <div className="p-8 mx-auto bg-light-accent min-h-screen">
            {data && (
                <div className="flex flex-col md:flex-row pt-8 pb-6 md:space-x-8">
                    {/* Drink Image and Details */}
                    <div className="md:w-1/2 mb-8 md:mb-0">
                        <div className="flex justify-center mb-6">
                            <img
                                src={data.strDrinkThumb}
                                alt={data.strDrink}
                                className="w-full max-w-lg h-72 object-cover rounded-lg shadow-xl transform transition duration-500 hover:scale-105"
                            />
                        </div>
                        <h1 className="text-4xl font-extrabold mt-4 text-primary text-center">{data.strDrink}</h1>
                        <p className="mt-2 text-xl text-center text-gray-600">Category: {data.strCategory}</p>
                        <p className="mt-2 text-lg text-center text-gray-600">Glass: {data.strGlass}</p>
                    </div>

                    {/* Ingredients and Instructions */}
                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
                        {/* Ingredients Section */}
                        <div className="mb-6">
                            <p className="mt-2 font-semibold text-gray-800 text-xl">Ingredients:</p>
                            <ul className="list-disc ml-6 text-lg text-gray-700">
                                {[...Array(15)].map((_, i) => {
                                    const ingredient = data[`strIngredient${i + 1}`];
                                    const measure = data[`strMeasure${i + 1}`];
                                    return ingredient ? (
                                        <li key={i}>{measure ? `${measure} ` : ''}{ingredient}</li>
                                    ) : null;
                                })}
                            </ul>
                        </div>

                        {/* Instructions Section */}
                        <div>
                            <p className="mt-4 font-semibold text-xl text-gray-800">Instructions:</p>
                            <ol className="list-decimal ml-6 text-lg text-gray-700">
                                {data.strInstructions.split('. ').map((instruction, index) => (
                                    instruction ? <li key={index}>{instruction}</li> : null
                                ))}
                            </ol>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default SmoothiesDetails;
