import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import "../css/Home.css";


const Home = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [showChatbot, setShowChatbot] = useState(false); // Manage chatbot visibility
  const navigate = useNavigate(); // Initialize navigation

  const cuisines = [
    { name: 'Italian', image: './src/assets/italian.jpg' },
    { name: 'Japanese', image: './src/assets/japanese.avif' },
    { name: 'Indian', image: './src/assets/indian.avif' },
    { name: 'French', image: './src/assets/french.avif' },
    { name: 'Mexican', image: './src/assets/mexican.avif' },
    { name: 'Thai', image: './src/assets/thai.avif' },
  ];

  const places = [
    { name: 'Taj Mahal, Agra', image: './src/assets/Tajmahal.jpg' },
    { name: 'Kerala Backwaters', image: './src/assets/kerala.jpg' },
    { name: 'Jaipur, Rajasthan', image: './src/assets/jaipur.jpg' },
    { name: 'Goa Beaches', image: './src/assets/goa.jpg' },
    { name: 'Varanasi', image: './src/assets/varanasi.avif' },
    { name: 'Himalayas, Himachal Pradesh', image: './src/assets/himalayas.jpg' },
  ];

  // Toggle Dark Mode
  const toggleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  // Effect to add/remove dark mode class to the body
  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
  }, [isDarkMode]);

  // Redirect handler for "Get Started" button
  const handleRedirect = () => {
    navigate('/Travel'); // Redirect to the "Travels" page
  };

  return (
    <div className={`font-sans ${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-5xl font-extrabold mb-4">Plan Your Perfect Trip</h2>
          <p className="text-lg mb-8">
            Our Smart Itinerary Planner helps you create personalized travel plans effortlessly.
          </p>
          <button
            className="hero-button px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all"
            onClick={handleRedirect} // Redirect on click
          >
            Get Started
          </button>
        </div>
      </section>

      {/* Toggle Button for Dark Mode */}
      <button
        onClick={toggleDarkMode}
        className="absolute top-20 left-4 p-2 bg-gray-800 text-white rounded-full focus:outline-none"
      >
        {isDarkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Cuisines Gallery */}
      <section className="py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Explore Cuisines Around the World</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cuisines.map((cuisine) => (
              <div key={cuisine.name} className="shadow-lg rounded-lg overflow-hidden cuisine-card">
                <img src={cuisine.image} alt={cuisine.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{cuisine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Places Gallery */}
      <section className="py-16 bg-gray-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-8">Popular Places to Visit</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {places.map((place) => (
              <div key={place.name} className="shadow-lg rounded-lg overflow-hidden place-card">
                <img src={place.image} alt={place.name} className="w-full h-40 object-cover" />
                <div className="p-4">
                  <h3 className="text-xl font-semibold">{place.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
