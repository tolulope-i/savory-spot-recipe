import React from 'react';
import Hero from './Hero';
import Cuisines from './Cuisines';
import Cocktails from './Cocktails';
import Smoothies from './Smoothies';
import Preloader from './Preloader';

const Home = () => {

  const [isLoading, setIsLoading] = React.useState(true);

  React.useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <Preloader />;
  }

  return (
    <div>
      <Hero />
      <Cuisines />
      <Cocktails />
      <Smoothies />
    </div>
  );
};

export default Home;
