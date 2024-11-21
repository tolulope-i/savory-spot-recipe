import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import useCocktailFetch from './useCocktailFetch';
import Preloader from './Preloader';

const CocktailDetails = () => {

    useEffect(() => {

        const scrollToTop = () => {
            window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
        };

    }, []) 

    const { id } = useParams();
    const { data, isPending, error } = useCocktailFetch(id);

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

                    <div className="md:w-1/2 bg-white p-6 rounded-lg shadow-xl border-2 border-gray-200">
                        <div className="mb-6">
                            <p className="mt-2 font-semibold text-gray-800 text-xl">Ingredients:</p>
                            <ul className="list-disc ml-6 text-lg text-gray-700">
                                {[...Array(15)].map((_, i) => {
                                    const ingredient = data[`strIngredient${i + 1}`];
                                    const measure = data[`strMeasure${i + 1}`];
                                    return ingredient ? <li key={i}>{measure} {ingredient}</li> : null;
                                })}
                            </ul>
                        </div>

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

export default CocktailDetails;
