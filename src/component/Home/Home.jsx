import React from 'react';
import Banner from './component/Banner';
import About from './component/About';
import Testimonials from './component/Testimonials';
import Weteach from './component/We_teach';
import Why from './component/Why';
import Mission from './component/Mission';
import Inquire from './component/Inquire';
import Services from './component/Services';


export default function Home() {
  return (
    <>
    <Banner />
    <Services />
    <About />
    <Testimonials />
    <Weteach />
    <Why />
    <Mission />
    <Inquire />
    </>
  )
}

