import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import AboutOne from "@/components/about/AboutOne"
import ProcessThree from "@/components/workingprocess/ProcessThree"
import TeamFour from "@/components/team/TeamFour"
import TestimonialsOne from "@/components/testimonials/TestimonialsOne"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

function page() {
  return (
    <div className="index-one">
        <HeaderInner/>
        <Breadcrumb title="About Us" activeItem="About Us" />
        <AboutOne/>
        <ProcessThree/>
        <TeamFour/>
        <TestimonialsOne/>
        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page