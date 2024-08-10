import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaShippingFast, FaRegMoneyBillAlt, FaStar, FaPhoneAlt } from 'react-icons/fa';
import ProductSlider from "./ProductSlider";
import './Home.css'; // Ensure you include your CSS file

export default function Home() {
  return (
    <>
      {/* Blinking Pricelist Button */}
      <div className="pricelist-button-container">
        <a href="/products" className="btn btn-pricelist">Pricelist</a>
        <img src="/assets/rocketsgif.gif" alt="Decorative GIF" className="gif-overlay gif-overlay-pricelist" />
      </div>

      {/* Carousel */}
      <div id="carouselExampleIndicators" className="carousel slide border-0" data-bs-ride="carousel" data-bs-interval="2000">
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="/assets/banner 1.webp" className="d-block w-100" alt="banner 1" />
          </div>
          <div className="carousel-item">
            <img src="/assets/banner 2.webp" className="d-block w-100" alt="banner 2" />
          </div>
          <div className="carousel-item">
            <img src="/assets/banner 3.webp" className="d-block w-100" alt="banner 3" />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      {/* Icon Grid */}
      <div className="container px-4 py-5" id="icon-grid">
        <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4 py-3">
          <div className="col d-flex align-items-start mb-4">
            <div className="feature-icon bg-primary text-light">
              <FaShippingFast style={{ fontSize: '3rem' }} />
            </div>
            <div className="ms-3">
              <h4 className="fw-bold mb-0">Super Fast Delivery</h4>
              <p>Best delivery support.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start mb-4">
            <div className="feature-icon bg-secondary text-light">
              <FaRegMoneyBillAlt style={{ fontSize: '3rem' }} />
            </div>
            <div className="ms-3">
              <h4 className="fw-bold mb-0">Minimum Order</h4>
              <p>For Tamil Nadu & Pondicherry - Rs. 2500/-</p>
            </div>
          </div>
          <div className="col d-flex align-items-start mb-4">
            <div className="feature-icon bg-success text-light">
              <FaStar style={{ fontSize: '3rem' }} />
            </div>
            <div className="ms-3">
              <h4 className="fw-bold mb-0">Best Brand Quality</h4>
              <p>Premium quality crackers.</p>
            </div>
          </div>
          <div className="col d-flex align-items-start mb-4">
            <div className="feature-icon bg-danger text-light">
              <FaPhoneAlt style={{ fontSize: '3rem' }} />
            </div>
            <div className="ms-3">
              <p>For order: +91 9791323661 / +91 9585205399</p>
            </div>
          </div>
        </div>
		 {/* New Arrivals */}
      <div className="container">
        <h2 className="text-center my-5">New Arrivals</h2>
        <ProductSlider />
      </div>
		
		
		
		
        {/* Background GIF */}
        <img src="/assets/rocketsgif.gif" alt="Decorative GIF" className="gif-overlay gif-overlay-icon-grid" />
      </div>

      {/* Three Horizontal Sections */}
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <a href="/products" className="card-link">
              <div className="card mb-4 shadow-sm h-100">
                <img src="/assets/Newarrival1.webp" className="card-img-top" alt="Your Image 1" />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Colourful skyshots & Mega outs</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/products" className="card-link">
              <div className="card mb-4 shadow-sm h-100">
                <img src="/assets/Newarrival8.webp" className="card-img-top" alt="Your Image 2" />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Night cracklings</p>
                </div>
              </div>
            </a>
          </div>
          <div className="col-md-4">
            <a href="/products" className="card-link">
              <div className="card mb-4 shadow-sm h-100">
                <img src="/assets/Customcard2.jpeg" className="card-img-top" alt="Your Image 3" />
                <div className="card-body">
                  <h5 className="card-title"></h5>
                  <p className="card-text">Children colourful cracklings</p>
                </div>
              </div>
            </a>
          </div>
        </div>
        {/* Background GIF */}
        <img src="/assets/rocketsgif.gif" alt="Decorative GIF" className="gif-overlay gif-overlay-new-arrivals" />
      </div>

     
    </>
  );
}
