import React, { useState } from "react";
import { NavLink,Link } from "react-router-dom"
import "./../styles/Navbar.css";
// import Logo_1 from "./../assets/images/hinzah-logo-1.jpg";
// import Logo_2 from "./../assets/images/hinzah-logo-2.png";
import Logo_3 from "./../assets/images/logo.png";
import { IoMenu } from "react-icons/io5";
import { IoCloseSharp } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaWhatsapp, FaInstagram, FaLinkedinIn } from 'react-icons/fa';


const Navbar = () => {
  const [isMobile, setIsMobile] = useState(false);
  return (
    <>
      <nav className="navbar">
        {/* <div className="navbar-logo">
          <img src={Logo_1} alt="Logo_1" />
          <img src={Logo_2} alt="Logo_2" />
        </div> */}
        <Link to="/" className="logo-link">
          <img className="company-logo" src={Logo_3} alt="Logo_3" />
          <h1 className="company-title">Hinzah Solutions</h1>
        </Link>

        <ul className={isMobile ? "nav-links-mobile" : "nav-links"} onClick={() => setIsMobile(false)}>
          <NavLink to="/"><li>Home</li></NavLink>
          <NavLink to="/about"><li>About</li></NavLink>
          <NavLink to="/services"><li>Services</li></NavLink>
          <NavLink to="/mission"><li>Mission</li></NavLink>
          <NavLink to="/products"><li>Products</li></NavLink>
          <NavLink to="/contact"><li>Contact</li></NavLink>
        </ul>

        {/* <button className="request-quote">request quote</button> */}
        <ul /*className="social-media-icons"*/>
          <Link to="https://www.facebook.com/profile.php?id=100095169192703"><li className="icon-links"><FaFacebookF className="navbar-icons" /></li></Link>
          <Link to="https://twitter.com/@hinzahs"><li className="icon-links"><BsTwitterX className="navbar-icons" /></li></Link>
          <Link to="https://wa.me/917200510350"><li className="icon-links"><FaWhatsapp className="navbar-icons" /></li></Link>
          <Link to="https://www.instagram.com/hinzahsolutions"><li className="icon-links"><FaInstagram className="navbar-icons" /></li></Link>
          <Link to="http://www.linkedin.com/in/hinzah-solutions-11aab1291"><li className="icon-links"><FaLinkedinIn className="navbar-icons" /></li></Link>
        </ul>

        <button className="menu-icon" onClick={() => setIsMobile(!isMobile)}>
          {isMobile ? <IoCloseSharp /> : <IoMenu />}
        </button>
      </nav >
    </>
  );
};

export default Navbar;
