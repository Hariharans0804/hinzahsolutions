import React from 'react'
import { Link } from "react-router-dom"
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import emailjs from '@emailjs/browser';
import { FaPhoneAlt, FaMapMarkerAlt, FaArrowRight, FaWhatsapp } from 'react-icons/fa';
import { IoIosMail } from "react-icons/io";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

let emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
let mobileRegExp = /^[0-9]{10}$/;

const validationSchema = Yup.object({
  name: Yup.string()
    .required('Name is required'),
  email: Yup.string()
    .matches(emailRegExp, 'Invalid email address')
    .required('Email is required'),
  mobile: Yup.string()
    .matches(mobileRegExp, 'Mobile number must be exactly 10 digits')
    .required('Mobile number is required'),
  subject: Yup.string()
    .required('Subject is required'),
  message: Yup.string()
    .required('Message is required'),
});

const Contact = () => {

  const toastNotifySuccess = () => {
    toast.success('Successfully!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
      // transition: Bounce,
    });
  }

  // let notify = () => toast("Wow so easy!");

  const sendEmail = (values, resetForm) => {
    const serviceID = 'service_0dsmeju';
    const templateID = 'template_xuifv3k';
    const userID = 'ZWMzMOxc_SR0sJ5wt';

    emailjs.send(serviceID, templateID, values, userID)
      .then((response) => {
        console.log('SUCCESS!', response.status, response.text);
        toastNotifySuccess();
        // alert('Email sent successfully');
        resetForm();
      })
      .catch((error) => {
        console.error('FAILED...', error);
        alert('Email sending failed');
      });
  };

  return (
    <>
      {/*===== contact us banner start =====*/}
      <section className="contact-image">
        <div className="contact-overlay"></div>
        <div className="contact-image-content">
          <h1 className="contact-image-details-1" data-aos="fade-down" data-aos-duration="1000">Contact</h1>
          <h2 className="contact-image-details-2" data-aos="fade-down" data-aos-duration="1000">Contact Us for Expert Solutions</h2>
          <p className="contact-image-details-3" data-aos="fade-down" data-aos-duration="1000">Reach out to us for tailored solutions and expert support.<br /> We're here to help with any inquiries or project needs you may have.</p>
        </div>
      </section>
      {/*===== contact us  banner end =====*/}

      {/*===== contact form content start =====*/}
      <section className="contact-part-2">

        <div className="contact-col-left">
          <h3 ><i className="ri-subtract-fill"></i>GET IN TOUCH</h3>
          <h1 >Drop a Message</h1>

          <Formik
            initialValues={{ name: '', mobile: '', email: '', subject: '', message: '' }}
            validationSchema={validationSchema}
            onSubmit={(values, { resetForm }) => {
              // alert(JSON.stringify(values, null, 2));
              sendEmail(values, resetForm);
            }}
          >
            {({ isSubmitting }) => (

              <Form className="contactForm" /*data-aos="fade-right"*/ data-aos-duration="1000">

                <div className="contact-name-number">
                  <div className="contact-form-group1 name">
                    <Field type="text" name="name" placeholder="Your Name" /><br />
                    <ErrorMessage name="name" component="div" style={{ color: "red" }} />
                  </div>

                  <div className="contact-form-group2 mobile">
                    <Field type="text" name="mobile" placeholder="Mobile Number" /><br />
                    <ErrorMessage name="mobile" component="div" style={{ color: "red" }} />
                  </div>
                </div>

                <div className="contact-form-group email">
                  <Field type="text" name="email" placeholder="Your Email" /><br />
                  <ErrorMessage name="email" component="div" style={{ color: "red" }} />
                </div>

                <div className="contact-form-group subject">
                  <Field type="text" name="subject" placeholder="Your Subject" /><br />
                  <ErrorMessage name="subject" component="div" style={{ color: "red" }} />
                </div>

                <div className="contact-form-group message">
                  <Field as="textarea" name="message" placeholder="Message" /><br />
                  <ErrorMessage name="message" component="div" style={{ color: "red" }} />
                </div>

                <div className="contact-form-group-end submit-btn">
                  <button type="submit" disabled={isSubmitting}>SUBMIT NOW
                    <FaArrowRight className="submit-icons" /></button>
                </div>
                <ToastContainer />

              </Form>
            )}
          </Formik>
        </div>

        <div className="contact-col-right" data-aos="fade-left">
          <h2 >Our Address</h2>
          <p>Completely synergize resource taxing relationships<br /> via
            premier niche markets. Professionally cultivate<br />
            one-to-one
            customer service.</p>

          <div className="contact-col-right-1">
            <FaWhatsapp className='contact-icons' />
            <div className="contact-phone-content">
              <h3>Phone :</h3>
              <Link to="https://wa.me/917200510350" style={{ textDecoration: "none", color: "#000000" }}>
                <p>+91 72005 10350</p>
              </Link>
            </div>
          </div>

          <div className="contact-col-right-1">
            <FaPhoneAlt className='contact-icons' />
            <div className="contact-phone-content">
              <h3>Phone :</h3>
              <p>+91 9629527914</p>
            </div>
          </div>

          <div className="contact-col-right-1">
            <FaMapMarkerAlt className='contact-icons' />
            <div className="contact-map-content">
              <h3>Address :</h3>
              <p>No.10, EMG Nagar, 3rd Street, K.Puthur,<br /> Madurai-625 007.</p>
            </div>
          </div>

          <div className="contact-col-right-1">
            <IoIosMail className='contact-icons' />
            <div className="email-content">
              <h3>Email :</h3>
              <Link to="mailto:info@hinzah.com" style={{ textDecoration: 'none', color: "#000000" }}>
                <p>info@hinzah.com</p>
              </Link>
            </div>
          </div>

        </div>
      </section>
      {/*===== contact form content end =====*/}


      {/*===== contact google map content start =====*/}
      <section className="contact-map">
        <div className="contact-map-part" data-aos-duration="1000">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3929.868046095573!2d78.15924031490154!3d9.944935342742452!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3b00c5c074935155%3A0x227ab047bcd2af97!2sHinzah%20Solutions!5e0!3m2!1sen!2sin!4v1722842934607!5m2!1sen!2sin"
            className="map-details"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          // referrerPolicy="strict-origin-when-cross-origin"
          // sandbox="allow-scripts allow-same-origin"
          />
        </div>
      </section>
      {/*===== contact google map content end =====*/}

      {/*===== contact project position start =====*/}
      <section className="contact-project">
        <div className="contact-project-content" data-aos="fade-up" data-aos-duration="1000">
          <h1 className="contact-project-text-1">Would you like to start a project with us?</h1>
          <p className="contact-project-text-2"> Our expert team is ready to transform your ideas into reality with innovative solutions and dedicated support. Let's collaborate to bring your vision to life and achieve outstanding results together.</p>
          <Link to="https://wa.me/917200510350">
            <button className="contact-project-number">+91 72005 10350</button>
          </Link>
        </div>
      </section>

      {/*===== contact project position end =====*/}
    </>
  )
}

export default Contact