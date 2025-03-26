
"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Header = ({ id }) => {

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
                      Giải pháp thiết kế website chuyên nghiệp cho doanh nghiệp của bạn
                    </h2>
                  </div>
                  <p
                    className="description" data-aos="fade-up" data-aos-delay="500">
                    Chúng tôi cung cấp dịch vụ thiết kế và phát triển website hiện đại, tối ưu hiệu suất và chuẩn SEO. Với đội ngũ chuyên gia giàu kinh nghiệm, chúng tôi cam kết mang đến những giải pháp web mạnh mẽ, giúp doanh nghiệp của bạn nâng cao thương hiệu và tối đa hóa lợi nhuận.
                  </p>
                  <div
                    className="single-progress-area progress-stye-one" data-aos="fade-up" data-aos-delay="700">
                    <div className="progress-top">
                      <p className="name">
                        Khách hàng cá nhân
                      </p>
                      <span className="parcent">
                        300+
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="25"
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{
                          width: '75%'
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="single-progress-area progress-stye-one " data-aos="fade-up" data-aos-delay="900"
                  >
                    <div className="progress-top">
                      <p className="name">
                        Khách hàng doanh nghiệp
                      </p>
                      <span className="parcent">
                        100+
                      </span>
                    </div>
                    <div className="progress">
                      <div
                        aria-valuemax="100"
                        aria-valuemin="0"
                        aria-valuenow="25"
                        className="progress-bar wow fadeInLeft bg--primary"
                        role="progressbar"
                        style={{
                          width: '25%'
                        }}
                      />
                    </div>
                  </div>
                  <div
                    className="thumbnail-with-title" data-aos="fade-up" data-aos-delay="1000"
                  >
                    <div className="thumbnail">
                      <Image width={80} height={80}
                        alt=""
                        src="/assets/images/about/about-with-icon.png"
                      />
                      <div className="icon">
                        <i className="fa-regular fa-dollar-sign" />
                      </div>
                    </div>
                    <div className="title">
                      Hãy để chúng tôi giúp bạn xây dựng một website chuyên nghiệp và bền vững!
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


export default Header