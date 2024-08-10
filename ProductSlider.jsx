// src/components/ProductSlider.js

import React, { useState } from 'react';
import Slider from 'react-slick';
import { Modal, Button } from 'react-bootstrap';
import { Wrapper } from './ProductSliderStyled'; // Import the styled component
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import 'bootstrap/dist/css/bootstrap.min.css';

const products = [
  { name: 'Spinner', img: '/assets/Newarrival1.webp', price: '₹300', stock: 'In Stock' },
  { name: 'Giftpack', img: '/assets/Newarrival2.webp', price: '₹600', stock: 'In Stock' },
  { name: 'Flower Pot', img: '/assets/Newarrival3.webp', price: '₹200', stock: 'Out of Stock' },
  { name: 'Doubleshots', img: '/assets/Newarrival4.webp', price: '₹400', stock: 'In Stock' },
  { name: 'Saravedi', img: '/assets/Newarrival5.webp', price: '₹350', stock: 'Out of Stock' },
  { name: 'Rockets', img: '/assets/Newarrival6.webp', price: '₹150', stock: 'In Stock' },
  { name: 'Baby Rockets', img: '/assets/Newarrival7.webp', price: '₹400', stock: 'In Stock' },
  { name: 'Sparklers', img: '/assets/Newarrival8.webp', price: '₹350', stock: 'Out of Stock' },
  { name: 'Bombs', img: '/assets/Newarrival9.webp', price: '₹150', stock: 'In Stock' },
];

const ProductSlider = () => {
  const [showModal, setShowModal] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  const handleQuickView = (product) => {
    setCurrentProduct(product);
    setShowModal(true);
  };

  const handleClose = () => {
    setShowModal(false);
    setCurrentProduct(null);
  };

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <>
      <Wrapper>
        <Slider {...settings}>
          {products.map((product, index) => (
            <div className="product-card" key={index}>
              <a href="#" onClick={() => handleQuickView(product)}>
                <div className="card-content">
                  <img src={product.img} alt={product.name} />
                  <div className="product-details">
                    <h5>{product.name}</h5>
                    <p><strong>Price:</strong> {product.price}</p>
                    <p><strong>Stock:</strong> {product.stock}</p>
                  </div>
                </div>
                <button className="quick-view-btn">Quick View</button>
              </a>
            </div>
          ))}
        </Slider>
      </Wrapper>

      {currentProduct && (
        <Modal show={showModal} onHide={handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{currentProduct.name}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <img src={currentProduct.img} alt={currentProduct.name} className="img-fluid mb-3" />
            <p><strong>Price:</strong> {currentProduct.price}</p>
            <p><strong>Stock:</strong> {currentProduct.stock}</p>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

export default ProductSlider;
