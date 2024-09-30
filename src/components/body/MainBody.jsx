import React from 'react';
import './MainBody.css'; 
import stamp from '../images/WhatsApp Image 2024-09-19 at 19.13.25_9c1e69b9.jpg'

const MainBody = () => {
  return (
    <div className="main-body">
      
      <div className="full-width-image-container">
        <img
          src={stamp}  
          alt="Full Width"
          className="full-width-image"
        />
      </div>
      
      
      <div className="other-content">
        <h1>Welcome to the Page</h1>
      </div>
    </div>
  );
};

export default MainBody;
