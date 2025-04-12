// import React, { useState } from 'react';

// let ToggleDivs = () => {
//   // State to manage visibility of divs
//   const [visibleDiv, setVisibleDiv] = useState(null);

//   // Function to toggle visibility
//   let toggleDiv = (divName) => {
//     setVisibleDiv((prevDiv) => (prevDiv === divName ? null : divName));
//   };

//   return (
//     <div>
//       <button onClick={() => toggleDiv('div1')}>Toggle Div 1</button>
//       <button onClick={() => toggleDiv('div2')}>Toggle Div 2</button>
//       <button onClick={() => toggleDiv('div3')}>Toggle Div 3</button>

//       {visibleDiv === 'div1' && <div>This is Div 1</div>}
//       {visibleDiv === 'div2' && <div>This is Div 2</div>}
//       {visibleDiv === 'div3' && <div>This is Div 3</div>}
//     </div>
//   );
// };

// export default ToggleDivs;

// import React, { useState } from 'react';

// const ToggleDivs = () => {
//   // State to manage visibility of divs
//   const [visibleDiv, setVisibleDiv] = useState(null);

//   // Function to toggle visibility
//   const toggleDiv = (divName) => {
//     setVisibleDiv((prevDiv) => (prevDiv === divName ? null : divName));
//   };

//   // Function to determine button style
//   const getButtonStyle = (divName) => {
//     return visibleDiv === divName ? { backgroundColor: 'blue', color: 'white' } : {};
//   };

//   return (
//     <div>
//       <button style={getButtonStyle('div1')} onClick={() => toggleDiv('div1')}>Toggle Div 1</button>
//       <button style={getButtonStyle('div2')} onClick={() => toggleDiv('div2')}>Toggle Div 2</button>
//       <button style={getButtonStyle('div3')} onClick={() => toggleDiv('div3')}>Toggle Div 3</button>

//       {visibleDiv === 'div1' && <div>This is Div 1</div>}
//       {visibleDiv === 'div2' && <div>This is Div 2</div>}
//       {visibleDiv === 'div3' && <div>This is Div 3</div>}
//     </div>
//   );
// };

// export default ToggleDivs;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';

// const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const mobileRegExp = /^[0-9]{10}$/;

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('Name is required'),
//   email: Yup.string()
//     .matches(emailRegExp, 'Invalid email address')
//     .required('Email is required'),
//   mobile: Yup.string()
//     .matches(mobileRegExp, 'Mobile number must be exactly 10 digits')
//     .required('Mobile number is required'),
//   subject: Yup.string()
//     .required('Subject is required'),
//   message: Yup.string()
//     .required('Message is required'),
// });

// const MyForm = () => {
//   return (
//     <Formik
//       initialValues={{ name: '', email: '', mobile: '', subject: '', message: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         alert(JSON.stringify(values, null, 2));
//         resetForm();
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="name">Name</label>
//             <Field type="text" name="name" />
//             <ErrorMessage name="name" component="div" />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="text" name="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div>
//             <label htmlFor="mobile">Mobile</label>
//             <Field type="text" name="mobile" />
//             <ErrorMessage name="mobile" component="div" />
//           </div>

//           <div>
//             <label htmlFor="subject">Subject</label>
//             <Field type="text" name="subject" />
//             <ErrorMessage name="subject" component="div" />
//           </div>

//           <div>
//             <label htmlFor="message">Message</label>
//             <Field as="textarea" name="message" />
//             <ErrorMessage name="message" component="div" />
//           </div>

//           <button type="submit" disabled={isSubmitting}>Submit </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MyForm;


// import React, { useRef } from 'react';
// import emailjs from '@emailjs/browser';

// const ContactUs = () => {
//   const form = useRef();

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//       .sendForm('service_4dbwkue', 'template_nwz49bg', form.current, {
//         publicKey: '3j407FgMvhqfynau7',
//       })
//       .then(
//         () => {
//           console.log('SUCCESS!');
//         },
//         (error) => {
//           console.log('FAILED...', error.text);
//         },
//       );
//   };

//   return (
//     <form ref={form} onSubmit={sendEmail}>
//       <label>Name</label>
//       <input type="text" name="from_name" />
//       <label>Email</label>
//       <input type="email" name="from_email" />
//       <label>Message</label>
//       <textarea name="message" />
//       <input type="submit" value="Send" />
//     </form>
//   );
// };

// export default ContactUs;

// import React from 'react';
// import { Formik, Form, Field, ErrorMessage } from 'formik';
// import * as Yup from 'yup';
// import emailjs from '@emailjs/browser';

// const emailRegExp = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
// const mobileRegExp = /^[0-9]{10}$/;

// const validationSchema = Yup.object({
//   name: Yup.string()
//     .required('Name is required'),
//   email: Yup.string()
//     .matches(emailRegExp, 'Invalid email address')
//     .required('Email is required'),
//   mobile: Yup.string()
//     .matches(mobileRegExp, 'Mobile number must be exactly 10 digits')
//     .required('Mobile number is required'),
//   subject: Yup.string()
//     .required('Subject is required'),
//   message: Yup.string()
//     .required('Message is required'),
// });

// const MyForm = () => {
//   const sendEmail = (values, resetForm) => {
//     const serviceID = 'service_4dbwkue';
//     const templateID = 'template_nwz49bg';
//     const userID = '3j407FgMvhqfynau7';

//     emailjs.send(serviceID, templateID, values, userID)
//       .then((response) => {
//         console.log('SUCCESS!', response.status, response.text);
//         alert('Email sent successfully');
//         resetForm();
//       })
//       .catch((error) => {
//         console.error('FAILED...', error);
//         alert('Email sending failed');
//       });
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', email: '', mobile: '', subject: '', message: '' }}
//       validationSchema={validationSchema}
//       onSubmit={(values, { resetForm }) => {
//         sendEmail(values, resetForm);
//       }}
//     >
//       {({ isSubmitting }) => (
//         <Form>
//           <div>
//             <label htmlFor="name">Name</label>
//             <Field type="text" name="name" />
//             <ErrorMessage name="name" component="div" />
//           </div>

//           <div>
//             <label htmlFor="email">Email</label>
//             <Field type="text" name="email" />
//             <ErrorMessage name="email" component="div" />
//           </div>

//           <div>
//             <label htmlFor="mobile">Mobile</label>
//             <Field type="text" name="mobile" />
//             <ErrorMessage name="mobile" component="div" />
//           </div>

//           <div>
//             <label htmlFor="subject">Subject</label>
//             <Field type="text" name="subject" />
//             <ErrorMessage name="subject" component="div" />
//           </div>

//           <div>
//             <label htmlFor="message">Message</label>
//             <Field as="textarea" name="message" />
//             <ErrorMessage name="message" component="div" />
//           </div>

//           <button type="submit" disabled={isSubmitting}>
//             Submit
//           </button>
//         </Form>
//       )}
//     </Formik>
//   );
// };

// export default MyForm;

// data - aos="fade-up" data - aos - duration="1000"
// data - aos="fade-up" data - aos - duration="1000"



{/* <div>
  <table cellspacing="2" cellpadding="2" border="0">
    <tr><td></td><td><b>Contact Us Form</b></td></tr>
    <tr><td><b>Name</b></td><td><asp:TextBox ID="txtName" runat="server" /></td></tr>
    <tr><td><b>Email</b></td><td><asp:TextBox ID="txtEmail" runat="server" /></td></tr>
    <tr><td><b>Subject</b></td><td><asp:TextBox ID="txtSubject" runat="server" /></td></tr>
    <tr><td valign="top"><b>Message</b></td><td> <asp:TextBox ID="txtMessage" Rows="5" Columns="40" TextMode="MultiLine" runat="server" /></td></tr>
    <tr><td></td><td><asp:button ID="btnSubmit" Text="Submit" runat="server" onclick="btnSubmit_Click" CssClass="Button" /></td></tr>
    <tr><td colspan="2" style=" color:red"><asp:Label ID="lbltxt" runat="server" /></td></tr>
  </table>
</div> */}


