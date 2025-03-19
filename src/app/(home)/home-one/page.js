"use client"
import BannerOne from "@/components/banner/BannerOne"
import Header from "@/components/header/HeaderOne"
import AboutOne from "@/components/about/AboutOne"
import ServiceOne from "@/components/service/ServiceOne"
import WorkingProcess from "@/components/workingprocess/ProcessOne"
import PortfolioOne from "@/components/portfolio/PortfolioOne"
import FaqOne from "@/components/faq/FaqOne"
import FunfactsOne from "@/components/funfacts/FunfactsOne"
import TeamOne from "@/components/team/TeamOne"
import TestimonialsBrand from "@/components/testimonials/TestimonialsOne"
import ContactOne from "@/components/contact/ContactOne"
import Blog from "@/components/blog/Blog"
import FooterOne from "@/components/footer/FooterOne"
import BackToTop from "@/components/footer/BackToTop"
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