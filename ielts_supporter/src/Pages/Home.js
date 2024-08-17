import React from 'react';
import '../App.css';
import Cards from '../components/Cards';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import CardsReading from '../components/CardsReading';

function Home() {
  return (
    <>
      <HeroSection />
      <Cards />
      <CardsReading/>
      <Footer />
    </>
  );
}

export default Home;