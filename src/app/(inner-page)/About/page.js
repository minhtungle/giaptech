import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"
import AboutOne from "@/components/temp/about/AboutOne"
import ProcessThree from "@/components/temp/workingprocess/ProcessThree"
import TeamFour from "@/components/temp/team/TeamFour"
import TestimonialsOne from "@/components/temp/testimonials/TestimonialsOne"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"

function page() {
  return (
    <div className="index-one">
      <HeaderInner />
      <Breadcrumb title="About Us" activeItem="About Us" />
      <AboutOne />
      <ProcessThree />
      <TeamFour />
      <TestimonialsOne />
      <FooterOne />
      <BackTop />

    </div>
  )
}

export default page