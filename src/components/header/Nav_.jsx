import React from 'react'
import Link from 'next/link';
function Nav() {

  return (
    <div>
        <div className="header-nav main-nav-one">
            <nav>
                <ul className="parent-nav">
                <li className="has-dropdown">
                    <Link className="nav-link " href="#">
                    <span className="rolling-text"><div className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div><div className="block"><span className="letter">H</span><span className="letter">O</span><span className="letter">M</span><span className="letter">E</span></div></span>
                    </Link>
                    <ul className="submenu mega-menu-wrapper">
                    <li className="menu-single-list">
                        <ul>
                        <li><Link href="/">Corporate Demo</Link></li>
                        <li><Link href="/home-two">Financial Demo</Link></li>
                        <li><Link href="/home-three">Marketing Demo</Link></li>
                        <li><Link href="/home-four">Agency Demo</Link></li>
                        <li><Link href="/home-five">Startup Demo</Link></li>
                        <li><Link href="/home-six">Construction Demo</Link></li>
                        <li><Link href="/home-seven">Construction 2 Demo</Link></li>
                        <li><Link href="/home-eight">Company Demo</Link></li>
                        </ul>
                    </li>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link" href="/About">
                    <span className="rolling-text"><div className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div><div className="block"><span className="letter">A</span><span className="letter">B</span><span className="letter">O</span><span className="letter">U</span><span className="letter">T</span></div></span>
                    </Link>
                </li>
                <li className="has-dropdown">
                    <Link className="nav-link" href="#">
                    <span className="rolling-text"><div className="block"><span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span></div><div className="block"><span className="letter">S</span><span className="letter">E</span><span className="letter">R</span><span className="letter">V</span><span className="letter">I</span><span className="letter">C</span><span className="letter">E</span><span className="letter">S</span></div></span>
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/Service">Service</Link></li>
                    <li><Link href="/ServiceDetails">Service Details</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link className="nav-link" href="#">
                    <span className="rolling-text"><div className="block"><span className="letter">B</span><span className="letter">L</span><span className="letter">O</span><span className="letter">G</span></div><div className="block"><span className="letter">B</span><span className="letter">L</span><span className="letter">O</span><span className="letter">G</span></div></span>
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/Blog">Blog</Link></li>
                    <li><Link href="/BlogColOne">Blog Col 1</Link></li>
                    <li><Link href="/BlogColTwo">Blog Col 2</Link></li>
                    <li><Link href="/BlogDetails">Blog Details</Link></li>
                    <li><Link href="/BlogDetailsTwo">Blog Details v2</Link></li>
                    </ul>
                </li>
                <li className="has-dropdown">
                    <Link className="nav-link" href="#">
                    <span className="rolling-text"><div className="block"><span className="letter">P</span><span className="letter">A</span><span className="letter">G</span><span className="letter">E</span><span className="letter">S</span></div><div className="block"><span className="letter">P</span><span className="letter">A</span><span className="letter">G</span><span className="letter">E</span><span className="letter">S</span></div></span>
                    </Link>
                    <ul className="submenu">
                    <li><Link href="/Appoinment">Appoinment</Link></li>
                    <li><Link href="/Project">Project</Link></li>
                    <li><Link href="/ProjectMesonary">Project Mesonary</Link></li>
                    <li><Link href="/ProjectMesonaryThree">Project Mesonary v2</Link></li>
                    <li><Link href="/ProjectSlider">Project Slider</Link></li>
                    <li><Link href="/ProjectDetails">Project Details</Link></li>
                    <li><Link href="/ProjectDetailsTwo">Project Details v2</Link></li>
                    <li><Link href="/TeamOne">Team</Link></li>
                    <li><Link href="/TeamTwo">Team Two</Link></li>
                    <li><Link href="/TeamDetails">Team Details</Link></li>
                    <li><Link href="/Pricing">Pricing</Link></li>
                    <li><Link href="/FaqOne">Faq</Link></li>
                    <li><Link href="/Error">Error</Link></li>
                    </ul>
                </li>
                <li>
                    <Link className="nav-link" href="/Contact">
                    <span className="rolling-text"><div className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div><div className="block"><span className="letter">C</span><span className="letter">O</span><span className="letter">N</span><span className="letter">T</span><span className="letter">A</span><span className="letter">C</span><span className="letter">T</span></div></span>
                    </Link>
                </li>
                </ul>
            </nav>
        </div>
    </div>
  )
}

export default Nav