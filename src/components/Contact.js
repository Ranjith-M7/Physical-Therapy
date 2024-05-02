import React from 'react'

const Contact = () => {
  return (
    <>
  <title>Physical Theraphy — Website Template by Colorlib</title>
  <meta charSet="utf-8" />
  <meta
    name="viewport"
    content="width=device-width, initial-scale=1, shrink-to-fit=no"
  />
  <link
    href="https://fonts.googleapis.com/css?family=Rubik:400,700"
    rel="stylesheet"
  />
  <link rel="stylesheet" href="fonts/icomoon/style.css" />
  <link rel="stylesheet" href="css/bootstrap.min.css" />
  <link rel="stylesheet" href="css/magnific-popup.css" />
  <link rel="stylesheet" href="css/jquery-ui.css" />
  <link rel="stylesheet" href="css/owl.carousel.min.css" />
  <link rel="stylesheet" href="css/owl.theme.default.min.css" />
  <link rel="stylesheet" href="css/bootstrap-datepicker.css" />
  <link rel="stylesheet" href="fonts/flaticon/font/flaticon.css" />
  <link rel="stylesheet" href="css/aos.css" />
  <link rel="stylesheet" href="css/rangeslider.css" />
  <link rel="stylesheet" href="css/style.css" />
  <div className="site-wrap">
    <div className="site-mobile-menu">
      <div className="site-mobile-menu-header">
        <div className="site-mobile-menu-close mt-3">
          <span className="icon-close2 js-menu-toggle" />
        </div>
      </div>
      <div className="site-mobile-menu-body" />
    </div>
    <header className="site-navbar" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-11 col-xl-4">
            <h1 className="mb-0 site-logo">
              <a href="index.html" className="text-white mb-0">
                PhysicalTherapy<span className="text-primary">.</span>{" "}
              </a>
            </h1>
          </div>
          <div className="col-12 col-md-8 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li>
                  <a href="index.html">
                    <span>Home</span>
                  </a>
                </li>
                <li className="has-children">
                  <a href="services.html">
                    <span>Services</span>
                  </a>
                  <ul className="dropdown arrow-top">
                    <li>
                      <a href="#">Physical Therapy</a>
                    </li>
                    <li>
                      <a href="#">Massage Therapy</a>
                    </li>
                    <li>
                      <a href="#">Chiropractic Therapy</a>
                    </li>
                    <li className="has-children">
                      <a href="#">Dropdown</a>
                      <ul className="dropdown">
                        <li>
                          <a href="#">Physical Therapy</a>
                        </li>
                        <li>
                          <a href="#">Massage Therapy</a>
                        </li>
                        <li>
                          <a href="#">Chiropractic Therapy</a>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <a href="about.html">
                    <span>About</span>
                  </a>
                </li>
                <li>
                  <a href="blog.html">
                    <span>Blog</span>
                  </a>
                </li>
                <li className="active">
                  <a href="contact.html">
                    <span>Contact</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style={{ position: "relative", top: 3 }}
          >
            <a href="#" className="site-menu-toggle js-menu-toggle text-white">
              <span className="icon-menu h3" />
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
  <div
    className="site-blocks-cover overlay"
    style={{ backgroundImage: "url(images/hero_bg_1.jpg)" }}
    data-aos="fade"
    data-stellar-background-ratio="0.5"
  >
    <div className="container">
      <div className="row align-items-center justify-content-center text-center">
        <div className="col-md-10">
          <div className="row justify-content-center mb-4">
            <div className="col-md-10 text-center">
              <h1 data-aos="fade-up" className="mb-5">
                Get <span className="typed-words" />
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="site-section bg-light">
    <div className="container">
      <div className="row">
        <div className="col-md-7 mb-5" data-aos="fade">
          <form
            action="#"
            className="p-5 bg-white"
            style={{ marginTop: "-150px" }}
          >
            <div className="row form-group">
              <div className="col-md-6 mb-3 mb-md-0">
                <label className="text-black" htmlFor="fname">
                  First Name
                </label>
                <input type="text" id="fname" className="form-control" />
              </div>
              <div className="col-md-6">
                <label className="text-black" htmlFor="lname">
                  Last Name
                </label>
                <input type="text" id="lname" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="text-black" htmlFor="email">
                  Email
                </label>
                <input type="email" id="email" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="text-black" htmlFor="subject">
                  Subject
                </label>
                <input type="subject" id="subject" className="form-control" />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <label className="text-black" htmlFor="message">
                  Message
                </label>
                <textarea
                  name="message"
                  id="message"
                  cols={30}
                  rows={7}
                  className="form-control"
                  placeholder="Write your notes or questions here..."
                  defaultValue={""}
                />
              </div>
            </div>
            <div className="row form-group">
              <div className="col-md-12">
                <input
                  type="submit"
                  defaultValue="Send Message"
                  className="btn btn-pill btn-primary btn-md text-white"
                />
              </div>
            </div>
          </form>
        </div>
        <div className="col-md-5" data-aos="fade" data-aos-delay={100}>
          <div className="p-4 mb-3 bg-white">
            <p className="mb-0 font-weight-bold">Address</p>
            <p className="mb-4">
              203 Fake St. Mountain View, San Francisco, California, USA
            </p>
            <p className="mb-0 font-weight-bold">Phone</p>
            <p className="mb-4">
              <a href="#">+1 232 3235 324</a>
            </p>
            <p className="mb-0 font-weight-bold">Email Address</p>
            <p className="mb-0">
              <a href="#">youremail@domain.com</a>
            </p>
          </div>
          <div className="p-4 mb-3 bg-white">
            <h3 className="h5 text-black mb-3">More Info</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa ad
              iure porro mollitia architecto hic consequuntur. Distinctio nisi
              perferendis dolore, ipsa consectetur? Fugiat quaerat eos qui,
              libero neque sed nulla.
            </p>
            <p>
              <a
                href="#"
                className="btn btn-primary px-4 py-2 text-white btn-pill btn-sm"
              >
                Learn More
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div
    className="mt-5 block-cta-1 primary-overlay"
    style={{ backgroundImage: 'url("images/hero_bg_2.jpg")' }}
  >
    <div className="container">
      <div className="row align-items-center justify-content-between">
        <div className="col-lg-7 mb-4 mb-lg-0">
          <h2 className="mb-3 mt-0 text-white">
            Upto 30% Discount for The First Commers
          </h2>
          <p className="mb-0 text-white lead">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
        </div>
        <div className="col-lg-4">
          <p className="mb-0">
            <a
              href="contact.html"
              className="btn btn-outline-white text-white btn-md btn-pill px-5 font-weight-bold btn-block"
            >
              Contact Us
            </a>
          </p>
        </div>
      </div>
    </div>
  </div>
  <footer className="site-footer">
    <div className="container">
      <div className="row">
        <div className="col-md-9">
          <div className="row">
            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
              <h2 className="footer-heading mb-4">Quick Links</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
              <h2 className="footer-heading mb-4">Products</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
              <h2 className="footer-heading mb-4">Features</h2>
              <ul className="list-unstyled">
                <li>
                  <a href="#">About Us</a>
                </li>
                <li>
                  <a href="#">Services</a>
                </li>
                <li>
                  <a href="#">Testimonials</a>
                </li>
                <li>
                  <a href="#">Contact Us</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 mb-5 mb-lg-0 col-lg-3">
              <h2 className="footer-heading mb-4">Follow Us</h2>
              <a href="#" className="pl-0 pr-3">
                <span className="icon-facebook" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-twitter" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-instagram" />
              </a>
              <a href="#" className="pl-3 pr-3">
                <span className="icon-linkedin" />
              </a>
            </div>
          </div>
        </div>
        <div className="col-lg-3">
          <h2 className="footer-heading mb-4">Subscribe Newsletter</h2>
          <p>
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts.
          </p>
          <form action="#" method="post" className="subscription">
            <div className="input-group mb-3  d-flex align-items-stretch">
              <input
                type="text"
                className="form-control bg-transparent"
                placeholder="Enter Email"
                aria-label="Enter Email"
                aria-describedby="button-addon2"
              />
              <button
                className="btn btn-primary text-white"
                type="button"
                id="button-addon2"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
      <div className="row pt-5 mt-5">
        <div className="col-12 text-md-center text-left">
          <p>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
            Copyright © All rights reserved | This template is made with{" "}
            <i className="icon-heart text-danger" aria-hidden="true" /> by{" "}
            <a href="https://colorlib.com" target="_blank">
              Colorlib
            </a>
            {/* Link back to Colorlib can't be removed. Template is licensed under CC BY 3.0. */}
          </p>
        </div>
      </div>
    </div>
  </footer>
</>

  )
}

export default Contact