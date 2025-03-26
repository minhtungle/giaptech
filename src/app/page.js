
'use client';
import { useEffect } from 'react';
import Header from "@/components/_main/header/Header"
import Banner from "@/components/_main/banner/Banner"
import About from "@/components/_main/about/About"
import Service from "@/components/_main/service/Service"
import Portfolio from '@/components/_main/portfolio/Portfolio';
import WorkingProcess from "@/components/_main/workingprocess/WorkingProcess"
import Testimonials from "@/components/_main/testimonials/Testimonials"
import Footer from "@/components/_main/footer/Footer"
import BackTop from "@/components/_main/footer/BackToTop";
import AOS from 'aos';

function HomePage() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Whether animation should happen only once
      offset: 20,
    });
  }, []);
  return (
    <div className="index-Five">
      <Header />
      <Banner />
      <About />
      <Service />
      <Portfolio />
      <WorkingProcess />
      <Testimonials />
      <Footer />
      <BackTop />
    </div>
  )
}

export default HomePage