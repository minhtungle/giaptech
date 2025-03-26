"use client";
import Link from 'next/link';
import { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';

function Portfolio() {
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
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column tmp-mesonary-area-main main-isotop">
                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="first">Doanh nghiệp</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="second">Cá nhân</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="third">Nhà cửa & Nội thất</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="four">Công nghệ & Điện tử</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="five">F&B</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="six">Thời trang & Mỹ phẩm</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="first">
                                            <div className='row g-5'>
                                                {
                                                    [{
                                                        imgSrc: "https://elements-resized.envatousercontent.com/elements-cover-images/dc57d609-cd82-434b-83d7-5bb6c187ec85?w=1370&cf_fit=scale-down&q=85&format=auto&s=0018ebdb4d046f87c2ba279146d1ed6550eb2683c1f722711edd0b47a40be8df",
                                                        designType: "Web Design",
                                                        likeCount: 25,
                                                        title: "Paso - IT Solutions & Technical Services HTML Template",
                                                        targetSrc: "https://preview.hibootstrap.com/paso-html/?storefront=envato-elements"
                                                    },
                                                    {
                                                        imgSrc: "https://elements-resized.envatousercontent.com/elements-cover-images/d6baf051-34f0-445e-86ef-32f33ddd10cd?w=710&cf_fit=scale-down&q=85&format=auto&s=9dad03e098c2fa708cd8224f226e49d0d59bbe46de591738c7869ca3434cf089",
                                                        designType: "Web Design",
                                                        likeCount: 50,
                                                        title: "Helax - Tech Startup Landing Page HTML Template",
                                                        targetSrc: "https://html.xpressbuddy.com/helax/?storefront=envato-elements"
                                                    },
                                                    {
                                                        imgSrc: "https://elements-resized.envatousercontent.com/elements-cover-images/6aec0613-ff53-4abb-bfbd-83218753b83a?w=710&cf_fit=scale-down&q=85&format=auto&s=dc4c568ea9b1d35b037621159754b231e0e0d39d55ef678991374f1f96db282a",
                                                        designType: "Web Design",
                                                        likeCount: 100,
                                                        title: "Techni - IT & Technology HTML5 Template",
                                                        targetSrc: "https://html.creativegigstf.com/techni/index.html?storefront=envato-elements"
                                                    }].map((item, index) => {
                                                        return <div
                                                            className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6" key={index}>
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
                                                    })
                                                }
                                            </div>

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="second">

                                            <div className='row g-5'>
                                                <div
                                                    className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/05.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo style design col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/06.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                            </div>

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="third">

                                            <div className='row g-5'>

                                                <div
                                                    className="flash grid-item-p element-item transition photo col-lg-4 col-md-6 col-sm-6"
                                                    data-category="transition"
                                                >
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/03.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">Navigating Startup Success</h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo style col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/04.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/05.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo style design col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/06.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                            </div>

                                        </Tab.Pane>

                                        <Tab.Pane eventKey="four">

                                            <div className='row g-5'>
                                                <div
                                                    className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/07.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">Its Our Igniting Innovation</h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition design col-lg-4 col-md-6 col-sm-6"
                                                    data-category="transition"
                                                >
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/02.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">Showcasing Startup Ventures</h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo col-lg-4 col-md-6 col-sm-6"
                                                    data-category="transition"
                                                >
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/03.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">Navigating Startup Success</h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo style col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/04.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition creative col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/05.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                                <div
                                                    className="flash grid-item-p element-item transition photo style design col-lg-4 col-md-6 col-sm-6">
                                                    {/* single portfolio-item */}
                                                    <div className="tmp-single-portfolio-item">
                                                        <Link href={'/ProjectDetails'} className="thumbnail">
                                                            <img
                                                                src="assets/images/product/06.jpg"
                                                                alt="personal_portfolio"
                                                            />
                                                        </Link>
                                                        <div className="tmp-inner-content">
                                                            <div className="top-item">
                                                                <span className="left">Mobile App Design</span>
                                                                <span className="left">25 likes</span>
                                                            </div>
                                                            <Link href={'/ProjectDetails'}>
                                                                <h2 className="title">
                                                                    Mobile App Design UI/UX <br />
                                                                    In Figma
                                                                </h2>
                                                            </Link>
                                                        </div>
                                                    </div>
                                                    {/* single portfolio-item end */}
                                                </div>
                                            </div>

                                        </Tab.Pane>

                                    </Tab.Content>
                                </Col>
                            </Row>
                        </Tab.Container>
                    </div>
                </div>
            </div>
            {/* rmp portfolio mesonary area end */}
        </div>
    )
}

export default Portfolio