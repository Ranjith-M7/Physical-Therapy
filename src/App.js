import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./assets/css/style.css";
import "./assets/css/style.css.map";
import "./assets/css/rangeslider.css";
import "./assets/css/aos.css";
import "./assets/css/bootstrap-datepicker.css";
import "./assets/css/bootstrap.min.css.map";
import "./assets/css/bootstrap.min.css";
import "./assets/css/magnific-popup.css";

/* import './assets/css/mediaelementplayer.css'
import './assets/css/owl.carousel.min.css'
import './assets/css/owl.theme.default.min.css' */

import HomePage from "./components/HomePage";
import About from "./components/About";
import Blog from "./components/Blog";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
