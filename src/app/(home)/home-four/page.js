'use client';
import { useEffect } from 'react';
import BannerFour from "@/components/temp/banner/BannerFour"
import HeaderFour from "@/components/temp/header/HeaderFour"
import ServiceFour from "@/components/temp/service/ServiceFour"
import BrandOne from "@/components/temp/brand/BrandOne"
import AboutFour from "@/components/temp/about/AboutFour"
import ServiceFIve from "@/components/temp/service/ServiceFive"
import PortfolioFour from "@/components/temp/portfolio/PortfolioFour"
import CounterOne from "@/components/temp/counterup/CounterOne"
import ContactFour from "@/components/temp/contact/ContactFour"
import BlogFour from "@/components/temp/blog/BlogFour"
import TestimonialsFour from "@/components/temp/testimonials/TestimonialsFour"
import TeamTwo from "@/components/temp/team/TeamTwo"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"
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
    <div className="index-four">

      <HeaderFour />
      <BannerFour />
      <ServiceFour />
      <BrandOne />
      <AboutFour />
      <ServiceFIve />
      <PortfolioFour />
      <CounterOne />
      <ContactFour />
      <BlogFour />
      <TestimonialsFour />
      <TeamTwo />
      <FooterOne />
      <BackTop />


    </div>
  )
}

export default HomePage