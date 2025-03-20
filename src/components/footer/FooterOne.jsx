
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
                                    <div className="title">Đăng ký nhận thông báo</div>
                                    <form action="#" className="newsletter-form-1 mt--40">
                                        <input type="email" placeholder="Email của bạn" required="" />
                                        <button type="submit" className="tmp-btn btn-primary">
                                            Đăng ký ngay{" "}
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
                                            <Image width={188} height={61} src="/assets/images/logo/logo.png" alt="logo" />
                                        </Link>
                                    </div>
                                    <p className="description">
                                        Giap Technologies - Thiết kế website chuyên nghiệp, nâng tầm thương hiệu
                                    </p>
                                    <div className="day-time">
                                        <div className="icon">
                                            <i className="fa-solid fa-alarm-clock" />
                                        </div>
                                        <div className="content">
                                            <div className="day">Thứ 2 - Thứ 7:</div>
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
                                            Hà Nội, Việt Nam
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="icon">
                                                    <i className="fa-solid fa-envelope-open-text" />
                                                </div>
                                                <div className="content">
                                                    <span>Email:</span>
                                                    <Link href="mailto:webmaster@example.com">
                                                        giaptech@gmail.com
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
                                                    <Link href="tel:+4733378901">+84 (0)35 2986 312</Link>
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
                                    <Link href="#">Giap Industries</Link>
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