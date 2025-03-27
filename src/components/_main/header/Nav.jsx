import React from 'react'
import Link from 'next/link';
function Nav() {
    const productList = [
        {
            name: "Doanh nghiệp",
            link: "/Product/"
        },
        {
            name: "Cá nhân",
            link: "/Product/"
        },
        {
            name: "Nhà cửa & Nội thất",
            link: "/Product/"
        },
        {
            name: "F&B",
            link: "/Product/"
        },
        {
            name: "Thời trang & Mỹ phẩm",
            link: "/Product/"
        }
    ];
    return (
        <div>
            <div className="header-nav main-nav-one">
                <nav>
                    <ul className="parent-nav">
                        <li>
                            <Link className="nav-link" href="/About">
                                <span className="rolling-text">
                                    {[...Array(2)].map((_, index) => (
                                        <div key={index} className="block">
                                            {[..."TRANG CHỦ"].map((l, i) => (
                                                <span key={i} className="letter">{l === " " ? "\u00A0" : l}</span>
                                            ))}
                                        </div>
                                    ))}
                                </span>
                            </Link>
                        </li>
                        <li className="has-dropdown">
                            <Link className="nav-link" href="#">
                                <span className="rolling-text">
                                    {[...Array(2)].map((_, index) => (
                                        <div key={index} className="block">
                                            {[..."THƯ VIỆN MẪU"].map((l, i) => (
                                                <span key={i} className="letter">{l === " " ? "\u00A0" : l}</span>
                                            ))}
                                        </div>
                                    ))}
                                </span>
                            </Link>
                            <ul className="submenu">
                                {productList.map((item, index) => (
                                    <li key={index}>
                                        <Link href={item.link}>{item.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </li>
                        <li>
                            <Link className="nav-link" href="/Contact">
                                <span className="rolling-text">
                                    {[...Array(2)].map((_, index) => (
                                        <div key={index} className="block">
                                            {[..."TUYỂN DỤNG"].map((l, i) => (
                                                <span key={i} className="letter">{l === " " ? "\u00A0" : l}</span>
                                            ))}
                                        </div>
                                    ))}
                                </span>
                            </Link>
                        </li>
                        <li>
                            <Link className="nav-link" href="/Contact">
                                <span className="rolling-text">
                                    {[...Array(2)].map((_, index) => (
                                        <div key={index} className="block">
                                            {[..."LIÊN HỆ"].map((l, i) => (
                                                <span key={i} className="letter">{l === " " ? "\u00A0" : l}</span>
                                            ))}
                                        </div>
                                    ))}
                                </span>
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </div>
    )
}

export default Nav