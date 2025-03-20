"use client";
import React, { useEffect } from 'react';
import Link from 'next/link';

function ServiceFour() {
    return (
        <div>
            <div className="best-service-we-provide pt--60 tmp-section-gapBottom">
                <div className="container">
                    <div className="row g-5">
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="100">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <img src="assets/images/services/agency-6.svg" alt="corporate_Business_Services_agency" />
                                </div>
                                <div className="content">
                                    <h2 className="title">Thiết kế giao diện chuyên nghiệp</h2>
                                    <p className="description">
                                        Xây dựng website với giao diện hiện đại, thân thiện và tối ưu trải nghiệm người dùng.
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one"></div>
                                        <div className="dot dot-two"></div>
                                        <div className="dot dot-two"></div>
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="300">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <img src="assets/images/services/agency-1.svg" alt="corporate_Business_Services_agency" />

                                </div>
                                <div className="content">
                                    <h2 className="title">Tùy chỉnh theo yêu cầu</h2>
                                    <p className="description">
                                        Cung cấp giải pháp thiết kế website linh hoạt, đáp ứng mọi nhu cầu đặc thù của doanh nghiệp.
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one"></div>
                                        <div className="dot dot-two"></div>
                                        <div className="dot dot-two"></div>
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <img src="assets/images/services/agency-2.svg" alt="corporate_Business_Services_Agency" />

                                </div>
                                <div className="content">
                                    <h2 className="title">Tối ưu SEO & Hiệu suất</h2>
                                    <p className="description">
                                        Website chuẩn SEO, tốc độ tải nhanh, giúp tăng khả năng tiếp cận khách hàng tiềm năng.
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one"></div>
                                        <div className="dot dot-two"></div>
                                        <div className="dot dot-two"></div>
                                    </div>
                                </div>
                                <Link href={'/ServiceDetails'} className="over_link"></Link>
                            </div>
                        </div>
                        <div className="col-lg-3 col-md-4 col-sm-6 col-12" data-aos="fade-up" data-aos-delay="700">
                            <div className="service-inner financial-service-inner agency-service feature-service">
                                <div className="icon">
                                    <img src="assets/images/services/agency-3.svg" alt="corporate_Business_Services_agency" />

                                </div>
                                <div className="content">
                                    <h2 className="title">Bảo mật &amp; Hỗ trợ dài hạn</h2>
                                    <p className="description">
                                        Hệ thống bảo mật cao, bảo trì định kỳ và hỗ trợ kỹ thuật chuyên nghiệp.
                                    </p>
                                    <div className="three--dot">
                                        <div className="dot dot-one"></div>
                                        <div className="dot dot-two"></div>
                                        <div className="dot dot-two"></div>
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

export default ServiceFour