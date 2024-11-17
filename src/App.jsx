import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; // Import BrowserRouter, Route, and Routes
import Landingpage from './Components/Landingpage';  // Import Navbar component
import Home from './Components/Home';  // Import Home component
import Notification from './Components/Notification';
import Travel from './Components/Travel';  // Import Travels component
import ChatBot from './Components/chatbot';
//import Cusine from './Components/Cusine';  // Import Cusine component
//import Booking from './Components/Booking';  // Import Booking component
//import FAQ from './Components/FAQ';  // Import FAQ component

function App() {
  return (
    <Router>  {/* Wrap your application with Router */}
      <div className="w-full h-full bg-black">
        <Landingpage /> 
        <Notification/>
        <Home />
        <button onClick={<Route path="/Travel" element={<Travel />} />}></button>
         {/* Render Navbar */}
         <chatbot />
         
        
      </div>
    </Router>
  );
}

export default App;
