"use client";
import Link from 'next/link';
import Image from 'next/image';

function ServiceOne(){

  
    return(
      <div>
          <div>
            <div className="tmp-services-area services-style--1 background-image-services bg_image tmp-section-gap">
              <div className="container">
                <div className="row">
                  <div className="col-lg-12">
                    <div className="section-head">
                      <div className="section-sub-title center-title">
                        <img alt="Business_Consulting_services" src="assets/images/services/section-custom-menubar.png " />
                        <span>
                          OUR SERVICES
                        </span>
                      </div>
                      <h2 className="title split-collab" data-aos="move-right" data-aos-delay="100">
                        Our Provided Services
                      </h2>
                    </div>
                  </div>
                </div>
                <div className="row g-5">
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="100">
                    <div className="single-services service-style-one">
                      <div className="services-inner  with-shadow card-bg-color">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-1.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Investment Advisory
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80} alt="Business Consulting number" src="/assets/images/services/icon-01.png" />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="300">
                    <div className="single-services service-style-one">
                      <div className="services-inner  with-shadow card-bg-color">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-2.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Financial Planning
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80} alt="Business Consulting number" src="/assets/images/services/icon-02.png"/>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-4 col-md-6 col-sm-12 col-12" data-aos="fade-up" data-aos-delay="500">
                    <div className="single-services service-style-one">
                      <div className="services-inner  with-shadow card-bg-color">
                        <div className="thumbnail">
                          <Image width={80} height={80}
                            alt="Business consulting services"
                            src="/assets/images/services/services-icon-3.png"
                          />
                        </div>
                        <div className="services-content">
                          <Link href={"/ServiceDetails"}>
                            <h5 className="title">
                              Business Consulting
                            </h5>
                          </Link>
                          <p className="desctiption">
                            Dramatically engage top-line web services vis-a-vis cutting-edge proactively envisioned multimer Dramatically top-line web services.
                          </p>
                          <Link className="icon angle-roted" href={"/ServiceDetails"}>
                            <i className="fa-solid fa-arrow-right" />
                          </Link>
                        </div>
                        <div className="number">
                          <Image width={80} height={80}
                            alt="Business Consulting number"
                            src="/assets/images/services/icon-03.png"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col-lg-12">
                    <div className="services-bottom">
                      <div className="services-bottom-inner">
                        <p className="description">
                          Our success as consultants will depend on the essential rightness of the advice.
                        </p>
                        <p className="description">
                          Want to learn more About us?
                          <button className="btn-simple">
                            Click here
                          </button>
                        </p>
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


export default ServiceOne





