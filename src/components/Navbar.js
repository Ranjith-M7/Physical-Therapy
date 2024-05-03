import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="site-navbar" role="banner">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-11 col-xl-4">
            <h1 className="mb-0 site-logo">
              <NavLink to="/" className="text-white mb-0">
                PhysicalTherapy<span className="text-primary">.</span>{" "}
              </NavLink>
            </h1>
          </div>
          <div className="col-12 col-md-8 d-none d-xl-block">
            <nav
              className="site-navigation position-relative text-right"
              role="navigation"
            >
              <ul className="site-menu js-clone-nav mr-auto d-none d-lg-block">
                <li className="active">
                  <NavLink to="/">
                    <span>Home</span>
                  </NavLink>
                </li>
                <li className="has-children">
                  <NavLink to="#">
                    <span>Services</span>
                  </NavLink>
                  <ul className="dropdown arrow-top">
                    <li>
                      <NavLink to="#">Physical Therapy</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Massage Therapy</NavLink>
                    </li>
                    <li>
                      <NavLink to="#">Chiropractic Therapy</NavLink>
                    </li>
                    <li className="has-children">
                      <NavLink to="#">Dropdown</NavLink>
                      <ul className="dropdown">
                        <li>
                          <NavLink to="#">Physical Therapy</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Massage Therapy</NavLink>
                        </li>
                        <li>
                          <NavLink to="#">Chiropractic Therapy</NavLink>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li>
                  <NavLink to="/about">
                    <span>About</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/blog">
                    <span>Blog</span>
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/contact">
                    <span>Contact</span>
                  </NavLink>
                </li>
              </ul>
            </nav>
          </div>
          <div
            className="d-inline-block d-xl-none ml-md-0 mr-auto py-3"
            style={{ position: "relative", top: 3 }}
          >
            <NavLink
              to="#"
              className="site-menu-toggle js-menu-toggle text-white"
            >
              <span className="icon-menu h3" />
            </NavLink>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
