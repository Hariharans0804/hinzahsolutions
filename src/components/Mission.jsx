import React from "react";
import { Link } from "react-router-dom"
import "./../styles/Style.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Mission_1 from "./../assets/images/mission-1.jpg";
import Mission_2 from "./../assets/images/mission-2.jpg";
import Mission_3 from "./../assets/images/mission-3.jpg";

const Mission = () => {
  return (
    <>
      {/*===== mission banner start =====*/}
      <section className="mission-image">
        <div className="mission-overlay"></div>
        <div className="mission-image-content">
          <h1 className="mission-image-details-1" data-aos="fade-down" data-aos-duration="1000">Mission</h1>
          <h2 className="mission-image-details-2" data-aos="fade-down" data-aos-duration="1000">
            Empowering businesses through innovative technology solutions.
          </h2>
          <p className="mission-image-details-3" data-aos="fade-down" data-aos-duration="1000">
            Our mission is to empower businesses with innovative and
            high-quality technology solutions.
            <br /> We strive to drive growth and efficiency through exceptional
            service and cutting-edge technology.
          </p>
        </div>
      </section>
      {/*===== mission banner end =====*/}

      {/*===== mission content start =====*/}
      <section className="mission-content-1">
        <div className="mission-details-1">
          <div className="mission-details-part-1">
            <p className="mission-details-text" data-aos="fade-right" data-aos-duration="1000"> Our company is interested in providing comprehensive automated business solutions for commercial & specialized companies in India and Middle East. </p>
            <Link to="https://wa.me/917200510350">
              <button className="mission-contact-number-1" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
            </Link>
          </div>
          <div className="mission-details-part-2">
            <img src={Mission_1} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
          </div>
        </div>
      </section>

      <section className="mission-content-2">
        <div className="mission-details-2">
          <div className="mission-details-part-2">
            <img src={Mission_2} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
          </div>
          <div className="mission-details-part-1">
            <p className="mission-details-text" data-aos="fade-left" data-aos-duration="1000">Being a service oriented IT solutions provider, we built strong partnership with our clients, gain an in-depth understanding of their business & their competition. We constantly develop new services & strategic business solutions to address customer needs.</p>
            <Link to="https://wa.me/917200510350">
              <button className="mission-contact-number-2" data-aos="fade-left" data-aos-duration="1000">Contact us</button>
            </Link>
          </div>
        </div>
      </section>


      <section className="mission-content-3">
        <div className="mission-details-1">
          <div className="mission-details-part-1">
            <p className="mission-details-text" data-aos="fade-right" data-aos-duration="1000">We use state-of-the-art technologies to push businesses to the limit of excellence & to realize its full potential. We are much focused in providing the best of after-sales service as it is the main element which the client looks for when choosing a solution.</p>
            <Link to="https://wa.me/917200510350">
              <button className="mission-contact-number-3" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
            </Link>
          </div>
          <div className="mission-details-part-2">
            <img src={Mission_3} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
          </div>
        </div>
      </section>

      {/*===== mission content end =====*/}

      {/*===== mission project position start =====*/}
      <section className="mission-project">
        <div className="mission-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="mission-project-text-1">Would you like to start a project with us?</h1>
          <p className="mission-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>
          <Link to="https://wa.me/917200510350">
            <button className="mission-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/*===== mission project position end =====*/}
    </>
  );
};

export default Mission;
