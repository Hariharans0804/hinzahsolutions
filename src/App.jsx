import React, { Suspense, lazy, useEffect, useState } from 'react';
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './components/Home'
import About from './components/About'
import Services from './components/Services'
import Mission from './components/Mission'
import Products from './components/Products'
import Contact from './components/Contact'
import NotFound from './components/NotFound'
import Demo from './components/Demo'
import ScrollToTop from './components/ScrollToTop'
import { ThreeDot } from 'react-loading-indicators';


// // Lazy load components to improve performance
// const Home = lazy(() => import('./components/Home'));
// const About = lazy(() => import('./components/About'));
// const Services = lazy(() => import('./components/Services'));
// const Mission = lazy(() => import('./components/Mission'));
// const Products = lazy(() => import('./components/Products'));
// const Contact = lazy(() => import('./components/Contact'));
// const Demo = lazy(() => import('./components/Demo'));
// const NotFound = lazy(() => import('./components/NotFound'));


// const App = () => {

//   return (
//     <BrowserRouter>
//       <ScrollToTop />

//       {/* Add Suspense to handle lazy-loaded components */}
//       {/* <Suspense fallback={
//         <>
//           <div className="text-center my-5">Loading...</div>
//           <ThreeDot variant="bounce" color="#404C66" size="medium" text="" textColor="" />
//         </>
//       }> */}
//       <Suspense>
//         <Navbar />
//         <Routes>
//           <Route path='/' element={<Home />} />
//           <Route path='/about' element={<About />} />
//           <Route path='/services' element={<Services />} />
//           <Route path='/mission' element={<Mission />} />
//           <Route path='/products' element={<Products />} />
//           <Route path='/contact' element={<Contact />} />
//           <Route path='/demo' element={<Demo />} />
//           <Route path="*" element={<NotFound />} />
//         </Routes>
//         <Footer />
//       </Suspense>

//     </BrowserRouter>
//   )
// }


const App = () => {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/services' element={<Services />} />
          <Route path='/mission' element={<Mission />} />
          <Route path='/products' element={<Products />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='/demo' element={<Demo />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>

    </>
  )
}



export default App






