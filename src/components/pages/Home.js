import React from 'react';
import '../../App.css';
import Cards from '../Cards';
import HeroSection from '../HeroSection';
import Footer from '../Footer';
import Testimonials from '../Testimonials';
import Partners from '../Partners';
import Services from '../Services';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <Testimonials/>
      <Partners/>
      <Services/>
      <Footer />

      
      {/* <Demo /> */}
    </>
  );
}

export default Home;
