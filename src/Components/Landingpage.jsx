import React from 'react';
import Navbar from './Navbar';
import Home from './Home';
import Chatbot from './chatbot';
const Landingpage = () => {
  return (
    <div className="text-white w-full h-full">
      <Navbar/>
      <Home/>
      <Chatbot/>
    </div>
  );
};

export default Landingpage;
