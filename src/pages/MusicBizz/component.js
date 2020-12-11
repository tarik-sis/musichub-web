import React from 'react';

import ScrollToTop from '../../layouts/helper/ScrollToTop';
import Navbar from '../../layouts/Navbar';
import FirstSection from './sections/section1';
import SecomdSection from './sections/section2';
import ThirdSection from './sections/section3';
import FourthSection from './sections/section4';
import Footer from '../../layouts/Footer';

const component = () => {
  return (
    <>
      <ScrollToTop />
      <Navbar />
      <FirstSection />
      <SecomdSection />
      <ThirdSection />
      <FourthSection />
      <Footer />
    </>
  );
};

export default component;
