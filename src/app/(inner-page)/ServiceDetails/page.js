
import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"
import ServiceDetails from "@/components/temp/service/ServiceDetails"


import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"

function SerViceDetails() {
  return (
    <div className="index-one">
      <HeaderInner />
      <Breadcrumb title="Service Details" activeItem="Service Details" />
      <ServiceDetails />

      <FooterOne />
      <BackTop />

    </div>
  )
}

export default SerViceDetails