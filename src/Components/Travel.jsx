import React from "react";
import "../css/Travel.css"; // You can use the same home.css or create a new one

const TravelSection = () => {
  return (
    <section className="travel-section">
      <h2 className="section-title">Must Visit Places in India</h2>
      <p className="section-description">
        India offers a rich diversity of travel destinations, from the snow-capped Himalayas to the sunny beaches of Goa. Here are some of the must-visit places.
      </p>
      
      <div className="destinations-gallery">
        <div className="destination-item">
          <img
            src="./src/assets/Tajmahal.jpg"
            alt="Taj Mahal"
            className="destination-image"
          />
          <h3>Taj Mahal</h3>
          <p>The iconic symbol of love, located in Agra, known for its stunning white marble architecture.</p>
        </div>
        <div className="destination-item">
          <img
            src="./src/assets/goa.jpg"
            alt="Goa Beaches"
            className="destination-image"
          />
          <h3>Goa Beaches</h3>
          <p>Relax and enjoy the beautiful beaches, water sports, and vibrant nightlife of Goa.</p>
        </div>  
        <div className="destination-item">
          <img
            src="./src/assets/kerala.jpg" 
            alt="Kerala Backwaters"
            className="destination-image"
          />
          <h3>Kerala Backwaters</h3>
          <p>Experience the tranquility of Kerala's backwaters through houseboats amidst scenic nature.</p>
        </div>
      </div>

      <h2 className="section-title">Recommended Activities</h2>
      <div className="activities-list">
        <div className="activity-item">
          <h3>Yoga in Rishikesh</h3>
          <p>Join a yoga retreat in the spiritual city of Rishikesh, known as the Yoga Capital of the World.</p>
        </div>
        <div className="activity-item">
          <h3>Trekking in Himachal Pradesh</h3>
          <p>Explore the beautiful hills of Himachal Pradesh, a paradise for trekkers and adventure lovers.</p>
        </div>
        <div className="activity-item">
          <h3>Wildlife Safari in Jim Corbett National Park</h3>
          <p>Embark on a thrilling safari to spot the majestic tigers in the famous Jim Corbett National Park.</p>
        </div>
      </div>
    </section>
  );
};

const Home = () => {
  return (
    <div>
      <h1>Welcome to Your Smart Itinerary Planner</h1>
      {/* Other sections like header and itinerary planner */}
      <TravelSection />
    </div>
  );
};

export default Home;
