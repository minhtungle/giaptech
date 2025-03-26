
'use client';
import { useEffect } from 'react';
import HeaderFour from "@/components/temp/header/HeaderFour"
import BannerFive from "@/components/temp/banner/BannerFive"
import AboutOne from "@/components/temp/about/AboutOne"
import ServiceFive from "@/components/temp/service/ServiceFive"
import PortfolioFive from '../../../components/temp/portfolio/PortfolioFive';
import ProcessTwo from "@/components/temp/workingprocess/ProcessTwo"
import BlogFive from "@/components/temp/blog/BlogFive"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop";
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

      <HeaderFour />
      <BannerFive />
      <AboutOne />
      <ServiceFive />
      <PortfolioFive />
      <ProcessTwo />
      <BlogFive />
      <FooterOne />
      <BackTop />

    </div>
  )
}

export default HomePage