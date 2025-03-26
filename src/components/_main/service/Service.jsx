"use client";
import React from 'react'
import Link from 'next/link';
function Service() {
    return (
        <div>
            <div className="service-area tmp-section-gapBottom">
                <div className="container">
                    <div className="row">
                        <div
                            className="col-lg-12">
                            <div className="section-head">
                                <div className="section-sub-title center-title">
                                    <img
                                        src="assets/images/services/section-custom-menubar.png "
                                        alt="Business_Consulting_services"
                                    />
                                    <span>VỀ SẢN PHẨM</span>
                                </div>
                                <h2 className="split-collab">Cam kết với khách hàng</h2>
                            </div>
                        </div>
                    </div>
                    <div className="row g-5">
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-6.svg"
                                        alt="corporate_Business_Services_agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Thiết kế chuyên nghiệp & Chuẩn UX/UI</h2>
                                    <p className="description text-start">
                                        🔹 Giao diện hiện đại, thân thiện với người dùng <br />
                                        🔹 Tối ưu trải nghiệm khách hàng, giúp tăng tỉ lệ chuyển đổi
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-1.svg"
                                        alt="corporate_Business_Services_agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Tốc độ tải trang nhanh, tối ưu SEO</h2>
                                    <p className="description text-start">
                                        🚀 Website load nhanh giúp giữ chân khách hàng <br />
                                        🔍 Chuẩn SEO giúp tăng thứ hạng trên Google
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-2.svg"
                                        alt="corporate_Business_Services_Agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Tương thích đa nền tảng (Responsive Design)</h2>
                                    <p className="description text-start">
                                        📱 Hiển thị hoàn hảo trên mọi thiết bị: Máy tính, điện thoại, tablet<br />
                                        💡 Tăng trải nghiệm người dùng, giữ chân khách hàng
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".1s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-3.svg"
                                        alt="corporate_Business_Services_agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Bảo mật cao, an toàn dữ liệu</h2>
                                    <p className="description text-start">
                                        🔐 SSL miễn phí, chống tấn công mạng <br />
                                        🔄 Sao lưu dữ liệu định kỳ, bảo vệ thông tin khách hàng
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".3s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-4.svg"
                                        alt="corporate_Business_Services_agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Dễ dàng quản lý & mở rộng</h2>
                                    <p className="description text-start">
                                        🛠️ Giao diện quản trị thân thiện, dễ dàng cập nhật nội dung <br />
                                        🔗 Hỗ trợ tích hợp các công cụ marketing và bán hàng
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div
                            className="col-lg-4 col-md-6 col-sm-6 col-12 wow fadeInUp" data-wow-duration=".8s" data-wow-delay=".5s">
                            <div className="service-inner financial-service-inner agency-service">
                                <div className="icon">
                                    <img
                                        src="assets/images/services/agency-5.svg"
                                        alt="corporate_Business_Services_agency"
                                    />
                                </div>
                                <div className="content">
                                    <h2 className="title">Hỗ trợ lâu dài & Bảo trì chuyên nghiệp</h2>
                                    <p className="description text-start">
                                        📞 Tư vấn, hướng dẫn sử dụng miễn phí <br />
                                        ⚡ Hỗ trợ kỹ thuật nhanh chóng
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one" />
                                        <div className="dot dot-two" />
                                        <div className="dot dot-two" />
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Service