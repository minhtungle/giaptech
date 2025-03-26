"use client"
import { useState } from "react";
import HeaderInner from "@/components/temp/header/HeaderInner"
import Breadcrumb from "@/components/temp/breadcrumb/Breadcrumb"


import FooterOne from "@/components/temp/footer/FooterOne"
import BackTop from "@/components/temp/footer/BackToTop"

import Link from 'next/link';
const blogData = [
  {
    imgSrc: "assets/images/blog/blog-2.png",
    title: "Consulted admitting wooded is power acuteness.",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-3.png",
    title: "Corporate Design Portfolio Collection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-1.png",
    title: "Executive Portfolio Theme Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-4.png",
    title: "Professional Template Portfolio Selection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-5.png",
    title: "Executive Branding Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-6.png",
    title: "Professional Theme Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },



  {
    imgSrc: "assets/images/blog/blog-3.png",
    title: "Consulted admitting wooded is power acuteness.",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-2.png",
    title: "Corporate Design Portfolio Collection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-4.png",
    title: "Executive Portfolio Theme Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-1.png",
    title: "Professional Template Portfolio Selection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-6.png",
    title: "Executive Branding Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-5.png",
    title: "Professional Theme Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-2.png",
    title: "Consulted admitting wooded is power acuteness.",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-3.png",
    title: "Corporate Design Portfolio Collection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-1.png",
    title: "Executive Portfolio Theme Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-4.png",
    title: "Professional Template Portfolio Selection",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-5.png",
    title: "Executive Branding Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  {
    imgSrc: "assets/images/blog/blog-6.png",
    title: "Professional Theme Portfolio Compilation",
    date: "20 JAN 2023",
    category: "Consulting",
  },
  // Add more blog items as needed
];

const ITEMS_PER_PAGE = 6;

function Page() {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(blogData.length / ITEMS_PER_PAGE);

  const handlePageClick = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) setCurrentPage((prevPage) => prevPage - 1);
  };

  const currentItems = blogData.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  return (
    <div className="index-one">
      <HeaderInner />
      <Breadcrumb title="Latest News" activeItem="Latest News" />

      {/* latest blog area start */}
      <div className="altest-blog-area tmp-section-gap">
        <div className="container">
          <div className="row g-5">
            {currentItems.map((item, index) => (
              <div className="col-lg-4 col-md-6 col-sm-6 col-12" key={index}>
                <div className="single-blog blog-style-three">
                  <div className="blog-inner">
                    <div className="thumbnail">
                      <Link href={"/BlogDetails"}>
                        <img src={item.imgSrc} alt="Business Consulting Blog" />
                      </Link>
                    </div>
                    <div className="blog-content text-center">
                      <div className="blog-head">
                        <span className="name">{item.date}</span>
                        <span className="designation">{item.category}</span>
                      </div>
                      <div className="blog-body">
                        <Link href={"/BlogDetails"} className="title-area">
                          <h4 className="title">{item.title}</h4>
                        </Link>
                        <Link className="btn-read-more" href={"/BlogDetails"}>
                          <span className="read-more-text">Read More</span>
                          <span className="read-more-icon">
                            <i className="fa-solid fa-arrow-right" />
                          </span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="tmp-pagination-area-next-pev mt--50">
            <button onClick={handlePreviousPage} disabled={currentPage === 1}>
              <i className="fa-regular fa-chevron-left" />
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => handlePageClick(index + 1)}
                className={currentPage === index + 1 ? "active" : ""}
              >
                {index + 1}
              </button>
            ))}
            <button onClick={handleNextPage} disabled={currentPage === totalPages}>
              <i className="fa-sharp fa-regular fa-chevron-right" />
            </button>
          </div>
        </div>
      </div>
      {/* latest blog area end */}

      <FooterOne />
      <BackTop />
    </div>
  );
}

export default Page;