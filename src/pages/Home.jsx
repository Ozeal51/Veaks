import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Hero from '../components/Hero/Hero';
import TrustedCompanies from '../components/TrustedCompanies/TrustedCompanies';
import About from '../components/About/About';
import Services from '../components/Services/Services';
import WhyChooseUs from '../components/WhyChooseUs/WhyChooseUs';
import Statistics from '../components/Statistics/Statistics';
import Process from '../components/Process/Process';
import Portfolio from '../components/Portfolio/Portfolio';
import Testimonials from '../components/Testimonials/Testimonials';
import CTA from '../components/CTA/CTA';
import Footer from '../components/Footer/Footer';

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <TrustedCompanies />
      <About />
      <Services />
      <WhyChooseUs />
      <Statistics />
      <Process />
      <Portfolio />
      <Testimonials />
      <CTA />
      <Footer />
    </>
  );
};

export default Home;
