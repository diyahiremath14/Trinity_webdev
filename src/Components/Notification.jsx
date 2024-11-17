import React, { useState, useEffect } from 'react';

const NotificationPopup = () => {
  const [location, setLocation] = useState(null);
  const [error, setError] = useState(null);

  // Check if the Notifications API is supported
  const checkNotificationPermission = async () => {
    if (!("Notification" in window)) {
      console.error("This browser does not support notifications.");
      return false;
    }

    if (Notification.permission === "granted") {
      return true;
    } else if (Notification.permission !== "denied") {
      const permission = await Notification.requestPermission();
      return permission === "granted";
    }
    return false;
  };

  // Show notification
  const showNotification = (message) => {
    if (Notification.permission === "granted") {
      new Notification("Location Alert", {
        body: message,
        icon: "https://cdn-icons-png.flaticon.com/512/869/869636.png", // Example icon
      });
    }
  };

  // Get user's location
  const fetchLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ latitude, longitude });
          // Example: Custom message based on location
          if (latitude > 20 && latitude < 30) {
            showNotification("You're visiting a tropical region!");
          } else {
            showNotification("Explore your local attractions!");
          }
        },
        (err) => {
          setError(err.message);
        }
      );
    } else {
      setError("Geolocation is not supported by this browser.");
    }
  };

  useEffect(() => {
    const handleLocation = async () => {
      const hasPermission = await checkNotificationPermission();
      if (hasPermission) {
        fetchLocation();
      }
    };
    handleLocation();
  }, []);

  return (
    <div className="notification-popup">
      <h1 className="text-2xl font-bold text-center mt-4">Notification Based on Location</h1>
      {error && <p className="text-red-500 text-center">{error}</p>}
      {location && (
        <p className="text-center mt-2">
          Your location: Latitude {location.latitude}, Longitude {location.longitude}.
        </p>
      )}
    </div>
  );
};

export default NotificationPopup;
