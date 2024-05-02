import React from 'react'

const Navbar = () => {
  return (
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
              <li className="active">
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
              <li>
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
  
  )
}

export default Navbar