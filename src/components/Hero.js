import React, { useEffect } from 'react'
import heroimage from '../images/img_1.jpg'
import '../assets/css/aos.css'
import AOS from 'aos';
const Hero = () => {
  useEffect(() => {
  // AOS initialization
  AOS.init({
    duration: 800,
    easing: 'slide'
  });
},[]);
  return (
    <div
  className="site-blocks-cover overlay"
  style={{ backgroundImage: `url(${heroimage})` }}
  data-aos="fade"
  data-stellar-background-ratio="0.5"
>
<div className="container">
    <div className="row align-items-center justify-content-center text-center">
      <div className="col-md-10">
        <div className="row justify-content-center mb-4">
          <div className="col-md-10 text-center">
            <h1 data-aos="fade-up" className="mb-5">
              We give solutions to your <span className="typed-words" />
            </h1>
            <p data-aos="fade-up" data-aos-delay={100}>
              <a href="#" className="btn btn-primary btn-pill">
                Get Started
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
  )
}

export default Hero