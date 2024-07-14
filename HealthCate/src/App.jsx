import React from 'react';
import Header from './sections/Header';
import Hero from './sections/Hero';
import Services from './sections/Services';
import About from './sections/About';
import WhyChooseUs from './sections/Why-Choose-Us';
import OurTeam from './sections/Our-Team';
import Subscribe from './sections/Subscribe';
import Footer from './sections/Footer';

const App = () => (
  <main>
    <div className="">
      <Hero />
    </div>
    <div className="px-16 py-16">
      <Services />
    </div>
    <div className="px-16 py-16">
      <About />
    </div>
    <div className="">
      <OurTeam />
    </div>
    <div className="px-16 py-16">
      <WhyChooseUs/>
    </div>
    
    <div className="px-16 py-16">
      <Subscribe />
    </div>
    <div className="">
      <Footer />
    </div>
  </main>
);

export default App;
