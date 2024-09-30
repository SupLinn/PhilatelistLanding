// Header.jsx
import React, { useState } from 'react';
import './Header.css'; 
import logo from '../images/logo-removebg-preview.png'; 

const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
    
    console.log('Search submitted:', searchQuery);
  };

  return (
    <header className="App-header">
      <div className="header-content">
        <div className="logo">
          <img src={logo} alt="Logo" /> 
        </div>
        <form onSubmit={handleSearchSubmit} className="search-form">
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={handleSearchChange}
            className="search-input"
          />
          <button type="submit" className="search-button">Search</button>
        </form>
        <nav className="navigation">
          <a href="#home" className="nav-link">Home</a>
          <a href="#about" className="nav-link">About</a>
          <a href="#services" className="nav-link">Services</a>
          <a href="#contact" className="nav-link">Contact</a>
        </nav>
        <div className="auth-buttons">
          <button className="login-button">Login</button>
          <button className="signup-button">Signup</button>
        </div>
      </div>
      
      <div className="additional-content">
        <div className="dropdown">
          <label htmlFor="dropdown1" className="dropdown-label">STAMPS</label>
          <select id="dropdown1" className="dropdown-select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="dropdown2" className="dropdown-label">COINS</label>
          <select id="dropdown2" className="dropdown-select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="dropdown3" className="dropdown-label">BANKNOTES</label>
          <select id="dropdown3" className="dropdown-select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
        <div className="dropdown">
          <label htmlFor="dropdown4" className="dropdown-label">COLLECTABLES</label>
          <select id="dropdown4" className="dropdown-select">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </div>
    </header>
  );
};

export default Header;
