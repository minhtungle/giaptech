
"use client";
import React from 'react'
import Accordion from 'react-bootstrap/Accordion';
import Image from 'next/image';

function FaqOne() {

  return (
    <div>

        {/* Tmp FAQ area Start  */}
        <div className="faq-area faq-style-one faq-bg-image bg_image tmp-section-gap mt-dec--180">
            <div className="container pt--180">
            <div className="row">
                <div className="col-lg-12">
                <div className="section-head">
                    <div className="section-sub-title center-title" data-aos="move-right" data-aos-delay="100">
                    <img 
                        src="assets/images/services/section-custom-menubar.png "
                        alt="Corporate_service"
                    />
                    <span className="subtitle">QUESTION AND ANSWERS</span>
                    </div>
                    <h2 className="title split-collab" data-aos="move-right" data-aos-delay="300">Frequency Asked Questions</h2>
                </div>
                </div>
            </div>
            <div className="row align-items-center">
                <div className="col-lg-6">
                <div className="thumbnail" data-aos="move-right" data-aos-delay="100">
                    <Image width={580} height={541}
                    src="/assets/images/faq/faq-1.png"
                    alt="Business Consulting FAQ"
                    />
                </div>
                </div>
                <div className="col-lg-6">
                    <div className="faq-accordion">
                        <Accordion defaultActiveKey="0">
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>
                                <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>Why is collaborative learning so important</span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                        </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Companions shy had solicitude favorable own. Which could saw
                                        guest man now heard but. Lasted my coming uneasy marked so
                                        should. Gravity letters it amongst herself dearest an
                                        windows by. Wooded ladies she.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>
                                    <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>Do you offer free trials</span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Companions shy had solicitude favorable own. Which could saw
                                        guest man now heard but. Lasted my coming uneasy marked so
                                        should. Gravity letters it amongst herself dearest an
                                        windows by. Wooded ladies she.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>
                                    <div className="accordion-button-left">
                                        <i className="fa-regular fa-question" />
                                        <span>
                                            Can I share my courses with non-registered users
                                        </span>
                                        </div>
                                        <div className="accordion-button-right">
                                        <i className="fa-sharp fa-light fa-arrow-right" />
                                    </div>
                                </Accordion.Header>
                                <Accordion.Body>
                                        Companions shy had solicitude favorable own. Which could saw
                                        guest man now heard but. Lasted my coming uneasy marked so
                                        should. Gravity letters it amongst herself dearest an
                                        windows by. Wooded ladies she.
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion>

                        <div className="faq-buttom">
                        <h4 className="title">Still Have More Questions?</h4>
                        <p>
                            Contact Our <a href="#">Expert Support Team</a>
                        </p>
                        </div>
                    </div>
                </div>
            </div>
            </div>
        </div>
        {/* Tmp FAQ area Start  */}

    </div>
  )
}

export default FaqOne