import React, { useEffect, useState } from "react";
import "../css/NearbyHotels.css"; // Add CSS styles for hotels

const NearbyHotels = () => {
  const [hotels, setHotels] = useState([]);
  const [error, setError] = useState(null);

  // Fetch nearby hotels using an API (example API call)
  const fetchNearbyHotels = async () => {
    try {
      const response = await fetch(
        `https://api.example.com/nearby-hotels?lat=28.6139&lon=77.2090` // Replace with a real API
      );
      if (!response.ok) {
        throw new Error("Failed to fetch hotels");
      }
      const data = await response.json();
      setHotels(data.hotels); // Assume API returns { hotels: [...] }
    } catch (err) {
      setError(err.message);
    }
  };

  useEffect(() => {
    fetchNearbyHotels();
  }, []);

  return (
    <div className="nearby-hotels">
      <h2 className="section-title">Nearby Hotels</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="hotel-list">
        {hotels.length > 0 ? (
          hotels.map((hotel) => (
            <div key={hotel.id} className="hotel-card">
              <img
                src={hotel.image || "https://via.placeholder.com/150"}
                alt={hotel.name}
                className="hotel-image"
              />
              <div className="hotel-details">
                <h3 className="hotel-name">{hotel.name}</h3>
                <p className="hotel-location">{hotel.location}</p>
                <p className="hotel-rating">Rating: {hotel.rating} ⭐</p>
                <p className="hotel-price">Price: {hotel.price} per night</p>
              </div>
            </div>
          ))
        ) : (
          <p>Loading hotels...</p>
        )}
      </div>
    </div>
  );
};

export default NearbyHotels;
