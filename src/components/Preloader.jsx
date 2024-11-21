import React from 'react';

const Preloader = () => {
    return (
        <div className="overflow-hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-gray-100">
            <div className="relative w-16 h-16">
                <div className="absolute inset-0 border-t-4 border-primary border-solid rounded-full animate-spin"></div>
                <div className="absolute inset-0 border-t-4 border-gray-300 border-solid rounded-full opacity-25 animate-spin"></div>
            </div>
            <div className="mt-4 text-gray-500 text-lg">Loading...</div>
        </div>
    );
};

export default Preloader;
