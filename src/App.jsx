
import React from 'react';
import './App.css'; 
import Wallpaper from './components/Wallpaper'; 
import Header from './components/header/Header'; 
import MainBody from './components/body/MainBody';
import TopCategories from './components/body/TopCatagories';
import FeaturedProducts from './components/body/FeaturedProducts';
import AboutUs from './components/footer/AboutUs';
import Newsletter from './components/footer/Newsletter';
import ContactUs from './components/footer/ContactUs';
import Footer from './components/footer/Footer';


const App = () => {
  return (
    <div className="App">
      <Header /> 
      <MainBody />
      <TopCategories />
      <FeaturedProducts />
      <AboutUs />
      <Newsletter />
      <ContactUs />
      <Footer />
    </div>
  );
};

export default App;
