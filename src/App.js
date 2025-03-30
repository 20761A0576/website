import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './Components/Home';
import Portfolio from "./Components/Portfolio";
import Portfolio2 from "./Components/Portfolio2";
import Navbar from "./Components/Navbar";
import AboutUs from "./Components/AboutUs";
// import ContactUs from "./Components/ContactUs";
import Footer from "./Components/Footer";
import Gallery1 from "./Components/Gallery1";
import Contact from "./Components/Contact";
import Services from "./Components/Services";

function App() {
  return (
    <div className="relative min-h-screen">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Gallery1" element={<Gallery1 />} /> 
          <Route path="/portfolio" element={<Portfolio />} />
        </Routes>
        <Portfolio/>
        <AboutUs />
        {/* <ContactUs /> */}
        <Footer />
        <Contact/>
        <Services />
       <Portfolio2/>
      </BrowserRouter>
    </div>
  );
}

export default App;
