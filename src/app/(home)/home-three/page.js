
'use client';
import { useEffect } from 'react';
import HeaderThree from "@/components/temp/header/HeaderThree"
import BannerThree from "@/components/temp/banner/BannerThree"
import ServiceThree from "@/components/temp/service/ServiceThree"
import Skill from "@/components/temp/skill/Skill"
import AboutThree from "@/components/temp/about/AboutThree"
import PortfolioThree from "@/components/temp/portfolio/PortfolioThree"
import ContactThree from "@/components/temp/contact/ContactThree"
import TestimonialsThree from "@/components/temp/testimonials/TestimonialsThree"
import LargeVideo from "@/components/temp/video/LargeVideo"
import BlogThree from "@/components/temp/blog/BlogThree"
import CtaOne from "@/components/temp/cta/CtaOne"
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
    <div className="index-three">

      <HeaderThree />
      <BannerThree />
      <ServiceThree />
      <Skill />
      <AboutThree />
      <PortfolioThree />
      <ContactThree />
      <TestimonialsThree />
      <LargeVideo />
      <BlogThree />
      <CtaOne />
      <FooterOne />
      <BackTop />

    </div>
  )
}

export default HomePage