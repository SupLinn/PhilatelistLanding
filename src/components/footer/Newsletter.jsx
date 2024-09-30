
import React from 'react';
import './Newsletter.css';

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h2 className="newsletter-title">Subscribe to Our Newsletter</h2>
      <p className="newsletter-description">
        Stay updated with our latest collections and offers.
      </p>
      <form className="newsletter-form">
        <input type="email" placeholder="Your Email" className="form-input" />
        <button type="submit" className="form-button">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;
