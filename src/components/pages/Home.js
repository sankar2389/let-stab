import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import Collage from '../Collage';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Slider from '../Slider';
import ImagePopup from '../ImagePopup';
import Gallery from '../Gallery';


function Home() {
  return (
    <>
      <HeroSection />
      <Slider/>
      {/* <Cards /> */}
      {/* <Collage/> */}
      {/* <ImagePopup/> */}
      <Gallery/>
      <Footer />
    </>
  );
}

export default Home;
