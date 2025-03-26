'use client';
import { useEffect } from 'react';
import BannerSeven from "@/components/temp/banner/BannerSeven"
import HeaderFour from "@/components/temp/header/HeaderFour"
import BackToTop from "@/components/temp/footer/BackToTop"
import ServiceSix from "@/components/temp/service/ServiceSix"
import AboutFive from "@/components/temp/about/AboutFive"
import FunFacts from "@/components/temp/funfacts/FunfactsTwo"
import ProcessThree from "@/components/temp/workingprocess/ProcessThree"
import PortfolioSix from "@/components/temp/portfolio/PortfolioSix"
import FaqThree from "@/components/temp/faq/FaqThree"
import TeamFour from "@/components/temp/team/TeamThree"
import LargeVideoTwo from "@/components/temp/video/LargeVideoTwo"
import TestimonialsOne from '@/components/temp/testimonials/TestimonialsOne';
import ContactOne from '@/components/temp/contact/ContactOne';
import CtaTwo from '@/components/temp/cta/CtaTwo';
import BlogSix from '@/components/temp/blog/BlogSix';
import FooterOne from '@/components/temp/footer/FooterOne';
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
    <div className="index-seven">
      <HeaderFour />
      <BannerSeven />
      <ServiceSix />
      <AboutFive />
      <FunFacts />
      <ProcessThree />
      <PortfolioSix />
      <FaqThree />
      <TeamFour />
      <LargeVideoTwo />
      <TestimonialsOne />
      <ContactOne />
      <CtaTwo />
      <BlogSix />
      <FooterOne />



      <BackToTop />
    </div>
  )
}

export default HomePage