import React from 'react'
import { Link } from "react-router-dom"
import "./../styles/Style.css";
import CountUp from "react-countup";
import ScrollTrigger from "react-scroll-trigger";

import Product_1 from "./../assets/images/product-1.webp";
import Product_2 from "./../assets/images/product-2.jpg";
import Product_3 from "./../assets/images/product-3.avif";
import Product_4 from "./../assets/images/product-4.webp";
import Product_5 from "./../assets/images/product-5.jpg";
import Product_6 from "./../assets/images/product-6.jpg";
import Product_7 from "./../assets/images/product-7.jpg";
import Product_8 from "./../assets/images/product-8.jpg";
import Product_9 from "./../assets/images/product-9.jpg";
import Product_10 from "./../assets/images/product-10.jpg";
import Product_11 from "./../assets/images/product-11.jpg";


const Products = () => {
  return (
    <>
      {/*===== products banner start =====*/}
      <section className="product-image">
        <div className="product-overlay"></div>
        <div className="product-image-content">
          <h1 className="product-image-details-1" data-aos="fade-down" data-aos-duration="1000">Products</h1>
          <h2 className="product-image-details-2" data-aos="fade-down" data-aos-duration="1000">
            Discover Our Innovative Software Products
          </h2>
          <p className="product-image-details-3" data-aos="fade-down" data-aos-duration="1000">Explore our range of innovative software products designed to boost your business efficiency. <br />Discover solutions tailored to meet your unique needs and drive growth.</p>
        </div>
      </section>
      {/*===== products banner end =====*/}

      {/*===== products content start =====*/}
      <section className="product-contents">

        <section className="product-content-1">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">Billing Software</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our billing software streamlines your invoicing process with accuracy and ease. Automate billing, manage payments, and track financials effortlessly. Enhance your business operations with our user-friendly solution.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-1" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_2} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        <section className="product-content-2">
          <div className="product-details-2">
            <div className="product-details-part-2">
              <img src={Product_1} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-left" data-aos-duration="1000">Website Development</h1>
              <p className="product-details-text" data-aos="fade-left" data-aos-duration="1000">Our website development services create stunning, responsive websites tailored to your business needs. We focus on user experience, performance, and functionality to ensure your online presence stands out. Let us help you build a site that drives engagement and growth.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-2" data-aos="fade-left" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
          </div>
        </section>


        <section className="product-content-3">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">Windows App Development</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our Windows app development services deliver high-performance, user-friendly applications tailored to your needs. We focus on functionality, design, and seamless integration to enhance user experience. Trust us to create a Windows app that drives productivity and engagement.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-3" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_3} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        <section className="product-content-4">
          <div className="product-details-2">
            <div className="product-details-part-2">
              <img src={Product_4} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-left" data-aos-duration="1000">Graphic Design</h1>
              <p className="product-details-text" data-aos="fade-left" data-aos-duration="1000">Our graphic design services bring your brand to life with stunning visuals and creative solutions. From logos to marketing materials, we ensure your brand stands out. Let us create designs that captivate and communicate your message effectively.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-4" data-aos="fade-left" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="product-content-1">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">Cargo company Software</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our cargo company software streamlines logistics and enhances operational efficiency. Manage shipments, track deliveries, and optimize routes with ease. Empower your business with our reliable and user-friendly solution.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-1" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_9} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        <section className="product-content-2">
          <div className="product-details-2">
            <div className="product-details-part-2">
              <img src={Product_7} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-left" data-aos-duration="1000">Restaurant Management System</h1>
              <p className="product-details-text" data-aos="fade-left" data-aos-duration="1000">Our restaurant management system simplifies operations and enhances customer service. Streamline reservations, manage orders, and track inventory effortlessly. Optimize your restaurant's efficiency with our comprehensive solution.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-2" data-aos="fade-left" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
          </div>
        </section>


        <section className="product-content-3">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">Mobile Apps Development</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our mobile app development services create innovative and user-friendly applications for iOS and Android. We focus on functionality, design, and seamless performance. Elevate your business with custom mobile solutions tailored to your needs.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-3" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_6} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        <section className="product-content-4">
          <div className="product-details-2">
            <div className="product-details-part-2">
              <img src={Product_8} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-left" data-aos-duration="1000">Travel and Tourism</h1>
              <p className="product-details-text" data-aos="fade-left" data-aos-duration="1000">Our travel and tourism software streamlines bookings, manages itineraries, and enhances customer experiences. Designed for the industry, it boosts efficiency and satisfaction. Elevate your travel business with our advanced solutions.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-4" data-aos="fade-left" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
          </div>
        </section>

        <section className="product-content-1">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">E Commerce Website</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our e-commerce website development services create robust, user-friendly platforms for your online business. We focus on seamless navigation, secure transactions, and engaging design. Boost your sales and customer satisfaction with our customized e-commerce solutions.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-2" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_5} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        <section className="product-content-2">
          <div className="product-details-2">
            <div className="product-details-part-2">
              <img src={Product_10} alt="Mission" data-aos="fade-right" data-aos-duration="1000" />
            </div>
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-left" data-aos-duration="1000">Payroll Management</h1>
              <p className="product-details-text" data-aos="fade-left" data-aos-duration="1000">Our payroll management software simplifies payroll processing and ensures accuracy in employee payments. Manage salaries, taxes, and compliance effortlessly with our intuitive system. Streamline your payroll operations and reduce administrative overhead with our comprehensive solution.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-1" data-aos="fade-left" data-aos-duration="1000" left>Contact us</button>
              </Link>
            </div>
          </div>
        </section>


        <section className="product-content-3">
          <div className="product-details-1">
            <div className="product-details-part-1">
              <h1 className="product-details-title" data-aos="fade-right" data-aos-duration="1000">Finance Management</h1>
              <p className="product-details-text" data-aos="fade-right" data-aos-duration="1000">Our finance management software offers a comprehensive solution for tracking and optimizing your financial operations. Manage budgets, monitor expenses, and generate insightful reports with ease. Enhance your financial oversight and decision-making with our advanced tools.</p>
              <Link to="https://wa.me/917200510350">
                <button className="product-contact-number-3" data-aos="fade-right" data-aos-duration="1000">Contact us</button>
              </Link>
            </div>
            <div className="product-details-part-2">
              <img src={Product_11} alt="Mission" data-aos="fade-left" data-aos-duration="1000" />
            </div>
          </div>
        </section>

        {/* <section className="product-content-4">
        <div className="product-details">
        <div className="product-details-part-2">
           <img src={Product_11} alt="Mission" />
           </div>
          <div className="product-details-part-1">
          <h1 className="product-details-title">Billing Software</h1>
           <p className="product-details-text">Being a service oriented IT solutions provider, we built strong partnership with our clients, gain an in-depth understanding of their business & their competition. We constantly develop new services & strategic business solutions to address customer needs.</p>
           <button className="product-contact-number-4">Contact us</button>
          </div>
        </div>
      </section> */}

      </section>
      {/*===== products content end =====*/}

      {/*===== products project position start =====*/}
      <section className="product-project">
        <div className="product-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="product-project-text-1">Would you like to start a project with us?</h1>
          <p className="product-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>
          <Link to="https://wa.me/917200510350">
            <button className="product-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/*===== products project position end =====*/}
    </>
  )
}

export default Products