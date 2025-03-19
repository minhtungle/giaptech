
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import ServiceOne from "@/components/service/ServiceOne"
import ProcessFour from "@/components/workingprocess/ProcessFour"
import TeamOne from "@/components/team/TeamOne"
import TestimonialsOne from "@/components/testimonials/TestimonialsOne"

function page() {
  return (
    <div className="index-one">
        <HeaderInner/>
        <Breadcrumb title="Our Service" activeItem="Our Service" />
        <ServiceOne/>
        <ProcessFour/>
        <TeamOne/>
        <TestimonialsOne/>
        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page