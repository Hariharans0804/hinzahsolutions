import React, { useState } from "react";
import { Link } from "react-router-dom"
import "./../styles/Style.css";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { FaChalkboardTeacher, FaPlay, FaPlusCircle, } from "react-icons/fa";

import Company from "./../assets/images/company.jpg";

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

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
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

const Services = () => {

  const [counterOnScroll, setCounterOnScroll] = useState(false);


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
      {/*===== services banner start =====*/}
      <section className="service-image">
        <div className="service-overlay"></div>

        <div className="service-image-content">
          <h1 className="service-image-details-1" data-aos="fade-down" data-aos-duration="1000">Services</h1>
          <h2 className="service-image-details-2" data-aos="fade-down" data-aos-duration="1000">We provide a wide range of Services</h2>
          <p className="service-image-details-3" data-aos="fade-down" data-aos-duration="1000">Explore our wide range of services designed to meet your business needs. From web development to IT consulting, we deliver innovative solutions with exceptional quality. Partner with us to drive growth and achieve your goals.</p>
        </div>
      </section>
      {/*===== services banner end =====*/}

      {/*===== service center content and image content start =====*/}
      <section className="service-center">

        <div className="service-center-content" data-aos="fade-right" data-aos-duration="1000">
          <FaChalkboardTeacher className="service-center-content-icon" />
          <h1 className="service-center-content-text-1">Hinzah Solutions</h1>
          <p className="service-center-content-text-2">Our Company is a leading IT services company based in Madurai (India) providing a wide range of solutions like web designing, web application development, Mobile Application, web hosting, custom software development, Server management and portal development.</p>
        </div>

        <div className="service-center-image" >
          <img src={Company} alt="Company" data-aos="fade-left" data-aos-duration="1000" />
        </div>

      </section>
      {/*===== service center content and image content end =====*/}

      {/*===== services content and details start =====*/}
      <section className="service">
        <h1 className="service-text-1" data-aos="fade-down" data-aos-duration="1000">The Services We offer</h1>
        <p className="service-text-2" data-aos="fade-down" data-aos-duration="800">
          we're here to provide innovative solutions to your tech challenges,
          ensuring seamless integration and exceptional performance. <br />
          Let us turn your ideas into reality with our expertise and
          cutting-edge technology.
        </p>

        <div className="service-content" data-aos="fade-up" data-aos-duration="1000">
          <div className="service-type">
            <FontAwesomeIcon
              icon={faPenToSquare}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Web Design</h3>
            <p className="service-type-details">
              Create a stunning online presence with our innovative web design
              solutions.
            </p>
          </div>

          <div className="service-type" >
            <FontAwesomeIcon
              icon={faMobileScreen}
              className="service-type-icons"
            />
            <h3 className="service-type-name">App Development</h3>
            <p className="service-type-details">
              Develop cutting-edge, user-friendly apps tailored to your needs
              with our expert app development services.
            </p>
          </div>

          <div className="service-type" >
            <FontAwesomeIcon
              icon={faPersonThroughWindow}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Web Development</h3>
            <p className="service-type-details">
              Build a powerful online presence with our expert web development
              solutions.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon icon={faLaptop}
              className="service-type-icons" />
            <h3 className="service-type-name">Software Testing</h3>
            <p className="service-type-details">
              Ensure flawless performance with our comprehensive software
              testing services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faMobilePhone}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Mobile Apps Development</h3>
            <p className="service-type-details">
              Create high-performance, user-centric mobile apps with our expert
              development services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faWindowRestore}
              className="service-type-icons"
            />
            <h3 className="service-type-name">eCommerce Development</h3>
            <p className="service-type-details">
              Boost your online sales with our tailored eCommerce development
              solutions.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faUserCheck}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Cyber Security</h3>
            <p className="service-type-details">
              Protect your digital assets with our advanced cyber security
              solutions.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faUsersGear}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Digital Marketing</h3>
            <p className="service-type-details">
              Expand your reach and drive results with our strategic digital
              marketing services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faSearchLocation}
              className="service-type-icons"
            />
            <h3 className="service-type-name">SEO</h3>
            <p className="service-type-details">
              Enhance your online visibility and attract more traffic with our
              expert SEO services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faPencilSquare}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Graphic Design</h3>
            <p className="service-type-details">
              Transform your brand’s identity with our creative and impactful
              graphic design solutions.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon icon={faMessage} className="service-type-icons" />
            <h3 className="service-type-name">IT Consulting</h3>
            <p className="service-type-details">
              Streamline your technology strategy with our expert IT consulting
              services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faFolderOpen}
              className="service-type-icons"
            />
            <h3 className="service-type-name">Content Writer</h3>
            <p className="service-type-details">
              Engage and inform your audience with our professionally crafted
              content writing services.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon
              icon={faLightbulb}
              className="service-type-icons"
            />
            <h3 className="service-type-name">IT Help Support</h3>
            <p className="service-type-details">
              Receive practical and effective IT support tailored to your
              specific needs.
            </p>
          </div>

          <div className="service-type">
            <FontAwesomeIcon icon={faEthernet} className="service-type-icons" />
            <h3 className="service-type-name">Hardware / Network Support</h3>
            <p className="service-type-details">
              Ensure seamless connectivity with our expert software networking
              support services.
            </p>
          </div>
        </div>
      </section>
      {/*===== services content and details end =====*/}

      {/*===== services customers start=====*/}
      <section className="service-our-cutomers">
        <h1 className="service-cutomers-text-1" data-aos="fade-down" data-aos-duration="1000">Our Customers</h1>
        <p className="service-cutomers-text-2" data-aos="fade-down" data-aos-duration="1000">
          Our customers are at the heart of everything we do.
          <br /> We pride ourselves on delivering exceptional service and
          innovative solutions that drive their success.
        </p>

        {/* <div className="service-cutomers-image" data-aos="fade-up" data-aos-duration="1000">
          <div className="service-cutomers-image-border">
            <img src={Project_1} alt="Project_1" />
          </div>
          <div className="service-cutomers-image-border">
            <img src={Project_2} alt="Project_2" />
          </div>
          <div className="service-cutomers-image-border">
            <img src={Project_3} alt="Project_3" />
          </div>
          <div className="service-cutomers-image-border">
            <img src={Project_4} alt="Project_4" />
          </div>
          <div className="service-cutomers-image-border">
            <img src={Project_5} alt="Project_5" />
          </div>
        </div> */}

        <div className="home-cutomers-image-slider" data-aos="fade-up" data-aos-duration="2000">
          <Slider className="slider" {...settings}>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_2} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="Project_2" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_3} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="Project_3" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_4} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="Project_4" />
            </div>
            <div className="home-cutomers-image-slider-border">
              <img src={Project_1} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="Project_1" />
            </div>
            <div className="home-cutomers-image-slider-border" >
              <img src={Winture_Trading_Logo} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="Winture_Trading_Logo" />
            </div>
            {/* style={{ marginTop: "-25px", width: "100%" }} */}
            <div className="home-cutomers-image-slider-border">
              <img src={HCC} style={{ width: "100%", height: "100%", objectFit: "fill" }} alt="HCC" />
            </div>
          </Slider>
        </div>
      </section>
      {/*===== services customers end=====*/}

      {/*===== services CEO topic start=====*/}
      <section className="service-ceo">
        <div className="service-ceo-content">
          <h1 className="service-ceo-text-1" data-aos="fade-down" data-aos-duration="1000">
            "Amazing Designs and Quality Work!"
          </h1>
          <p className="service-ceo-text-2" data-aos="fade-down" data-aos-duration="1000">
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
              <img src={Man_3} alt="Man_3" data-aos="fade-up" data-aos-duration="1000" />
              <h2 className="service-ceo-text-3" data-aos="fade-up" data-aos-duration="1000">Nainar Shareef.M</h2>
              <h3 className="service-ceo-text-4" data-aos="fade-up" data-aos-duration="1000">CEO</h3>
            </div> */}

            {/* <div>
              <img src={Woman_2} alt="Man_3" data-aos="fade-up" data-aos-duration="1000" />
              <h2 className="service-ceo-text-3" data-aos="fade-up" data-aos-duration="1000">Hazina Rani.N</h2>
              <h3 className="service-ceo-text-4" data-aos="fade-up" data-aos-duration="1000">Manager</h3>
            </div> */}
          </div>

        </div>
      </section>
      {/*===== services CEO topic end=====*/}

      {/*===== services our leader start=====*/}
      <section className="service-leader">
        <h1 className="service-leader-text-1" data-aos="fade-down" data-aos-duration="1000">Meet Our Leadership</h1>
        <p className="service-leader-text-2" data-aos="fade-down" data-aos-duration="1000">
          Our team leadership combines expertise and collaboration to drive
          innovative solutions. <br />
          They inspire excellence and guide our team to achieve remarkable
          results...
        </p>

        {/* <div className="service-leader-content">

          <div className="service-leader-image" data-aos="flip-left" data-aos-duration="1000">
            <img src={Woman_2} alt="Woman_2" />
            <h2 className="service-image-text-1">Karthick Nagarajan</h2>
            <h3 className="service-image-text-2">Frontend Developer</h3>
          </div>

          <div className="service-leader-image" data-aos="flip-left" data-aos-duration="1000">
            <img src={Man_1} alt="Man_1" />
            <h2 className="service-image-text-1">Hariharan</h2>
            <h3 className="service-image-text-2">App & Web Developer</h3>
          </div>

          <div className="service-leader-image" data-aos="flip-left" data-aos-duration="1000">
            <img src={Man_2} alt="Man_2" />
            <h2 className="service-image-text-1">Arjun</h2>
            <h3 className="service-image-text-2">Backend Developer</h3>
          </div>

        </div> */}
      </section>
      {/*===== services our leader end=====*/}

      {/*===== services counter position start =====*/}
      <ScrollTrigger onEnter={() => setCounterOnScroll(true)} onExit={() => setCounterOnScroll(false)}>
        <section className="service-counter">
          <div className="service-counter-content" data-aos="flip-up" data-aos-duration="500">

            <div className="service-counter-details">
              <h1 className="service-counter-text-1">{counterOnScroll && <CountUp start={0} end={3} duration={2} delay={0} />}+</h1>
              <h2 className="service-counter-text-2">years of experience</h2>
            </div>

            <div className="service-counter-details">
              <h1 className="service-counter-text-1">{counterOnScroll && <CountUp start={0} end={12} duration={2} delay={0} />}+</h1>
              <h2 className="service-counter-text-2">clients</h2>
            </div>

            <div className="service-counter-details">
              <h1 className="service-counter-text-1">{counterOnScroll && <CountUp start={0} end={10} duration={2} delay={0} />}+</h1>
              <h2 className="service-counter-text-2">projects</h2>
            </div>

            <div className="service-counter-details">
              <h1 className="service-counter-text-1">{counterOnScroll && <CountUp start={0} end={92} duration={2} delay={0} />}%</h1>
              <h2 className="service-counter-text-2">customer satisfaction</h2>
            </div>

          </div>
        </section>
      </ScrollTrigger>
      {/*===== services counter position end =====*/}

      {/*===== services project position start =====*/}
      <section className="service-project">
        <div className="service-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="service-project-text-1">Would you like to start a project with us?</h1>
          <p className="service-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>

          <Link to="https://wa.me/917200510350">
            <button className="service-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/*===== services project position end =====*/}

    </>
  );
};

export default Services;
