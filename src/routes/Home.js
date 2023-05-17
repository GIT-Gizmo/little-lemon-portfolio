import React from 'react';
import HeaderElement from '../components/HeaderElement';
import HeroSection from '../components/HeroSection';
import Specials from '../components/Specials';
import Testimonials from '../components/Testimonials';
import Footer from '../components/Footer';

const Home = () => {
  return (
    <>
      <HeaderElement />
      <HeroSection />
      <Specials />
      <div className="App">
      <header className="App-header">
        <h1>Testimonials</h1>
        <Testimonials />
      </header>
    </div>
      <Footer />
    </>
  )
}

export default Home
