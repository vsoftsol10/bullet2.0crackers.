import React from "react";
import { NavLink } from "react-router-dom";
import './NavBar.css';

export default function NavBar() {
  return (
    <>
      <div className="row">
        <div className="col-12">
          <marquee className="marquee">
            <i className="fa fa-fireworks marquee-icon"></i>
			 <img src="./assets/logos2.png" alt="Logo 2" className="marquee-img" />
            Diwali Booking Started ...!
            <img src="./assets/logos1.png" alt="Logo 1" className="marquee-img" />
            <i className="fa fa-fireworks marquee-icon"></i>
            Special discount is confirmed for special orders 
            <img src="./assets/logos2.png" alt="Logo 2" className="marquee-img" />
            <i className="fa fa-fireworks marquee-icon"></i>
            Minimum order for Tamilnadu ₹2500 
            <img src="./assets/logos3.png" alt="Logo 3" className="marquee-img" />
            <i className="fa fa-fireworks marquee-icon"></i>
            Other states ₹5000
            <img src="./assets/logos4.png" alt="Logo 4" className="marquee-img" />
            <i className="fa fa-fireworks marquee-icon"></i>
            <img src="./assets/logos5.png" alt="Logo 5" className="marquee-img" />
            <i className="fa fa-fireworks marquee-icon"></i>
          </marquee>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg bg-white navbar-light py-3 shadow-sm">
        <div className="container">
          <NavLink className="navbar-brand d-flex align-items-center" to="/">
            <img
              src="./assets/logo.png"
              alt="Logo"
              className="logo"
            />
            <span className="brand-text">Bullet Crackers 2.0</span>
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo01"
            aria-controls="navbarTogglerDemo01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink className="nav-link" aria-current="page" to="/">
                  Home
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/products">
                  Pricelist
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/about">
                  About
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link" to="/contact">
                  Contact
                </NavLink>
              </li>
            </ul>
            <div className="d-flex buttons">
              {/* Removed the cart button */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}
