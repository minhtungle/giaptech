"use client";
import React, { useState , useEffect }  from 'react';
import Link from 'next/link';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import { Navigation, Scrollbar, A11y, EffectFade, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/scrollbar';
import Image from 'next/image';
import ModalVideo from 'react-modal-video';

const BannerOne = ({ id }) => {
  const [isOpen, setIsOpen] = useState(false);
  const videoLink = 'https://www.youtube.com/watch?v=bFgREmqH5kI'; // Define the video link here
  const [videoId, setVideoId] = useState(null);
  useEffect(() => {
      // Extract the video ID from the video link
      if (videoLink) {
          const urlParts = videoLink.split('v='); // Assuming YouTube URL with 'v=' param
          const id = urlParts.length > 1 ? urlParts[1].split('&')[0] : null;
          setVideoId(id);
      }
  }, [videoLink]);
  // Console log to debug
  console.log('Video ID:', videoId);

  return (
    <div className="tmp-banner-swiper-one-area" id={id}>
      <Swiper
        modules={[Navigation, EffectFade, Scrollbar, A11y, Autoplay]}
        className="mySwiper-banner-one"
        speed={500}
        slidesPerView={1}
        spaceBetween={0}
        loop={true}
        effect='fade'
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
        breakpoints={{
          1200: { slidesPerView: 1 },
          900: { slidesPerView: 1 },
          768: { slidesPerView: 1 },
          580: { slidesPerView: 1 },
          450: { slidesPerView: 1 },
          0: { slidesPerView: 1 },
        }}
      >
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-1 bg_image banner-one-height-control tmp-section-gap">
            {/* Content */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">Business Consulting Agency</span>
                      <h1 className="title">Business consulting solution</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. We can also automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link href="/Service" className="tmp-btn btn-primary">
                          Get Started Now
                        </Link>
                        <div className="vedio-icone" onClick={() => setIsOpen(true)}>
                          <Link href="#" className="video-play-button play-video">
                            <span />
                            <p className="text">Play Video</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-2 bg_image banner-one-height-control tmp-section-gap">
            {/* Content */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">Business Consulting Agency</span>
                      <h1 className="title">Grow Business with consulting Agency</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. We can also automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link href="/Service" className="tmp-btn btn-primary">
                          Get Started Now
                        </Link>
                        <div className="vedio-icone" onClick={() => setIsOpen(true)}>
                          <Link href="#" className="video-play-button play-video">
                            <span />
                            <p className="text">Play Video</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="tmp-banner-area bg_image-3 bg_image banner-one-height-control tmp-section-gap">
            {/* Content */}
            <div className="container">
              <div className="row">
                <div className="col-xl-6">
                  <div className="banner-one-main-wrapper">
                    <div className="inner">
                      <span className="sub-title">Business Consulting Agency</span>
                      <h1 className="title">Make Your Business More Profitable</h1>
                      <p className="disc">
                        We help small startups grow from idea to millions of
                        users. We can also automate your marketing and customer service.
                      </p>
                      <div className="button-area-banner-one">
                        <Link href="/Service" className="tmp-btn btn-primary">
                          Get Started Now
                        </Link>
                        <div className="vedio-icone" onClick={() => setIsOpen(true)}>
                          <Link href="#" className="video-play-button play-video">
                            <span />
                            <p className="text">Play Video</p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </SwiperSlide>

        {/* Additional Slides */}

        <div className="swiper-button-next"></div>
        <div className="swiper-button-prev"></div>
      </Swiper>
      {videoId && (
                <ModalVideo
                    channel="youtube"
                    isOpen={isOpen}
                    videoId={videoId} // Pass the dynamic video ID here
                    onClose={() => setIsOpen(false)}
                />
            )}
    </div>
  );
};

export default BannerOne;
