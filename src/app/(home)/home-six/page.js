
'use client';
import { useEffect } from 'react';
import BannerSix from "@/components/temp/banner/BannerSix"
import Header from "@/components/temp/header/HeaderFour"
import AboutOne from "@/components/temp/about/AboutOne"
import ServiceFive from "@/components/temp/service/ServiceFive"
import PortfolioFour from "@/components/temp/portfolio/PortfolioFour"
import WorkingProcess from "@/components/temp/workingprocess/ProcessOne"
import TestimonialsOne from "@/components/temp/testimonials/TestimonialsOne"
import ContactOne from "@/components/temp/contact/ContactOne"
import TeamOne from "@/components/temp/team/TeamOne"
import BlogFive from "@/components/temp/blog/BlogFive"
import FooterThree from "@/components/temp/footer/FooterThree"
import BackTop from "@/components/temp/footer/BackToTop"

function HomePage() {
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Safely using `window`
      console.log('Window is available:', window.location.href);
    } else {
      console.log('Window is not available');
    }
  }, []);
  return (
    <div className="index-Six">
      <Header />
      <BannerSix />
      <AboutOne />
      <ServiceFive />
      <PortfolioFour />
      <WorkingProcess />
      <TestimonialsOne />
      <ContactOne />
      <TeamOne />
      <BlogFive />
      <FooterThree />
      <BackTop />
    </div>
  )
}

export default HomePage