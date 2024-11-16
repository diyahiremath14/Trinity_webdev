// src/pages/Home.jsx
import React from 'react';
import "../css/Home.css";

const Home = () => {
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

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <section className="hero-section h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <h2 className="text-5xl font-extrabold text-white mb-4">Plan Your Perfect Trip</h2>
          <p className="text-gray-200 text-lg mb-8">
            Our Smart Itinerary Planner helps you create personalized travel plans effortlessly.
          </p>
          <button className="hero-button">Get Started</button>
        </div>
      </section>

      {/* Cuisines Gallery */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Explore Cuisines Around the World</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {cuisines.map((cuisine) => (
              <div key={cuisine.name} className="shadow-lg rounded-lg overflow-hidden cuisine-card">
                <img
                  src={cuisine.image}
                  alt={cuisine.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="cuisine-title">{cuisine.name}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Must-Visit Places in India */}
      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Must-Visit Places in India</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            {places.map((place) => (
              <div key={place.name} className="shadow-lg rounded-lg overflow-hidden place-card">
                <img
                  src={place.image}
                  alt={place.name}
                  className="w-full h-40 object-cover"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-gray-800">{place.name}</h3>
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
