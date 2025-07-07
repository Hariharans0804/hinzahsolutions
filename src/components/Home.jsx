import React from "react";
import { Link } from "react-router-dom"
import "./../styles/Style.css";
import "./../styles/Responsive.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import web_design_1 from "./../assets/images/web-design-1.jpg";
import App_Development_1 from "./../assets/images/app-development-1.jpg";
import Wordpress_1 from "./../assets/images/wordpress-1.jpg";
import Web_Development_2 from "./../assets/images/web-development-2.jpg";

import App_Development_2 from "./../assets/images/app-development-2.jpg";
import Web_Development_1 from "./../assets/images/web-development-1.jpg";
import Web_Development_3 from "./../assets/images/web-development-3.jpg";
import Web_Development_4 from "./../assets/images/web-development-4.jpg";

import Project_1 from "./../assets/images/project-1.jpg";
import Project_2 from "./../assets/images/project-2.jpg";
import Project_3 from "./../assets/images/project-3.jpg";
import Project_4 from "./../assets/images/project-4.jpg";
import Winture_Trading_Logo from "./../assets/images/winture_trading_logo.png";
import HCC from "./../assets/images/hcc.png";

import Man_3 from "./../assets/images/man-3.png";
import Man_1 from "./../assets/images/man-1.png";
import Woman_2 from "./../assets/images/woman-2.png";
import Man_2 from "./../assets/images/man-2.png";

import { FaArrowRight } from 'react-icons/fa';

import {
  faPenToSquare,
  faLaptop,
  faMobileScreen,
  faPersonThroughWindow,
  faMobilePhone,
  faWindowRestore,
  faUserCheck,
  faUsersGear,
  faSearchLocation,
  faPencilSquare,
  faMessage,
  faFolderOpen,
  faLightbulb,
  faEthernet,
} from "@fortawesome/free-solid-svg-icons";

const Home = () => {

  const settings = {
    // className: "center",
    dots: true,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 5,
          centerPadding: "40px",
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          centerPadding: "20px",
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          centerPadding: "10px",
        },
      },
    ],
    afterChange: function (index) {
      console.log(`Slider Changed to: ${index + 1}`);
    },
  };


  return (
    <>
      {/*===== home banner start =====*/}
      <section className="home-image">
        <div className="home-overlay">
        </div>
        <div className="home-image-content" >
          <h2 className="home-image-details-1" data-aos="fade-down" data-aos-duration="1000">Elevate Your Brand With Hinzah Solutions</h2>
          <h1 className="home-image-details-2" data-aos="fade-down" data-aos-duration="1000">Create Amazing<br />Business Websites</h1>
          <p className="home-image-details-3" data-aos="fade-down" data-aos-duration="1000">We Provide Great Value For Business, And All Apps Development and Form of technical support that provides<br />
            assistance with various technological issues like Software, Hardware, printers, networks and devices.</p>
          {/* <div className=""></div> */}
          <Link to="/products">
            <button className="home-image-button">start a project
              <FaArrowRight className="home-image-button-icon" /></button>
          </Link>
          {/* <FaArrowRight size="20px"/> */}
        </div>
      </section>
      {/*===== home banner end =====*/}

      {/*===== home services start =====*/}
      <section className="home-service" >
        <h1 className="home-service-text-1" data-aos="fade-down" data-aos-duration="1000">How can we help you?</h1>
        <p className="home-service-text-2" data-aos="fade-down" data-aos-duration="1000">
          we're here to provide innovative solutions to your tech challenges,
          ensuring seamless integration and exceptional performance. <br />
          Let us turn your ideas into reality with our expertise and
          cutting-edge technology.
        </p>

        <div className="home-service-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Web Design</h3>
            <p className="home-service-type-details">
              Create a stunning online presence with our innovative web design
              solutions.
            </p>
          </div>

          <div className="home-service-type" >
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">App Development</h3>
            <p className="home-service-type-details">
              Develop cutting-edge, user-friendly apps tailored to your needs
              with our expert app development services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faPersonThroughWindow}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Web Development</h3>
            <p className="home-service-type-details">
              Build a powerful online presence with our expert web development
              solutions.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon icon={faLaptop}
              className="home-service-type-icons" />
            <h3 className="home-service-type-name">Software Testing</h3>
            <p className="home-service-type-details">
              Ensure flawless performance with our comprehensive software
              testing services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faMobilePhone}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Mobile Apps Development</h3>
            <p className="home-service-type-details">
              Create high-performance, user-centric mobile apps with our expert
              development services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faWindowRestore}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">eCommerce Development</h3>
            <p className="home-service-type-details">
              Boost your online sales with our tailored eCommerce development
              solutions.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Cyber Security</h3>
            <p className="home-service-type-details">
              Protect your digital assets with our advanced cyber security
              solutions.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faUsersGear}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Digital Marketing</h3>
            <p className="home-service-type-details">
              Expand your reach and drive results with our strategic digital
              marketing services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faSearchLocation}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">SEO</h3>
            <p className="home-service-type-details">
              Enhance your online visibility and attract more traffic with our
              expert SEO services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faPencilSquare}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Graphic Design</h3>
            <p className="home-service-type-details">
              Transform your brand’s identity with our creative and impactful
              graphic design solutions.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon icon={faMessage} className="home-service-type-icons" />
            <h3 className="home-service-type-name">IT Consulting</h3>
            <p className="home-service-type-details">
              Streamline your technology strategy with our expert IT consulting
              services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">Content Writer</h3>
            <p className="home-service-type-details">
              Engage and inform your audience with our professionally crafted
              content writing services.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="home-service-type-icons"
            />
            <h3 className="home-service-type-name">IT Help Support</h3>
            <p className="home-service-type-details">
              Receive practical and effective IT support tailored to your
              specific needs.
            </p>
          </div>

          <div className="home-service-type">
            <FontAwesomeIcon icon={faEthernet} className="home-service-type-icons" />
            <h3 className="home-service-type-name">Hardware / Network Support</h3>
            <p className="home-service-type-details">
              Ensure seamless connectivity with our expert software networking
              support services.
            </p>
          </div>
        </div>
      </section>
      {/*===== home services end =====*/}

      {/*===== home portfolio start=====*/}
      <section className="home-portfolio">
        <h1 className="home-portfolio-text-1" data-aos="fade-down" data-aos-duration="1000">Portfolio</h1>
        <p className="home-portfolio-text-2" data-aos="fade-down" data-aos-duration="1000">
          Showcase your best work with a stunning, professionally designed
          portfolio. <br />
          Our services help you create a captivating presentation that
          highlights your skills and achievements.
        </p>

        <div className="home-portfolio-image" data-aos="fade-up" data-aos-duration="1000">
          <div className="home-portfolio-image-show">
            <img src={web_design_1} alt="Web_Design_1" />
            <img src={Wordpress_1} alt="Wordpress_1" />
            <img src={App_Development_1} alt="App_Development_1" />
            <img src={App_Development_2} alt="App_Development_2" />
            <img src={Web_Development_1} alt="Web_Development_1" />
            <img src={Web_Development_2} alt="Web_Development_2" />
            <img src={Web_Development_3} alt="Web_Development_3" />
            <img src={Web_Development_4} alt="Web_Development_4" />
          </div>
        </div>

        <div className="explore-more">
          <Link to="/contact">
            <button className="explore-more-button">explore more</button>
          </Link>
        </div>
      </section>
      {/*===== home portfolio end=====*/}

      {/*===== home customers start=====*/}
      <section className="our-cutomers">
        <h1 className="home-cutomers-text-1" data-aos="fade-down" data-aos-duration="1000">Our Customers</h1>
        <p className="home-cutomers-text-2" data-aos="fade-down" data-aos-duration="1000">
          Our customers are at the heart of everything we do.
          <br /> We pride ourselves on delivering exceptional service and
          innovative solutions that drive their success.
        </p>

        {/* <div className="home-cutomers-image" data-aos="fade-up" data-aos-duration="2000">
          <div className="home-cutomers-image-border">
            <img src={Project_1} alt="Project_1" />
          </div>
          <div className="home-cutomers-image-border">
            <img src={Project_2} alt="Project_2" />
          </div>
          <div className="home-cutomers-image-border">
            <img src={Project_3} alt="Project_3" />
          </div>
          <div className="home-cutomers-image-border">
            <img src={Project_4} alt="Project_4" />
          </div>
          <div className="home-cutomers-image-border">
            <img src={Project_5} alt="Project_5" />
          </div>
        </div> */}

        <div className="home-cutomers-image-slider" data-aos="fade-up" data-aos-duration="2000">
          <Slider className="slider" {...settings}>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_2} style={{ width: "100%", height: "100%",objectFit:"fill" }} alt="Project_2" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_3} style={{ width: "100%", height: "100%",objectFit:"fill" }} alt="Project_3" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_4} style={{ width: "100%", height: "100%",objectFit:"fill" }} alt="Project_4" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_1} style={{ width: "100%", height: "100%",objectFit:"fill"}} alt="Project_1" />
            </div>
            <div className="home-cutomers-image-slider-border" >
              <img src={Winture_Trading_Logo} style={{ width: "100%", height: "100%",objectFit:"fill" }} alt="Winture_Trading_Logo" />
            </div>
            {/* style={{ marginTop: "-25px", width: "100%" }} */}
            <div className="home-cutomers-image-slider-border">
              <img src={HCC} style={{ width: "100%", height: "100%",objectFit:"fill" }} alt="HCC" />
            </div>
          </Slider>
        </div>
      </section>
      {/*===== home customers end=====*/}

      {/*===== home CEO topic start=====*/}
      <section className="home-ceo">
        <div className="home-ceo-content">
          <h1 className="home-ceo-text-1" data-aos="fade-down" data-aos-duration="1000">
            "Amazing Designs and Quality Work!"
          </h1>
          <p className="home-ceo-text-2" data-aos="fade-down" data-aos-duration="1000">
            Our CEO exemplifies visionary leadership and a commitment to
            innovation. <br />
            With extensive experience and strategic foresight, they guide our
            team toward achieving excellence in every project.
            <br />
            Under their direction, we continue to drive success and growth in
            the ever-evolving tech landscape.
          </p>

          <div className="founder-container">
            {/* <div>
              <img src={Man_3} alt="Man_3" data-aos="fade-up" data-aos-duration="2000" />
              <h2 className="home-ceo-text-3" data-aos="fade-up" data-aos-duration="2000">Nainar Shareef.M</h2>
              <h3 className="home-ceo-text-4" data-aos="fade-up" data-aos-duration="2000">CEO</h3>
            </div> */}

            {/* <div>
              <img src={Woman_2} alt="Man_3" data-aos="fade-up" data-aos-duration="2000" />
              <h2 className="home-ceo-text-3" data-aos="fade-up" data-aos-duration="2000">Hazina Rani.N</h2>
              <h3 className="home-ceo-text-4" data-aos="fade-up" data-aos-duration="2000">Manager</h3>
            </div> */}
          </div>

        </div>
      </section>
      {/*===== home CEO topic end=====*/}

      {/*===== home our leader start=====*/}
      <section className="home-leader">
        <h1 className="home-leader-text-1" data-aos="fade-down" data-aos-duration="1000">Meet Our Leadership</h1>
        <p className="home-leader-text-2" data-aos="fade-down" data-aos-duration="1000">
          Our team leadership combines expertise and collaboration to drive
          innovative solutions. <br />
          They inspire excellence and guide our team to achieve remarkable
          results.
        </p>

        {/* <div className="home-leader-content">

          <div className="home-leader-image" data-aos="flip-left" data-aos-duration="2000">
            <img src={Man_2} alt="Woman_2" />
            <h2 className="home-image-text-1">Karthick Nagarajan</h2>
            <h3 className="home-image-text-2">Frontend Developer</h3>
          </div>

          <div className="home-leader-image" data-aos="flip-left" data-aos-duration="2000">
            <img src={Man_1} alt="Man_1" />
            <h2 className="home-image-text-1">Hariharan</h2>
            <h3 className="home-image-text-2">App & Web Developer</h3>
          </div>

          <div className="home-leader-image" data-aos="flip-left" data-aos-duration="2000">
            <img src={Man_2} alt="Man_2" />
            <h2 className="home-image-text-1">Arjun</h2>
            <h3 className="home-image-text-2">Backend Developer</h3>
          </div>

        </div> */}
      </section>
      {/*===== home our leader end=====*/}

      {/*===== home project start=====*/}
      <section className="home-project-start" data-aos="fade-up" data-aos-duration="1000">
        <div className="project-us-start">

          <div className="home-project-content">
            <h1 className="home-project-text-1">Would you like to start a<br />project with us?</h1>
            <p className="home-project-text-2"> Our team is ready to turn your ideas into reality <br />with innovative solutions and dedicated support.</p>
          </div>
          <div className="home-project-content">
            <Link to="https://wa.me/917200510350">
              <button className="home-project-number">+91 72005 10350</button>
            </Link>
          </div>

        </div>
      </section>
      {/*===== home project end=====*/}
    </>
  );
};

export default Home;
