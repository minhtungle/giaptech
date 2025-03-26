
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import CounterUp from "@/components/_main/funfacts/CounterGlobal"

const About = ({ id }) => {

  const [isOpen, setIsOpen] = useState(false);

  const openVideo = () => {
    setIsOpen(true);
  };

  const closeVideo = () => {
    setIsOpen(false);
  };

  const handleKeyUp = (e) => {
    if (e.key === 'Escape') {
      closeVideo();
    }
  };

  return (
    <div id={id}>
      <div>
        <div className="about-area tmp-section-gap about-style-one">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-lg-6">
                <div className="about-thumbnails">
                  <div className="thumbnail">
                    <Image width={410} height={590} data-aos="move-right" data-aos-delay="100" alt="corporate_business" src="/assets/images/about/01.png" />
                    <div className="image-two">
                      <Image width={190} height={280} data-aos="move-left" data-aos-delay="200" alt="corporate_business" src="/assets/images/about/03.png" />
                    </div>
                    <div className="image-three">
                      <Image width={410} height={200} data-aos="move-left" data-aos-delay="300" alt="corporate_business" className="" src="/assets/images/about/02.png" />
                    </div>
                    <div className="square" />
                    <div className="flower">
                      <Image width={88} height={88}
                        alt="Corporate_Business"
                        src="/assets/images/about/flower.png"
                      />
                    </div>
                    <div className="product-share">
                      <div className="rating">
                        <div className="number">
                          4.8
                        </div>
                        <div className="stars-group">
                          <div className="star">
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star" />
                            <i className="fa-solid fa-star-half-stroke" />
                          </div>
                        </div>
                      </div>
                      <div className="profile-share">
                        <Link
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          href="#"
                          tabIndex="0">
                          <Image width={40} height={40}
                            alt="Business_Corporate"
                            src="/assets/images/about/4.png"
                          />
                        </Link>
                        <Link
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          href="#"
                          tabIndex="0"
                        >
                          <Image width={40} height={40}
                            alt="Business_Corporate"
                            src="/assets/images/about/5.png"
                          />
                        </Link>
                        <Link
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          href="#"
                          tabIndex="0"
                        >
                          <Image width={40} height={40}
                            alt="Business_Corporate"
                            src="/assets/images/about/6.png"
                          />
                        </Link>
                        <Link
                          className="avatar"
                          data-tooltip="Mark JOrdan"
                          href="#"
                          tabIndex="0"
                        >
                          <Image width={40} height={40}
                            alt="Business_Corporate"
                            src="/assets/images/about/7.png"
                          />
                        </Link>
                      </div>
                    </div>
                  </div>
                  {/* video icon */}
                  <div className="vedio-icone">
                    <Link className="video-play-button play-video" href="#" onClick={(e) => {
                      e.preventDefault();
                      openVideo();
                    }}>
                      <span />
                    </Link>

                    {isOpen && (
                      <div className="video-overlay open" onClick={closeVideo}>
                        <iframe
                          width="560"
                          height="515"
                          src="/assets/images/video/intro-2.mp4"
                          title="YouTube video player"
                          frameBorder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                          allowFullScreen
                        ></iframe>
                        <Link href='#' className="video-overlay-close" onClick={(e) => {
                          e.preventDefault();
                          closeVideo();
                        }}>×</Link>
                      </div>
                    )}

                    {/* Listen for the Escape key to close the video */}
                    {isOpen && <div onKeyUp={handleKeyUp} tabIndex="0"></div>}
                  </div>
                  {/* video icon */}
                </div>
              </div>
              <div className="col-lg-6">
                <div className="about-inner">
                  <div className="section-head text-align-left section-head-one-side" data-aos="fade-up" data-aos-delay="100">
                    <div className="section-sub-title">
                      <img
                        alt="Corporate_service"
                        src="assets/images/services/section-custom-menubar.png "
                      />
                      <span className="subtitle">
                        VỀ CHÚNG TÔI
                      </span>
                    </div>
                    <h2 className="split-collab" data-aos="fade-up" data-aos-delay="300">
                      Giải pháp thiết kế website chuyên nghiệp
                    </h2>
                  </div>
                  <p
                    className="description" data-aos="fade-up" data-aos-delay="500">
                    Chúng tôi cung cấp dịch vụ thiết kế và phát triển website hiện đại, tối ưu hiệu suất và chuẩn SEO. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến những giải pháp web mạnh mẽ, giúp doanh nghiệp của bạn nâng cao thương hiệu và tối đa hóa lợi nhuận.
                  </p>
                  <div className="feature-counter" data-aos="fade-up" data-aos-delay="500">
                    <div className="tmp-feature-wrapper">
                      <h3 className="title">Grow Your Business</h3>
                      <div className="tmp-feature">
                        <div className="icon bg-color-primary-alt radius-circle">
                          <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                          <h6 className="title">Thư viện mẫu đa dạng</h6>
                        </div>
                      </div>
                      <div className="tmp-feature">
                        <div className="icon bg-color-primary-alt radius-circle">
                          <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                          <h6 className="title">Tối ưu chi phí</h6>
                        </div>
                      </div>
                      <div className="tmp-feature">
                        <div className="icon bg-color-primary-alt radius-circle">
                          <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                          <h6 className="title">Bảo mật thông tin</h6>
                        </div>
                      </div>
                      <div className="tmp-feature">
                        <div className="icon bg-color-primary-alt radius-circle">
                          <i className="fa-regular fa-check small-icon" />
                        </div>
                        <div className="feature-content">
                          <h6 className="title">Hỗ trợ dài hạn</h6>
                        </div>
                      </div>
                    </div>
                    <div className="counter-wrapper counter-style-one">
                      <div className="counter-inner">
                        <CounterUp end={459} />
                        <p className="description">
                          Dự án hoàn thành <br /> trong 4 năm
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}


export default About