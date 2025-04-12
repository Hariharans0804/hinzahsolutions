import React, { useState } from 'react'
import { Link } from "react-router-dom"
import "./../styles/Style.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// import { FaRegWindowMinimize, FaPlay, FaBriefcase, FaLightbulb, FaMedal, FaDigitalTachograph, FaLightbulb } from 'react-icons/fa';
import { IoIosPeople } from "react-icons/io";
import { FaRegWindowMinimize, FaPlay, FaBriefcase, FaStream, FaMedal, FaDigitalTachograph, FaLightbulb } from "react-icons/fa";
import { FaDollarSign, FaPeopleGroup } from "react-icons/fa6";

import Company from "./../assets/images/company.jpg";
import CountUp from 'react-countup'
import ScrollTrigger from 'react-scroll-trigger'


const About = () => {

  const [counterOnScroll, setCounterOnScroll] = useState(false);

  return (
    <>
      {/*===== about banner start =====*/}
      <section className="about-image">
        <div className="about-overlay">

        </div>
        <div className="about-image-content">
          <h1 className="about-image-details-1" data-aos="fade-down" data-aos-duration="1000">About Us</h1>
          <h2 className="about-image-details-2" data-aos="fade-down" data-aos-duration="1000">Welcome to The Hinzah Solutions</h2>
          <p className="about-image-details-3" data-aos="fade-down" data-aos-duration="1000">Innovative solutions tailored to your unique needs. Our team is dedicated to providing exceptional service and cutting-edge technology.Partner with us to transform your vision into reality and achieve outstanding results.</p>
        </div>
      </section>
      {/*===== about banner end =====*/}

      {/*===== about hinzah solutions start =====*/}
      <section className="about-hinzah">
        <div className="about-hizah-content">

          <div className="about-hizah-details" data-aos="fade-up" data-aos-duration="1000">
            <FaRegWindowMinimize className="about-icons" />
            <h1 className="about-hizah-text-1">Who Are We</h1>
            <p className="about-hizah-text-2">We are a team of tech professionals committed to delivering innovative software solutions. Our expertise in web and app development, along with IT consulting, drives business success.</p>
          </div>

          <div className="about-hizah-details" data-aos="fade-up" data-aos-duration="1000">
            <FaRegWindowMinimize className="about-icons" />
            <h1 className="about-hizah-text-1">Our Mission</h1>
            <p className="about-hizah-text-2">Our mission is to deliver innovative software solutions that drive business success. We are dedicated to excellence and committed to meeting our clients' unique needs.</p>
          </div>

          <div className="about-hizah-details" data-aos="fade-up" data-aos-duration="1000">
            <FaRegWindowMinimize className="about-icons" />
            <h1 className="about-hizah-text-1">What We Do</h1>
            <p className="about-hizah-text-2">
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />Web Development</h3>
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />App Development</h3>
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />E-Commerce Development</h3>
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />UI UX Design</h3>
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />Graphic Design</h3>
              <h3 className='about-hizah-text-3'><FaPlay className="about-hinzah-text-icons" />Tech Support</h3>
            </p>
          </div>

        </div>
      </section>
      {/*===== about hinzah solutions end =====*/}

      {/*===== about 6-D process start =====*/}
      <section className="about-process">
        <h1 className='about-process-title' data-aos="fade-down" data-aos-duration="1000">Our 6-D Process</h1>
        <div className="about-process-content">

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">01.</h1>
            <h3 className="about-process-text-2">Discover</h3>
            <p className="about-process-text-3">In the Discover phase of our 6-D process, we analyze your needs to identify key opportunities and set the stage for tailored solutions.</p>
          </div>

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">02.</h1>
            <h3 className="about-process-text-2">Define</h3>
            <p className="about-process-text-3">In the Define phase of our 6-D process, we establish clear project goals and requirements to guide the development of effective solutions.</p>
          </div>

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">03.</h1>
            <h3 className="about-process-text-2">Design</h3>
            <p className="about-process-text-3">In the Design phase of our 6-D process, we create detailed prototypes and plans to ensure a user-centered approach and alignment with project goals.</p>
          </div>

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">04.</h1>
            <h3 className="about-process-text-2">Develop</h3>
            <p className="about-process-text-3">In the Develop phase of our 6-D process, we transform designs into functional software through precise coding and integration.</p>
          </div>

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">05.</h1>
            <h3 className="about-process-text-2">Deploy</h3>
            <p className="about-process-text-3">In the Deploy phase of our 6-D process, we launch the software solution and ensure a smooth transition to the production environment.</p>
          </div>

          <div className="about-process-details" data-aos="fade-up" data-aos-duration="1000">
            <h1 className="about-process-text-1">06.</h1>
            <h3 className="about-process-text-2">Deliver</h3>
            <p className="about-process-text-3">In the Deliver phase of our 6-D process, we provide the final software solution and ensure it meets all requirements and expectations.</p>
          </div>

        </div>
      </section>

      {/*===== about 6-D process end =====*/}

      {/*===== about center image  start =====*/}
      <section className="center-image">
        <div className="center-image-overlay"></div>
      </section>
      {/*===== about center image  end =====*/}

      {/*===== about center image content start =====*/}
      {/* <section className="about-center">

        <div className="about-center-content">
        <FaChalkboardTeacher className="about-center-content-icon"/>
        <h1 className="about-center-content-text-1">Hinzah Solutions</h1>
        <p className="about-center-content-text-2">Our Company is a leading IT services company based in Madurai (India) providing a wide range of solutions like web designing, web application development, Mobile Application, web hosting, custom software development, Server management and portal development.</p>
        </div>

        <div className="about-center-image">
          <img src={Company} alt="Company" />
        </div>
          
      </section> */}
      {/*===== about center image content end =====*/}

      {/*===== about Hide/Show button position start =====*/}
      <section className="about-show">
        <div className="about-show-content">

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaPeopleGroup className="about-show-heading-icon" />10K+ Happy Customers</h2>
            <p className="about-show-text">Over 10,000 satisfied clients and counting.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaBriefcase className="about-show-heading-icon" />Business Range</h2>
            <p className="about-show-text">Providing affordable, high-standard web solutions for small and medium enterprises.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaDollarSign className="about-show-heading-icon" />Affordable Quality</h2>
            <p className="about-show-text">High-quality services at affordable prices for all scales.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaMedal className="about-show-heading-icon" />Quality</h2>
            <p className="about-show-text">Delivering top-notch solutions defined by our clients' standards.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaDigitalTachograph className="about-show-heading-icon" />Digital Experience</h2>
            <p className="about-show-text">Collaborative design and engineering delivering outstanding results for over a decade.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaStream className="about-show-heading-icon" />Simplicity</h2>
            <p className="about-show-text">Clear vision and client-focused solutions for preferred technology partnerships.</p>
          </div>

          <div className="about-show-details">
            <h2 className="about-show-heading"><FaLightbulb className="about-show-heading-icon" />Innovation</h2>
            <p className="about-show-text">Constantly evolving solutions to bring maximum value to our customers.</p>
          </div>

        </div>
      </section>
      {/*===== about Hide/Show button position end =====*/}

      {/*===== about counter position start =====*/}
      <ScrollTrigger onEnter={() => setCounterOnScroll(true)} onExit={() => setCounterOnScroll(false)}>
        <section className="about-counter">
          <div className="about-counter-content" data-aos="flip-up" data-aos-duration="500">

            <div className="about-counter-details">
              <h1 className="about-counter-text-1">{counterOnScroll && <CountUp start={0} end={3} duration={2} delay={0} />}+</h1>
              <h2 className="about-counter-text-2">Years Of Experience</h2>
            </div>

            <div className="about-counter-details">
              <h1 className="about-counter-text-1">{counterOnScroll && <CountUp start={0} end={12} duration={2} delay={0} />}+</h1>
              <h2 className="about-counter-text-2">Clients</h2>
            </div>

            <div className="about-counter-details">
              <h1 className="about-counter-text-1">{counterOnScroll && <CountUp start={0} end={10} duration={2} delay={0} />}+</h1>
              <h2 className="about-counter-text-2">Projects</h2>
            </div>

            <div className="about-counter-details">
              <h1 className="about-counter-text-1">{counterOnScroll && <CountUp start={0} end={92} duration={2} delay={0} />}%</h1>
              <h2 className="about-counter-text-2">Customer Satisfaction</h2>
            </div>

          </div>
        </section>
      </ScrollTrigger>
      {/*===== about counter position end =====*/}

      {/*===== about project position start =====*/}
      <section className="about-project">
        <div className="about-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="about-project-text-1">Would you like to start a project with us?</h1>
          <p className="about-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>
          <Link to="https://wa.me/917200510350">
            <button className="about-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/*===== about project position end =====*/}

    </>
  )
}

export default About