import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import NavBar from './components/NavBar';
import Home from './components/Home';
import Cuisines from './components/Cuisines';
import CuisinesDetails from './components/CuisinesDetails';
import Cocktails from './components/Cocktails';
import CocktailsDetails from './components/CocktailsDetails';
import Smoothies from './components/Smoothies';
import SmoothiesDetails from './components/SmoothiesDetails';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';
import PrivacyPolicy from './components/PrivacyPolicy';
import TermsOfService from './components/TermsOfService';
import Preloader from './components/Preloader';
import NotFound from './components/NotFound';
import ScrollToTop from './components/ScrollToTop';

const App = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
      document.body.classList.remove('no-scroll');
    }, 1000);

    document.body.classList.add('no-scroll');

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {isLoading ? (
        <Preloader />
      ) : (
        <Router>
          <ScrollToTop />
          <NavBar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cuisines" element={<Cuisines />} />
            <Route path="/recipe/:id" element={<CuisinesDetails />} />
            <Route path="/cocktail" element={<Cocktails />} />
            <Route path="/cocktail/:id" element={<CocktailsDetails />} />
            <Route path="/smoothie" element={<Smoothies />} />
            <Route path="/smoothie/:id" element={<SmoothiesDetails />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<PrivacyPolicy />} />
            <Route path="/terms" element={<TermsOfService />} />
            <Route path='*' element={<NotFound />} />
          </Routes>
          <Footer />
        </Router>
      )}
    </>
  );
};

export default App;
