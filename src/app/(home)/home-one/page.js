"use client"
import BannerOne from "@/components/temp/banner/BannerOne"
import Header from "@/components/temp/header/HeaderOne"
import AboutOne from "@/components/temp/about/AboutOne"
import ServiceOne from "@/components/temp/service/ServiceOne"
import WorkingProcess from "@/components/temp/workingprocess/ProcessOne"
import PortfolioOne from "@/components/temp/portfolio/PortfolioOne"
import FaqOne from "@/components/temp/faq/FaqOne"
import FunfactsOne from "@/components/temp/funfacts/FunfactsOne"
import TeamOne from "@/components/temp/team/TeamOne"
import TestimonialsBrand from "@/components/temp/testimonials/TestimonialsOne"
import ContactOne from "@/components/temp/contact/ContactOne"
import Blog from "@/components/temp/blog/Blog"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackToTop from "@/components/temp/footer/BackToTop"
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
    <div className="index-one">
      <Header />
      <BannerOne />
      <AboutOne />
      <ServiceOne />
      <WorkingProcess />
      <PortfolioOne />
      <FaqOne />
      <FunfactsOne />
      <TeamOne />
      <TestimonialsBrand />
      <ContactOne />
      <Blog />
      <FooterOne />
      <BackToTop />
    </div>
  )
}

export default HomePage