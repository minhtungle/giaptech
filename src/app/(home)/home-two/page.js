'use client';
import AboutTwo from "@/components/temp/about/AboutTwo"
import BannerTwo from "@/components/temp/banner/BannerTwo"
import BlogTwo from "@/components/temp/blog/BlogTwo"
import ContactTwo from "@/components/temp/contact/ContactTwo"
import FaqTwo from "@/components/temp/faq/FaqTwo"
import BackTop from "@/components/temp/footer/BackToTop"
import FooterTwo from "@/components/temp/footer/FooterTwo"
import HeaderTwo from "@/components/temp/header/HeaderTwo"
import PortfolioTwo from "@/components/temp/portfolio/PortfolioTwo"
import Pricing from "@/components/temp/pricing/Pricing"
import ServiceTwo from "@/components/temp/service/ServiceTwo"
import TestimonialsTwo from "@/components/temp/testimonials/TestimonialsTwo"
import WhychooseUs from "@/components/temp/whychoose/WhychoseUs"
import { useEffect } from 'react';
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
    <div className="index-two">
      <HeaderTwo />
      <BannerTwo />
      <ServiceTwo />
      <AboutTwo />
      <FaqTwo />
      <PortfolioTwo />
      <Pricing />
      <WhychooseUs />
      <TestimonialsTwo />
      <BlogTwo />
      <ContactTwo />
      <FooterTwo />
      <BackTop />
    </div>
  )
}

export default HomePage