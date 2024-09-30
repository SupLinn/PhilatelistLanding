import React from 'react';
import './FeaturedProducts.css'; 
import product1 from '../images/WhatsApp Image 2024-09-30 at 02.18.36_2b9bf837.jpg'
import product2 from '../images/WhatsApp Image 2024-09-30 at 02.18.35_fa2050c1.jpg'
const FeaturedProduct = () => {
  return (
    <div className="featured-product-container">
      <h2 className="exclusive-collection-heading">EXCLUSIVE COLLECTION</h2>
      <h3 className="featured-products-heading">Featured Products</h3>

      <div className="featured-product-item">
        <img src={product2} alt="Product 1" />
        <h4 className="featured-product-title">Product 1</h4>
        <p className="featured-product-description">Description for Product 1</p>
        <p className="featured-product-price">₹299</p>
        <a href="#" className="featured-product-button">Buy Now</a>
      </div>

      <div className="featured-product-item">
        <img src={product1} alt="Product 2" />
        <h4 className="featured-product-title">Product 2</h4>
        <p className="featured-product-description">Description for Product 2</p>
        <p className="featured-product-price">₹499</p>
        <a href="#" className="featured-product-button">Buy Now</a>
      </div>
    </div>
  );
};

export default FeaturedProduct;
