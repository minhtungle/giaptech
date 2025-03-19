
import HeaderInner from "@/components/header/HeaderInner"
import Breadcrumb from "@/components/breadcrumb/Breadcrumb"
import FooterOne from "@/components/footer/FooterOne"
import BackTop from "@/components/footer/BackToTop"
import Link from 'next/link';
function page() {
  return (
    <div className="service-details appoinment-inner-page">
        <HeaderInner/>
        <Breadcrumb title="Team Members" activeItem="Team Members" />
         
        <div className="team-area tmp-section-gap bg-white">
            <div className="container">
                <div className="row g-5">
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-2.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-3.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-1.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-4.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-5.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-6 col-12">
                    <div className="single-team">
                    <Link href={'/TeamDetails'}
                        data-tmp-cursor="lg"
                        data-tmp-cursor-text="View Details"
                        className="thumbnail"
                    >
                        <img src="assets/images/team/team-6.png" alt="Corporate team" />
                    </Link>
                    <div className="content">
                        <div className="team-name content-with-bg">
                        <Link href={'/TeamDetails'}  className="name-area">
                            <h6 className="name">Clade Owen</h6>
                        </Link>
                        <div className="designation">CEO &amp; Founder</div>
                        </div>
                        <div className="share-icon-style-one">
                        <ul className="social-icons social-icons-with-bg">
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-facebook-f" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-linkedin-in" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-twitter" />
                            </Link>
                            </li>
                            <li>
                            <Link href={'/TeamDetails'} >
                                <i className="fa-brands fa-instagram" />
                            </Link>
                            </li>
                        </ul>
                        <i className="fa-sharp fa-solid fa-share-nodes" />
                        </div>
                    </div>
                    </div>
                </div>
                </div>
            </div>
        </div>





        <FooterOne/>
        <BackTop/>
        
    </div>
  )
}

export default page