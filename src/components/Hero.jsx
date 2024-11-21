import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Hero = () => {
    const images = [
        "images/food1.webp",
        "images/food2.webp",
        "images/cocktail1.avif",
        "images/food3.webp",
        "images/food4.jpg",
        "images/shakes1.avif",
        "images/food5.jpeg",
        "images/food6.avif",
        "images/cocktail2.avif",
        "images/food7.avif",
        "images/food8.avif",
        "images/shakes2.avif",
        "images/food9.avif",
        "images/food10.avif",
        "images/cocktail6.avif",
        "images/food11.avif",
        "images/food12.avif",
        "images/shakes3.avif",
        "images/food13.avif",
        "images/food14.avif",
        "images/cocktail7.avif",
        "images/food15.avif",
        "images/food16.avif",
        "images/shakes4.avif",
        "images/food17.avif",
        "images/food18.avif",
        "images/cocktail8.avif",
        "images/food19.avif",
        "images/food20.avif",
        "images/shakes5.avif",        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);

    const nextImage = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    };

    const prevImage = () => {
        setCurrentIndex(
            (prevIndex) => (prevIndex - 1 + images.length) % images.length
        );
    };

    useEffect(() => {
        const interval = setInterval(nextImage, 2000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="z-10 text-center relative py-4 px-6 bg-light-pry flex flex-col items-center justify-center lg:flex-row">
            <div className="flex flex-col justify-center items-center text-center max-w-lg">
                <h2 className="text-4xl py-3 font-medium">
                    Savor the <span className='text-primary'>Flavor</span> of Home-Cooked <span className='text-primary'>Perfection <i className="fas fa-chevron-down"></i> </span>
                </h2>
                <p className="py-2">
                    Unlock your inner chef with easy and delicious recipes for every occasion.
                    From local delicacies to international cuisines,
                    travel the world through food—one recipe at a time.
                </p>
               
                <div className="mt-4 text-center rounded-md bg-accent text-white-text py-1 w-40 hover:scale-110 transition-all duration-700 mx-auto sm:hidden lg:block">
                    <Link to="/cuisines">Let's get cooking</Link>
                </div>
            </div>

            
            <div className="relative py-7 px-6 md:px-20">
                <div className="relative w-full">
                    <img
                        src={images[currentIndex]}
                        alt="Food"
                        className="w-80 h-80 max-w-full sm:max-w-[400px] md:w-[600px] lg:w-[700px] xl:w-[800px] mx-auto rounded-lg object-cover transition-all"
                    />

                    <button
                        onClick={prevImage}
                        className="absolute left-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                    >
                        &#8592;
                    </button>

                    <button
                        onClick={nextImage}
                        className="absolute right-1 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 text-white text-3xl p-2 rounded-full hover:bg-opacity-75 transition-all duration-300"
                    >
                        &#8594;
                    </button>
                </div>
            </div>

           
            <div className="mt-4 text-center rounded-md bg-accent text-white-text py-1 w-40 hover:scale-110 transition-all duration-700 mx-auto md:block lg:hidden">
                <Link to="/cuisines">Let's get cooking</Link>
            </div>
        </div>
    );
};

export default Hero;
