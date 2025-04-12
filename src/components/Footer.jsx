import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom"
import "./../styles/Footer.css";
// import Logo_2 from "./../assets/images/hinzah-logo-2.png";
import Logo_3 from "./../assets/images/logo.png";

import { BsTwitterX } from "react-icons/bs";
import { FaFacebook, FaWhatsapp, FaInstagram, FaLinkedin, FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';


const Footer = () => {

  const [currentYear, setCurrentYear] = useState();
  // console.log('currentYear', currentYear);

  const getYear = () => setCurrentYear(new Date().getFullYear());

  useEffect(() => {
    getYear();
  }, [])

  return (
    <>
      <section className="footer">
        <div className="footer-content">

          <div className="footer-col">

            {/* <h1 className="company-title"><img src={Logo_3} alt="Logo" />Hinzah Solutions</h1> */}
            <h2 className="footer-heading">about us</h2>
            <p className="footer-para">We provides Web solutions that turn your ideas into world-class products and help you reach your target customer. We have been a leader in creating user-centric and functional business & marketing solutions ever since 2023.</p>

            <div className="social-media-icons">
              <Link to="https://www.facebook.com/profile.php?id=100095169192703"><FaFacebook className="footer-icons" size="30px" /></Link>
              <Link to="https://twitter.com/@hinzahs"><BsTwitterX className="footer-icons" size="30px" /></Link>
              <Link to="https://wa.me/917200510350"><FaWhatsapp className="footer-icons" size="30px" /></Link>
              <Link to="https://www.instagram.com/hinzahsolutions"><FaInstagram className="footer-icons" size="30px" /></Link>
              <Link to="http://www.linkedin.com/in/hinzah-solutions-11aab1291"><FaLinkedin className="footer-icons" size="30px" /></Link>
            </div>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">company</h2>
            <p className="footer-text"><Link to="/" className="footer-link-text">Home</Link></p>
            <p className="footer-text"><Link to="/about" className="footer-link-text">About</Link></p>
            <p className="footer-text"><Link to="/mission" className="footer-link-text">Mission</Link></p>
            <p className="footer-text"><Link to="/products" className="footer-link-text">Products</Link></p>
            <p className="footer-text"><Link to="/contact" className="footer-link-text">Contact</Link></p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">business</h2>
            <p className="footer-text"><Link to="/services" className="footer-link-text">Project</Link></p>
            <p className="footer-text"><Link to="/services" className="footer-link-text">Our Team</Link></p>
            <p className="footer-text"><Link to="/services" className="footer-link-text">Customers</Link></p>
          </div>

          <div className="footer-col">
            <h2 className="footer-heading">get in touch</h2>

            <div className="footer-text-icon">
              <FaMapMarkerAlt className="footer-icons" />
              <p className="footer-texts"> No.10, EMG Nagar, 3rd Street, <br />K.Puthur, Madurai-625 007.</p>
            </div>

            <Link to="mailto:info@hinzah.com" style={{ textDecoration: 'none' }}>
              <div className="footer-text-icon">
                <FaEnvelope className="footer-icons" />
                <p className="footer-texts">info@hinzah.com</p>
              </div>
            </Link>

            <Link to="https://wa.me/917200510350" style={{ textDecoration: 'none' }}>
              <div className="footer-text-icon">
                <FaWhatsapp className="footer-icons" />
                <p className="footer-texts">+91-7200510350</p>
              </div>
            </Link>

            <div className="footer-text-icon">
              <FaPhoneAlt className="footer-icons" />
              <p className="footer-texts">+91-9629527914</p>
            </div>

          </div>

        </div>
      </section>

      {/* <div className="footer-line">
      </div> */}

      <div className="copy-right">
        <h3 className="copy-right-content">Copyright © {currentYear} <Link to="/" style={{ textDecoration: 'none', color: "#e4dede" }}>Hinzah Solutions</Link>
          {/* | Powered by <Link to="/" style={{ textDecoration: 'none', color: "#e4dede" }}>Hinzah Solutions</Link> */}
        </h3>
      </div>

    </>
  );
};

export default Footer;
