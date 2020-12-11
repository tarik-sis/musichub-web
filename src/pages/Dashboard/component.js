import React from 'react';

import ScrollToTop from '../../layouts/helper/ScrollToTop';
import Navbar from '../../layouts/Navbar';
import FirstSection from './sections/section1';
import SecomdSection from './sections/section2';
import ThirdSection from './sections/section3';
import FourthSection from './sections/section4';
import FifthSection from './sections/section5';
import SixthSection from './sections/section6';
import SeventhSection from './sections/section7';
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
      <FifthSection />
      <SixthSection />
      <SeventhSection />
      <Footer />
    </>
  );
};

export default component;
