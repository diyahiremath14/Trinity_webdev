import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Landingpage from './Components/Landingpage';  // Import Navbar component
import Home from './Components/Home';  // Import Home component
//import Travels from './Components/Travels';  // Import Travels component
//import Cusine from './Components/Cusine';  // Import Cusine component
//import Booking from './Components/Booking';  // Import Booking component
//import FAQ from './Components/FAQ';  // Import FAQ component

function App() {
  return (
    <Router>  {/* Wrap your application with Router */}
      <div className="w-full h-full bg-black">
        <Landingpage />  {/* Render Navbar */}
        
      </div>
    </Router>
  );
}

export default App;
