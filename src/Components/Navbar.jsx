import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { useNavigate } from 'react-router-dom'; // Import useNavigate for programmatic navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate(); // Initialize navigation

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  // Redirect handler for "Travels" link
  const handleTravelRedirect = () => {
    console.log('Navigating to Travels');
    navigate('/travels'); // Navigate to the "Travels" page
    closeMenu(); // Close the mobile menu after navigation
  };

  const handleHomeRedirect = () => {
    navigate('/'); // Navigate to the Home page
    closeMenu();
  };

  const handleCusineRedirect = () => {
    navigate('/cusine'); // Navigate to the Cusine page
    closeMenu();
  };

  const handleBookingRedirect = () => {
    navigate('/booking'); // Navigate to the Booking page
    closeMenu();
  };

  const handleFaqRedirect = () => {
    navigate('/faq'); // Navigate to the FAQ page
    closeMenu();
  };

  return (
    <div className='w-full h-max select-none bg-black shadow-lg rounded-lg backdrop-blur-[20px] border border-1 rounded-[200px]'>
      <div className='p-5 flex items-center justify-between'>
        <span><h1 className='text-2xl font-semibold text-blue-500'>PrepVerse</h1></span>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white-800'>
            {isOpen ? '✖' : <CiMenuFries size={24} />}
          </button>
        </div>
        <nav className='hidden md:flex space-x-8'>
          {/* Use buttons instead of Link for programmatic navigation */}
          <button onClick={handleHomeRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Home
          </button>
          <button onClick={handleTravelRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Travels
          </button>
          <button onClick={handleCusineRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Cusine
          </button>
          <button onClick={handleBookingRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Booking
          </button>
          <button onClick={handleFaqRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            FAQ
          </button>
        </nav>
      </div>

      {/* Mobile Menu */}
      <div 
        className={`fixed top-0 left-0 w-full h-max bg-black backdrop-blur-sm text-slate-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[200%]'}`}
      >
        <div className='flex flex-col items-center border border-2'>
          {/* Use buttons for navigation in the mobile menu */}
          <button onClick={handleHomeRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Home
          </button>
          <button onClick={handleTravelRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Travels
          </button>
          <button onClick={handleCusineRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Cusine
          </button>
          <button onClick={handleBookingRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            Booking
          </button>
          <button onClick={handleFaqRedirect} className='text-white-800 hover:text-blue-500 transition duration-200'>
            FAQ
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
