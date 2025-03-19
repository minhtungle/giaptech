
"use client";
import Link from 'next/link';
import Image from 'next/image';


function Footer() {
  return (
    <div>

        <footer className="footer-area footer-style-one-wrapper bg-color-footer bg_images tmp-section-gap">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="subscribe-area subscribe-style-1">
                    <div className="subscribe-inner">
                    <div className="title">Subscribe to Newsletter</div>
                    <form action="#" className="newsletter-form-1 mt--40">
                        <input type="email" placeholder="Your Email" required="" />
                        <button type="submit" className="tmp-btn btn-primary">
                        Subscribe Now{" "}
                        <i className="fa-sharp fa-regular fa-paper-plane" />
                        </button>
                    </form>
                    </div>
                </div>
                </div>
            </div>
            <div className="footer-main footer-style-one">
                <div className="row g-5">
                <div className="col-lg-4 col-md-6">
                    <div className="single-footer-wrapper border-right mr--20">
                    <div className="logo">
                        <Link href="/">
                        <Image width={188} height={61} src="/assets/images/logo/logo-02.svg" alt="logo" />
                        </Link>
                    </div>
                    <p className="description">
                        Proin Pretium Sem Libero, Nec Aliquet Augue Lobortis In.
                        Phasellus Nibh Quam, Molestie Id Est Sit Amet, Luctus Pulvinar
                    </p>
                    <div className="day-time">
                        <div className="icon">
                        <i className="fa-solid fa-alarm-clock" />
                        </div>
                        <div className="content">
                        <div className="day">Sunday - Friday:</div>
                        <div className="time">9:00 AM – 8:00 PM</div>
                        </div>
                    </div>
                    <ul className="social-icons solid-social-icons rounded-social-icons">
                        <li>
                        <Link href="#">
                            <i className="fa-brands fa-facebook-f" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fa-brands fa-linkedin-in" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fa-brands fa-twitter" />
                        </Link>
                        </li>
                        <li>
                        <Link href="#">
                            <i className="fa-brands fa-instagram" />
                        </Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-2 col-md-6">
                    <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                    <h5 className="ft-title">Quick Link</h5>
                    <ul className="ft-link">
                        <li>
                        <Link href={'/About'}>About Company</Link>
                        </li>
                        <li>
                        <Link href={'/TeamOne'}>Meet Our Team</Link>
                        </li>
                        <li>
                        <Link href={'/Service'}>Our Services</Link>
                        </li>
                        <li>
                        <Link href={'/Blog'}>News &amp; Media</Link>
                        </li>
                        <li>
                        <Link href={'/Contact'}>Contact Us</Link>
                        </li>
                        <li>
                        <Link href={'/FaqOne'}>Support</Link>
                        </li>
                    </ul>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper pr--15">
                    <h5 className="ft-title">Recent Post</h5>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post.jpg"
                            alt="Business_Corporate"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" />
                            <span>12 Feb, 2022</span>
                        </div>
                        <Link href={'/BlogDetails'}>
                            <h6 className="title">
                            Day tree hide from hath gathered multy
                            </h6>
                        </Link>
                        </div>
                    </div>
                    <div className="single-post">
                        <div className="thumbnail">
                        <Image width={80} height={80}
                            src="/assets/images/footer/small-post-2.jpg"
                            alt="Business_Corporate"
                        />
                        </div>
                        <div className="content">
                        <div className="date">
                            <i className="fa-light fa-calendar-days" />
                            <span>12 Feb, 2022</span>
                        </div>
                        <Link href={'/BlogDetails'}>
                            <h6 className="title">
                            Saving Time Achieving Success in Business
                            </h6>
                        </Link>
                        </div>
                    </div>
                    </div>
                </div>
                <div className="col-lg-3 col-md-6">
                    <div className="single-footer-wrapper">
                    <h5 className="ft-title">Official info:</h5>
                    <ul className="ft-link">
                        <li className="ft-location">
                        5919 Trussville Crossings Pkwy, new Dusting town, Austria
                        </li>
                        <li>
                        <div className="single-contact">
                            <div className="icon">
                            <i className="fa-solid fa-envelope-open-text" />
                            </div>
                            <div className="content">
                            <span>E-mail:</span>
                            <Link href="mailto:webmaster@example.com">
                                info@uibundle.com
                            </Link>
                            </div>
                        </div>
                        </li>
                        <li>
                        <div className="single-contact">
                            <div className="icon">
                            <i className="fa-light fa-phone" />
                            </div>
                            <div className="content">
                            <span>Phone:</span>
                            <Link href="tel:+4733378901">+123 34598768</Link>
                            </div>
                        </div>
                        </li>
                    </ul>
                    </div>
                </div>
                </div>
            </div>
            </div>
        </footer>
        <div className="copyright-area-one">
            <div className="container">
            <div className="row">
                <div className="col-lg-12">
                <div className="main-wrapper">
                    <p>
                    © Copyright 2024. All Rights Reserved by{" "}
                    <Link href="#">Themes-Park</Link>
                    </p>
                </div>
                </div>
            </div>
            </div>
        </div>
        
    </div>
  )
}

export default Footer