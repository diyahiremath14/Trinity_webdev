import React, { useState } from 'react';
import { CiMenuFries } from "react-icons/ci";
import { Link } from 'react-router-dom'; // Import Link for navigation

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <div className='w-full h-max select-none bg-black shadow-lg rounded-lg backdrop-blur-[20px] border border-1 rounded-[200px]'>
      <div className=' p-5 flex items-center justify-between'>
        <span><h1 className='text-2xl font-semibold text-blue-500'>PrepVerse</h1></span>
        <div className='md:hidden'>
          <button onClick={toggleMenu} className='text-white-800'>
            {isOpen ? '✖' : <CiMenuFries size={24} />}
          </button>
        </div>
        <nav className='hidden md:flex space-x-8'>
          {/* Use Link component for navigation */}
          <Link to="/" className='text-white-800 hover:text-blue-500 transition duration-200'>Home</Link>
          <Link to="/travels" className='text-white-800 hover:text-blue-500 transition duration-200'>Travels</Link>
          <Link to="/cusine" className='text-white-800 hover:text-blue-500 transition duration-200'>Cusine</Link>
          <Link to="/booking" className='text-white-800 hover:text-blue-500 transition duration-200'>Booking</Link>
          <Link to="/faq" className='text-white-800 hover:text-blue-500 transition duration-200'>FAQ</Link>
        </nav>
      </div>
      <div 
        className={`fixed top-0 left-0 w-full h-max bg-black backdrop-blur-sm text-slate-50 transform transition-transform duration-300 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-[200%]'}`}
      >
        <div className='flex flex-col items-center border border-2 '>
          <Link to="/" className='text-white-800 hover:text-blue-500 transition duration-200'>Home</Link>
          <Link to="/travels" className='text-white-800 hover:text-blue-500 transition duration-200'>Travels</Link>
          <Link to="/cusine" className='text-white-800 hover:text-blue-500 transition duration-200'>Cusine</Link>
          <Link to="/booking" className='text-white-800 hover:text-blue-500 transition duration-200'>Booking</Link>
          <Link to="/faq" className='text-white-800 hover:text-blue-500 transition duration-200'>FAQ</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
