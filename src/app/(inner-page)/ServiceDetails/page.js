
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import ServiceDetails from "@/components/service/ServiceDetails"


import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"

function SerViceDetails() {
  return (
    <div className="index-one">
        <HeaderInner/>
        <Breadcrumb title="Service Details" activeItem="Service Details" />
        <ServiceDetails/>

        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default SerViceDetails