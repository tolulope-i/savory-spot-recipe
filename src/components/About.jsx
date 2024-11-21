import React from 'react';


const About = () => {

  useEffect(() => {

    const scrollToTop = () => {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    };
  
  }, [])

  return (
    <div className="bg-gray-50">
      <div
        className="relative bg-cover bg-center text-white h-[70vh] md:h-[70vh]"
        style={{ backgroundImage: "url('images/food16.avif')", }}
      >
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="absolute inset-0 flex items-center justify-center">
          <h1 className="text-5xl font-bold text-center text-white md:text-6xl">Get To Know Us</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="space-y-8">
            <h2 className="text-3xl font-semibold text-gray-800">Who We Are</h2>
            <p className="text-lg text-gray-600">
              Welcome to SavorySpot, your one-stop destination for discovering
              mouthwatering recipes from all around the world. Whether you’re a
              seasoned chef or a home cook looking to try new dishes, we provide
              easy-to-follow recipes for every skill level. Our goal is to inspire
              culinary creativity and bring the joy of cooking to every kitchen.
            </p>

            <p className="text-lg text-gray-600">
              At SavorySpot, we focus on fresh, healthy, and easy-to-make
              recipes that will elevate your cooking experience. From savory
              appetizers to indulgent desserts, we’ve got something for everyone!
            </p>

            <h3 className="text-2xl font-semibold text-gray-800 mt-8">Our Mission</h3>
            <p className="text-lg text-gray-600">
              Our mission is to bring the global food community together through
              delicious and creative recipes. We believe that cooking should be
              fun, accessible, and, most importantly, delicious. We’re here to help
              you explore the world of food, one recipe at a time.
            </p>
            <a
              href="#"
              className="text-lg font-medium text-primary hover:underline transition-all duration-700"
            >
              Learn more about our mission
            </a>
          </div>

          <div className=''>
            <h2 className="text-3xl font-semibold text-gray-800 mb-6">Meet Our Team</h2>
            <div className="space-y-8">
              <div className="flex items-center space-x-6">
                <img
                  src="images/team1.avif"
                  alt="Team Member"
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">John Doe</h3>
                  <p className="text-lg text-gray-600">Founder & Chef</p>
                  <p className="text-sm text-gray-500">
                    John is a professional chef with over 10 years of experience
                    creating incredible dishes. He founded SavorySpot to share his
                    passion for food and cooking with the world.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <img
                  src="images/team2.avif"
                  alt="Team Member"
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Jane Smith</h3>
                  <p className="text-lg text-gray-600">Content Strategist</p>
                  <p className="text-sm text-gray-500">
                    Jane is the creative mind behind SavorySpot’s content and
                    marketing. She ensures our recipes are clear, engaging, and
                    accessible to all.
                  </p>
                </div>
              </div>

              <div className="flex items-center space-x-6">
                <img
                  src="images/team3.avif"
                  alt="Team Member"
                  className="w-20 h-20 md:w-32 md:h-32 rounded-full object-cover"
                />
                <div>
                  <h3 className="text-xl font-semibold text-gray-800">Emily Clark</h3>
                  <p className="text-lg text-gray-600">Food Photographer</p>
                  <p className="text-sm text-gray-500">
                    Emily captures the beauty of food through her photography.
                    Her images bring our recipes to life and inspire people to
                    cook with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">
            Why Choose SavorySpot?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            <div className="text-center bg-white shadow-lg p-8 rounded-lg border border-gray-200">
              <img
                src="images/ingredient4.avif"
                alt="Fresh Ingredients"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Fresh Ingredients</h3>
              <p className="text-lg text-gray-600 mt-2">
                We prioritize fresh, high-quality ingredients to ensure every dish
                is bursting with flavor.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg p-8 rounded-lg border border-gray-200">
              <img
                src="images/food13.avif"
                alt="Easy Recipes"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Easy Recipes</h3>
              <p className="text-lg text-gray-600 mt-2">
                Our recipes are simple and easy to follow, so everyone can cook like
                a pro.
              </p>
            </div>

            <div className="text-center bg-white shadow-lg p-8 rounded-lg border border-gray-200">
              <img
                src="images/fruits.avif"
                alt="Global Flavors"
                className="w-16 h-16 mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-800">Global Flavors</h3>
              <p className="text-lg text-gray-600 mt-2">
                Explore dishes from around the world, bringing diverse cuisines to
                your table.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-accent py-12 text-white text-center">
        <h2 className="text-3xl font-semibold mb-4">Join Our Community</h2>
        <p className="text-lg mb-6">
          Become a part of our growing community of food lovers and start sharing
          your own culinary adventures!
        </p>
        <a
          href="#"
          className="inline-block px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-light-pry"
        >
          Sign Up Now
        </a>
      </div>
    </div>
  );
};

export default About;
