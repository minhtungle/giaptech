"use client";
import Link from 'next/link';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import portfolioData from '@/data/portfolioData'; // Import portfolioData
import info from "@/data/info.json";

function Portfolio() {
    const PortfolioItem = ({ tabName }) => {
        return portfolioData
            .find(x => x.tabName_vi === tabName)?.data?.map((item, index) => {
                return (
                    <div className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6" key={index}>
                        {/* single portfolio-item */}
                        <div className="tmp-single-portfolio-item">
                            <Link href={item.targetSrc} className="thumbnail">
                                <img
                                    src={item.imgSrc}
                                    alt="personal_portfolio"
                                />
                            </Link>
                            <div className="tmp-inner-content">
                                <div className="top-item">
                                    <span className="left">{item.designType}</span>
                                    <span className="left">{item.likeCount} likes</span>
                                </div>
                                <Link href={item.targetSrc}>
                                    <h2 className="title">{item.title}</h2>
                                </Link>
                            </div>
                        </div>
                        {/* single portfolio-item end */}
                    </div>
                );
            });
    };

    return (
        <div>
            {/* rmp portfolio mesonary area */}
            <div className="tmp-portfolio-area">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="section-head">
                                <div className="section-sub-title center-title">
                                    <img
                                        src="assets/images/services/section-custom-menubar.png "
                                        alt="Business_Consulting_services"
                                    />
                                    <span>Thư viện sản phẩm</span>
                                </div>
                                <h2 className="split-collab">1000+ mẫu Website & Landing Page đa dạng</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="0">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column tmp-mesonary-area-main main-isotop">
                                        {portfolioData.map((item, index) => {
                                            return <Nav.Item key={index} className='tmp-button-group mb--50 filters-button-group'>
                                                <Nav.Link className='button' eventKey={index}>{item.tabName_vi}</Nav.Link>
                                            </Nav.Item>
                                        })}
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>
                                        {portfolioData.map((item, index) => {
                                            return <Tab.Pane key={index} eventKey={index}>
                                                <div className='row g-5'>
                                                    <PortfolioItem tabName={item.tabName_vi} />
                                                </div>
                                            </Tab.Pane>
                                        })}
                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                    <div className="row">
                        <div className="col-lg-12 pt-5 text-center">
                            <div className="btn-group">
                                <Link href={info.social.facebook} className="tmp-btn btn-primary">
                                    Xem thêm
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* rmp portfolio mesonary area end */}
        </div>
    )
}

export default Portfolio;