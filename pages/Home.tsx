import React from 'react';
import Hero from '../components/Hero';
import Services from '../components/Services';
import Testimonials from '../components/Testimonials';
import FAQ from '../components/FAQ';
import ContactForm from '../components/ContactForm';

const Home: React.FC = () => {
  return (
    <div className="bg-dark-950">
      <Hero />
      <Services />
      <Testimonials />
      <FAQ />
      <ContactForm />
    </div>
  );
};

export default Home;