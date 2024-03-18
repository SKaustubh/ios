import React from "react";

const Border = () => {
  const handleCallIconClick = () => {
    // Add functionality to display contact details
    alert("Display contact details for call icon clicked!");
  };
  return (
    <div className="iphone14-home-screen relative">
      {/* Container for the image and overlay */}
      <div className="relative">
        {/* Background image */}
        <img
          src="../public/home-iphone.png" // Update to use the PNG image
          alt="iPhone 14 Home Screen"
          className="w-350 h-713 object-cover"
        />

        {/* Overlay div */}
        <div className="overlay absolute top-0 left-0 w-full h-full opacity-50 bg-black border rounded">
          {/* Clickable area for the call icon */}
          <div
            className="call-icon clickable-area"
            onClick={handleCallIconClick}
            style={{
              position: "absolute",
              top: "150px", // Adjust top position according to the icon's position on the image
              left: "80px", // Adjust left position according to the icon's position on the image
              width: "50px", // Adjust width according to the icon's size on the image
              height: "50px", // Adjust height according to the icon's size on the image
            }}
          ></div>
          {/* Add more clickable areas for other icons as needed */}
        </div>
      </div>
    </div>
  );
};

export default Border;
