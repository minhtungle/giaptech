"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Pagination, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';

function Testimonials() {
    const testimonials = [
        {
            id: 1,
            name: "Clade Owen",
            designation: "CEO & Founder",
            rating: 4.5,
            image: "/assets/images/testimonial/testimonial-1.jpg",
            feedback: "Dịch vụ thiết kế web chuyên nghiệp, đội ngũ hỗ trợ tận tâm. Trang web của chúng tôi không chỉ đẹp mà còn hoạt động nhanh chóng và ổn định. Cảm ơn GIAP Technology đã giúp thương hiệu của chúng tôi có một diện mạo mới đầy ấn tượng!"
        },
        {
            id: 2,
            name: "Nicolas Alvin",
            designation: "Web Developer",
            rating: 5,
            image: "/assets/images/testimonial/testimonial-2.jpg",
            feedback: "Tôi rất ấn tượng với sự linh hoạt của team GIAP Technology. Họ luôn lắng nghe ý tưởng và tối ưu theo yêu cầu của khách hàng. Website của tôi được tối ưu SEO tốt, load nhanh, và trải nghiệm người dùng rất mượt mà."
        },
        {
            id: 3,
            name: "Sophia Lê",
            designation: "Marketing Manager",
            rating: 4.7,
            image: "/assets/images/testimonial/testimonial-1.jpg",
            feedback: "Trang web do GIAP Technology thiết kế giúp công ty tôi tăng tỷ lệ chuyển đổi khách hàng đáng kể. Giao diện thân thiện, dễ sử dụng, tích hợp đầy đủ tính năng cần thiết. Tôi thực sự hài lòng với kết quả đạt được!"
        },
        {
            id: 4,
            name: "Trần Minh Quân",
            designation: "E-commerce Owner",
            rating: 5,
            image: "/assets/images/testimonial/testimonial-2.jpg",
            feedback: "Tôi đã từng hợp tác với nhiều đơn vị thiết kế web nhưng GIAP Technology thực sự khác biệt. Họ cung cấp giải pháp toàn diện từ thiết kế đến tối ưu hiệu suất. Nhờ đó, cửa hàng online của tôi vận hành mượt mà và doanh số đã tăng đáng kể."
        },
        {
            id: 5,
            name: "Emma Trần",
            designation: "Startup Founder",
            rating: 4.8,
            image: "/assets/images/testimonial/testimonial-1.jpg",
            feedback: "Một dịch vụ tuyệt vời! Tôi đặc biệt đánh giá cao cách họ tư vấn và đề xuất giải pháp phù hợp với nhu cầu của tôi. Website của startup chúng tôi hiện tại rất chuyên nghiệp, dễ sử dụng và có khả năng mở rộng cao."
        },
        {
            id: 6,
            name: "David Nguyễn",
            designation: "Tech Consultant",
            rating: 4.9,
            image: "/assets/images/testimonial/testimonial-2.jpg",
            feedback: "Chất lượng website rất cao, đội ngũ hỗ trợ nhanh chóng và chuyên nghiệp. Tôi thích cách họ xây dựng giao diện đơn giản nhưng đầy đủ tính năng, giúp người dùng có trải nghiệm tốt nhất. Tôi chắc chắn sẽ tiếp tục hợp tác lâu dài với GIAP Technology."
        }
    ];


    const StarRating = ({ rating }) => {
        const fullStars = Math.floor(rating);
        const halfStar = rating % 1 !== 0;

        return (
            <div className="stars-group">
                {[...Array(fullStars)].map((_, i) => (
                    <i key={i} className="fa-solid fa-star" />
                ))}
                {halfStar && <i className="fa-solid fa-star-half-stroke" />}
            </div>
        );
    };

    return (
        <div>
            <div className="testimonial-with-brand bg-1 bg_image">
                {/* Start Testimonial Area  */}
                <div className="testimonial-brand-area tmp-section-gapTop">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="testimonials-button-area">
                                    <div className="section-head text-align-left">
                                        <div className="section-sub-title" data-aos="move-right" data-aos-delay="100">
                                            <img
                                                src="assets/images/services/section-custom-menubar.png "
                                                alt="Corporate_service"
                                            />
                                            <span className="subtitle">VỀ KHÁCH HÀNG</span>
                                        </div>
                                        <h2 className=" split-collab" data-aos="move-right" data-aos-delay="300">
                                            Khách hàng chia sẻ <br /> về dịch vụ
                                        </h2>
                                    </div>
                                    <div className="button-next-prev">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-lg-12">
                                {/* Slider main container */}
                                <div className="swiper-style-one tmp-section-gapBottom">
                                    <div className="swiper-container-style-two">
                                        {/* Additional required wrapper */}
                                        <Swiper
                                            // install Swiper modules
                                            modules={[Navigation, Pagination, EffectFade, Scrollbar, A11y, Autoplay]}
                                            className="mySwiper-portfolio-1"
                                            speed={500}
                                            slidesPerView={2}
                                            spaceBetween={30}
                                            loop={true}
                                            autoplay={{
                                                delay: 5500,
                                                disableOnInteraction: false,
                                            }}
                                            navigation={{
                                                nextEl: '.swiper-button-next',
                                                prevEl: '.swiper-button-prev',
                                            }}
                                            breakpoints={{
                                                1200: { slidesPerView: 2 },
                                                900: { slidesPerView: 2 },
                                                768: { slidesPerView: 2 },
                                                580: { slidesPerView: 1 },
                                                450: { slidesPerView: 1 },
                                                0: { slidesPerView: 1 },
                                            }}
                                        >
                                            {testimonials.map((testimonial) => (
                                                <SwiperSlide key={testimonial.id}>
                                                    <div className="single-card card-horizontal">
                                                        <div className="card-inner">
                                                            <div className="content">
                                                                <div className="rating rating-style-three">
                                                                    <StarRating rating={testimonial.rating} />
                                                                </div>
                                                                <p className="description">{testimonial.feedback}</p>
                                                                <div className="content content-without-bg">
                                                                    <div className="name">{testimonial.name}</div>
                                                                    <div className="designation">{testimonial.designation}</div>
                                                                </div>
                                                            </div>
                                                            <div className="thumbnail">
                                                                <Image width={144} height={210} src={testimonial.image} alt="testimonial" />
                                                                <div className="icon icon-quote">
                                                                    <i className="fa-duotone fa-quote-left" />
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </SwiperSlide>
                                            ))}
                                        </Swiper>
                                        {/* If we need navigation buttons */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Testimonial Area  */}
                <div className="brand-area tmp-section-gapBottom">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="brand-inner tmp-section-gapTop">
                                    <ul className="brand-list brand-style-1 justify-content-center justify-content-lg-between">
                                        <li>
                                            <a href="#">
                                                <Image width={144} height={210} src="/assets/images/brand/brand-1.png" alt="Brand Image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image width={144} height={210} src="/assets/images/brand/brand-2.png" alt="Brand Image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image width={144} height={210} src="/assets/images/brand/brand-3.png" alt="Brand Image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image width={144} height={210} src="/assets/images/brand/brand-4.png" alt="Brand Image" />
                                            </a>
                                        </li>
                                        <li>
                                            <a href="#">
                                                <Image width={144} height={210} src="/assets/images/brand/brand-5.png" alt="Brand Image" />
                                            </a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Testimonials