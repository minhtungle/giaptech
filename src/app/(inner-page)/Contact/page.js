
import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"
import Link from 'next/link';


function page() {
    return (
        <div className="service-details contact-page">
            <HeaderInner />
            <Breadcrumb title="Contact With Us" activeItem="Contact With Us" />


            {/* tmp contact area */}
            <div className="contact-area tmp-section-gap">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-5">
                            <div className="contact-inner">
                                <div className="section-head section-head-one-side text-align-left">
                                    <span className="title">Contact Us</span>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                                    </p>
                                </div>
                                <ul className="ft-link ft-link-style-three">
                                    <li>
                                        <div className="single-contact background-transparent">
                                            <div className="icon">
                                                <i className="fa-light fa-phone" />
                                            </div>
                                            <div className="content">
                                                <span>Call Us</span>
                                                <Link className="contact-here" href="tel:+4733378901">
                                                    +123 34598768
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact background-transparent">
                                            <div className="icon">
                                                <i className="fa-solid fa-envelope-open-text" />
                                            </div>
                                            <div className="content">
                                                <span>E-mail</span>
                                                <Link
                                                    className="contact-here"
                                                    href="mailto:webmaster@example.com"
                                                >
                                                    info@uibundle.com
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="single-contact background-transparent">
                                            <div className="icon">
                                                <i className="fa-regular fa-map-location-dot" />
                                            </div>
                                            <div className="content">
                                                <span>Address</span>
                                                <Link className="contact-here" href="#">
                                                    25/5 Double Street, Texas Houston USA
                                                </Link>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                                <div className="tmp-tag-list tag-list-one">
                                    <Link className="tag-list" href="#">
                                        Facebook
                                    </Link>
                                    <Link className="tag-list" href="#">
                                        Twitter
                                    </Link>
                                    <Link className="tag-list" href="#">
                                        Linkedin
                                    </Link>
                                    <Link className="tag-list" href="#">
                                        Skype
                                    </Link>
                                    <Link className="tag-list" href="#">
                                        Pinterest
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7">
                            <div className="contact-inner">
                                <div className="section-head section-head-one-side text-align-left">
                                    <span className="title">GET IN TOUCH</span>
                                    <p className="description">
                                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolor magnaaliqua.
                                    </p>
                                </div>
                                <div className="contact-form style-two">
                                    <div id="form-messages" />
                                    <form id="contact-form">
                                        <div className="contact-form-wrapper row">
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        className="input-field"
                                                        name="name"
                                                        placeholder="Name"
                                                        id="contact-name"
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        className="input-field"
                                                        name="phone"
                                                        placeholder="Phone"
                                                        type="text" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        className="input-field"
                                                        name="email"
                                                        placeholder="Email"
                                                        type="email" />
                                                </div>
                                            </div>
                                            <div className="col-lg-6">
                                                <div className="form-group">
                                                    <input
                                                        className="input-field"
                                                        name="subject"
                                                        placeholder="Subject"
                                                        type="text" required
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-group">
                                                    <textarea
                                                        className="input-field"
                                                        name="message"
                                                        placeholder="How can we help" id="contact-message"
                                                    />
                                                </div>
                                            </div>
                                            <div className="col-lg-12">
                                                <div className="form-submit-group">
                                                    <button className="tmp-btn btn-primary" type="submit">
                                                        Submit Now
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* tmp contact area */}
            <div className="tmp-map-area tmp-sectiongapBottom">
                <div className="map-area-flotimg-container">
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56516.2859130569!2d85.24819285450387!3d27.709014520769113!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb198a307baabf%3A0xb5137c1bf18db1ea!2sKathmandu%2044600%2C%20Nepal!5e0!3m2!1sen!2sbd!4v1714324837639!5m2!1sen!2sbd"
                        width={600}
                        height={650}
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    />
                </div>
            </div>


            <FooterOne />
            <BackTop />

        </div>
    )
}

export default page