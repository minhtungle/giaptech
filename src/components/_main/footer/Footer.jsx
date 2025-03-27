
"use client";
import Link from 'next/link';
import Image from 'next/image';
import info from "@/data/info.json";

function Footer() {
    const productList = [
        {
            name: "Doanh nghiệp",
            link: "/Product/Business"
        },
        {
            name: "Cá nhân",
            link: "/Product/Personal"
        },
        {
            name: "Nhà cửa & Nội thất",
            link: "/Product/Home-Furniture"
        },
        {
            name: "F&B",
            link: "/Product/Food-Beverage"
        },
        {
            name: "Thời trang & Mỹ phẩm",
            link: "/Product/Fashion-Beauty"
        },
        {
            name: "Công nghệ & Điện tử",
            link: "/Product/Tech-Electronics"
        },
        {
            name: "Giáo dục & Học tập",
            link: "/Product/Education-Learning"
        },
        {
            name: "Thể thao & Sức khỏe",
            link: "/Product/Sports-Health"
        },
        {
            name: "Du lịch & Khách sạn",
            link: "/Product/Travel-Hospitality"
        },
        {
            name: "Nghệ thuật & Giải trí",
            link: "/Product/Art-Entertainment"
        },
        {
            name: "Bất động sản",
            link: "/Product/Real-Estate"
        },
        {
            name: "Dịch vụ tài chính",
            link: "/Product/Finance-Services"
        },
        {
            name: "Nông nghiệp",
            link: "/Product/Agriculture"
        },
        {
            name: "Ô tô & Xe máy",
            link: "/Product/Automotive"
        },
        {
            name: "Y tế & Chăm sóc sức khỏe",
            link: "/Product/Healthcare"
        }
    ];
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
                                        Thiết kế website chuyên nghiệp, nâng tầm thương hiệu
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
                                            <Link href={info.social.facebook}>
                                                <i className="fa-brands fa-facebook-f" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={info.social.facebook}>
                                                <i className="fa-brands fa-linkedin-in" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={info.social.facebook}>
                                                <i className="fa-brands fa-twitter" />
                                            </Link>
                                        </li>
                                        <li>
                                            <Link href={info.social.facebook}>
                                                <i className="fa-brands fa-instagram" />
                                            </Link>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 col-md-6">
                                <div className="single-footer-wrapper pl-50 pl_md--0 pl_sm--0">
                                    <h5 className="ft-title">Sản phẩm</h5>
                                    <div className="row">
                                        {/* Cột 1 */}
                                        <div className="col-lg-6 col-md-6">
                                            <ul className="ft-link">
                                                {productList.slice(0, Math.ceil(productList.length / 2)).map((item, index) => (
                                                    <li key={index} style={{ listStyleType: "disc", marginLeft: "20px" }}>
                                                        <Link href={item.link}>{item.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        {/* Cột 2 */}
                                        <div className="col-lg-6 col-md-6">
                                            <ul className="ft-link">
                                                {productList.slice(Math.ceil(productList.length / 2)).map((item, index) => (
                                                    <li key={index} style={{ listStyleType: "disc", marginLeft: "20px" }}>
                                                        <Link href={item.link}>{item.name}</Link>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-3 col-md-6">
                                <div className="single-footer-wrapper">
                                    <h5 className="ft-title">Thông tin liên hệ</h5>
                                    <ul className="ft-link">
                                        <li className="ft-location">
                                            {info.address}
                                        </li>
                                        <li>
                                            <div className="single-contact">
                                                <div className="icon">
                                                    <i className="fa-solid fa-envelope-open-text" />
                                                </div>
                                                <div className="content">
                                                    <span>Email:</span>
                                                    <Link href="mailto:webmaster@example.com">
                                                        {info.email}
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
                                                    <span>Số điện thoại:</span>
                                                    <Link href="tel:+4733378901">{info.phone}</Link>
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