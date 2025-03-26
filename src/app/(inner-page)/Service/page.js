
import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"
import ServiceOne from "@/components/temp/service/ServiceOne"
import ProcessFour from "@/components/temp/workingprocess/ProcessFour"
import TeamOne from "@/components/temp/team/TeamOne"
import TestimonialsOne from "@/components/temp/testimonials/TestimonialsOne"

function page() {
  return (
    <div className="index-one">
      <HeaderInner />
      <Breadcrumb title="Our Service" activeItem="Our Service" />
      <ServiceOne />
      <ProcessFour />
      <TeamOne />
      <TestimonialsOne />
      <FooterOne />
      <BackTop />

    </div>
  )
}

export default page