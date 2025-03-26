"use client"
import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"
import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"
import Link from 'next/link';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';


function page() {
    return (
        <div className="service-details">
            <HeaderInner />
            <Breadcrumb title="Project Mesoanry" activeItem="Project Mesoanry" />


            {/* rmp portfolio mesonary area */}
            <div className="tmp-portfolio-area tmp-section-gap">
                <div className="container">
                    <div className='row'>
                        <div className="col-lg-12">
                            <div className="section-head">
                                <div className="section-sub-title center-title">
                                    <img
                                        src="assets/images/services/section-custom-menubar.png "
                                        alt="Business_Consulting_services"
                                    />
                                    <span>OUR PORTFOLIO</span>
                                </div>
                                <h2 className="title split-collab">Let Check Our Best Works</h2>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                            <Row>
                                <Col sm={12}>
                                    <Nav variant="pills" className="flex-column tmp-mesonary-area-main main-isotop">
                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="first"> All Product</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="second">Dashboard</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="third">Website</Nav.Link>
                                        </Nav.Item>

                                        <Nav.Item className='tmp-button-group mb--50 filters-button-group'>
                                            <Nav.Link className='button' eventKey="four">HTML/CSS</Nav.Link>
                                        </Nav.Item>
                                    </Nav>
                                </Col>
                                <Col sm={12}>
                                    <Tab.Content>

                                        <Tab.Pane eventKey="first">

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
                                                                <h2 className="title">Its Our Igniting Innovation Construction</h2>
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


            <FooterOne />
            <BackTop />

        </div>
    )
}

export default page