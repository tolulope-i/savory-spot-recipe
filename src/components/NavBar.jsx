import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const closeMobileMenu = () => {
        setIsMobileMenuOpen(false); 
    };

    

    return (
        <div>
            <div className="navbar-wrapper">
                <nav className="navbar">
                    <div className="bg-background flex justify-between items-center text-white-text p-3">
                        <h1 className="text-3xl capitalize">savory<span className="text-primary">Spot</span></h1>
                        <div className="laptop-links hidden lg:flex">
                            <ul className="flex justify-between items-center space-x-4">
                                <li><Link to="/" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>home</Link></li>
                                <li><Link to="/about" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>about</Link></li>
                                <li><Link to="/cuisines" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Cuisines</Link></li>
                                <li><Link to="/cocktail" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Cocktails</Link></li>
                                <li><Link to="/smoothie" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Smoothies</Link></li>
                                <li><Link to="/contact" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>contact</Link></li>
                                <li><Link to="/askchefsavory" className="p-3 bg-primary hover:bg-accent text-white rounded-lg transition-all ease-in-out duration-700 font-medium shadow-sm" onClick={closeMobileMenu}>Ask Chef Savory</Link></li>
                               
                            </ul>
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className={`cursor-pointer group lg:hidden relative transition-transform duration-300`} onClick={toggleMobileMenu}>
                            <div className={`w-9 h-1 bg-white m-1.5 group-hover:bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 absolute top-0 transform' : ''}`}></div>
                            <div className={`w-9 h-1 bg-white m-1.5 group-hover:bg-primary transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></div>
                            <div className={`w-9 h-1 bg-white m-1.5 group-hover:bg-primary transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 absolute bottom-0 transform' : ''}`}></div>
                        </div>
                    </div>

                    {/* Mobile Menu */}
                    <div className={`lg:hidden mobile-links bg-background text-white-text text-center py-4 ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
                        <ul className="flex-col justify-center items-center space-y-4">
                            <li><Link to="/" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>home</Link></li>
                            <li><Link to="/about" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>about</Link></li>
                            <li><Link to="/cuisines" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Cuisines</Link></li>
                            <li><Link to="/cocktail" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Cocktails</Link></li>
                            <li><Link to="/smoothie" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>Smoothies</Link></li>
                            <li><Link to="/contact" className="hover:text-primary transition-all duration-500 capitalize" onClick={closeMobileMenu}>contact</Link></li>
                            <li><Link to="/askchefsavory" className="p-3 bg-primary hover:bg-accent text-white rounded-lg transition-all ease-in-out duration-700 font-medium shadow-sm" onClick={closeMobileMenu}>Ask Chef Savory</Link></li>
                        
                        </ul>
                    </div>
                </nav>
            </div>
        </div>
    );
};

export default NavBar;
