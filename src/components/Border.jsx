import React from "react";

const Border = ({ children }) => {
  return (
    <div className="iphone14">
      <div className="iphone14-inner">
        <div className="iphone14-notch"></div>
        <div className="iphone14-screen">{children}</div>
        <div className="iphone14-speaker"></div>
        <div className="iphone14-buttons"></div>
      </div>
    </div>
  );
};

export default Border;
