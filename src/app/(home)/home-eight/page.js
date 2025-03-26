'use client';
import { useEffect } from 'react';
import HeaderFive from "@/components/temp/header/HeaderFive"
import BannerEight from "@/components/temp/banner/BannerEight"
import ServiceFour from "@/components/temp/service/ServiceFour"
import FunfactsThree from "@/components/temp/funfacts/FunfactsThree"
import BackToTop from "@/components/temp/footer/BackToTop"
import AboutSix from "@/components/temp/about/AboutSix"
import PortfolioSeven from '@/components/temp/portfolio/PortfolioSeven';
import BrandTwo from "@/components/temp/brand/BrandTwo"
import FooterThree from '@/components/temp/footer/FooterThree';
import AOS from 'aos';

function HomePageEight() {
  useEffect(() => {
    AOS.init({
      duration: 1200,  // Animation duration in ms
      once: true,  // Whether animation should happen only once
      offset: 20,
    });
  }, []);
  return (
    <div className="index-eight">
      <HeaderFive />
      <BannerEight />
      <ServiceFour />
      <AboutSix />
      <FunfactsThree />
      <PortfolioSeven />
      <BrandTwo />
      <FooterThree />



      <BackToTop />
    </div>
  )
}

export default HomePageEight