import React from 'react';

import HeroPage from '../components/HeroPage';
import Tools from '../components/Tools';
import Testimonials from '../components/Testimonials';
import Counters from '../components/Counters';
import Bio from '../components/Bio';
import Footer from '../components/Footer';

const LandingPage = () => {
  return (
    <React.Fragment>
      <HeroPage />
      <Tools />
      <Testimonials />
      <Counters />
      <Bio />
      <Footer />
    </React.Fragment>
  );
};

export default LandingPage;
