import React from 'react';
import './TopCategories.css';

const TopCategories = () => {
  const categories = [
    {
      id: 1,
      title: "Miniature Sheets",
      productCount: 1312,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/miniature-cate.png",
    },
    {
      id: 2,
      title: "Worldwide FDC & Covers",
      productCount: 4459,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/12/world-fdc-cate.png",
    },
    {
      id: 3,
      title: "British India Stamps",
      productCount: 3731,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/british-cate-1.png",
    },
    {
      id: 4,
      title: "Indian Stamps",
      productCount: 12560,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/india-stamps-cate-14.png",
    },
    {
      id: 5,
      title: "India FDC, Special Covers & IF",
      productCount: 739,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/fdc-cate-1.png",
    },
    {
      id: 6,
      title: "Indian Blocks",
      productCount: 1288,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/blocks-cate-1.png",
    },
    {
      id: 7,
      title: "Banknotes",
      productCount: 779,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2020/08/note-bank-ctae-1.png",
    },
    {
      id: 8,
      title: "British India Coins",
      productCount: 51,
      imageUrl: "https://media.dharaastamps.co.in/wp-content/uploads/2023/03/woocommerce-placeholder-640x640.png",
    },
  ];

  return (
    <div className="top-categories">
      <div className="title-wrapper">
        <h4 className="title">TOP CATEGORIES</h4>
      </div>
      <div className="categories-carousel">
        {categories.map((category) => (
          <div key={category.id} className="category-item">
            <div className="category-image-wrapper">
              <a href={category.link}>
                <img src={category.imageUrl} alt={category.title} />
              </a>
            </div>
            <div className="hover-mask">
              <h3 className="category-title">
                {category.title} <mark className="count">({category.productCount})</mark>
              </h3>
              <div className="more-products">
                <a href={category.link}>{category.productCount} products</a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopCategories;
