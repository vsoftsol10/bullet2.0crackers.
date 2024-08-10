import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { Modal, Button } from 'react-bootstrap';
import AuthModal from './AuthModal'; // Adjust the path as necessary
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram, faLinkedin, faYoutube } from '@fortawesome/free-brands-svg-icons';
import './Footer.css';

const Footer = () => {
  const history = useHistory();
  const [termsModalShow, setTermsModalShow] = useState(false);
  const [privacyModalShow, setPrivacyModalShow] = useState(false);
  const [showModal, setShowModal] = useState(false);

  // Function to navigate to different pages
  const navigateTo = (path) => {
    history.push(path);
  };

  // Functions to show/hide modals
  const handleTermsModalShow = () => setTermsModalShow(true);
  const handleTermsModalClose = () => setTermsModalShow(false);
  
  const handlePrivacyModalShow = () => setPrivacyModalShow(true);
  const handlePrivacyModalClose = () => setPrivacyModalShow(false);

  const handleAuthModalShow = () => setShowModal(true);
  const handleAuthModalClose = () => setShowModal(false);

  // Functions to handle account and wishlist
  const handleAccountClick = () => {
    // This should be replaced with actual logic to check if the user is logged in
    const isLoggedIn = false; // Replace this with actual authentication check
    if (isLoggedIn) {
      navigateTo('/my-account');
    } else {
      handleAuthModalShow();
    }
  };

  const handleWishlistClick = () => {
    navigateTo('/cart');
  };

  const handleOrderHistoryClick = () => {
    navigateTo('/order-history');
  };

  return (
    <div className="container-fluid bg-dark text-white-50 footer pt-5 mt-5">
      <div className="container py-5">
        <div className="pb-4 mb-4" style={{ borderBottom: '1px solid rgba(226, 175, 24, 0.5)' }}>
          <div className="row g-4 align-items-center">
            <div className="col-lg-3">
              <a href="#" onClick={() => navigateTo('/')}>
                <h1 className="text-primary mb-0">Bullet Crackers</h1>
                <p className="text-secondary mb-0">Celebrate with fireworks</p>
              </a>
            </div>
            <div className="col-lg-6">
              <div className="position-relative mx-auto">
                <input className="form-control border-0 w-100 py-3 px-4 rounded-pill" type="email" placeholder="Your Email" />
                <button type="submit" className="btn btn-primary border-0 border-secondary py-3 px-4 position-absolute rounded-pill text-white" style={{ top: 0, right: 0 }}>
                  Subscribe Now
                </button>
              </div>
            </div>
            <div className="col-lg-3 d-flex justify-content-end">
             
  <div className="d-flex pt-3 social-links">
  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#">
    <FontAwesomeIcon icon={faTwitter} />
  </a>
  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#">
    <FontAwesomeIcon icon={faFacebook} />
  </a>
  <a className="btn btn-outline-secondary me-2 btn-md-square rounded-circle" href="#">
    <FontAwesomeIcon icon={faYoutube} />
  </a>
  <a className="btn btn-outline-secondary btn-md-square rounded-circle" href="#">
    <FontAwesomeIcon icon={faLinkedin} />
  </a>
</div>

            </div>
          </div>
        </div>
        <div className="row g-5">
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Why People Like Us!</h4>
              <p className="mb-4">We provide a wide range of quality fireworks to enhance your celebrations.</p>
              <a href="#" className="btn border-secondary py-2 px-4 rounded-pill text-primary" onClick={() => navigateTo('/about-us')}>Read More</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Shop Info</h4>
              <a className="btn-link" href="/about" onClick={() => navigateTo('/about-us')}>About Us</a>
              <a className="btn-link" href="/contact" onClick={() => navigateTo('/contact-us')}>Contact Us</a>
              <a className="btn-link" href="#" onClick={handlePrivacyModalShow}>Privacy Policy</a>
              <a className="btn-link" href="#" onClick={handleTermsModalShow}>Terms & Condition</a>
              <a className="btn-link" href="#" onClick={() => navigateTo('/faqs')}>FAQs & Help</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="d-flex flex-column text-start footer-item">
              <h4 className="text-light mb-3">Account</h4>
              <a className="btn-link" href="#" onClick={handleAccountClick}>My Account</a>
              <a className="btn-link" href="#" onClick={() => navigateTo('/cart')}>Shopping Cart</a>
              <a className="btn-link" href="#" onClick={handleWishlistClick}>Wishlist</a>
              <a className="btn-link" href="#" onClick={handleOrderHistoryClick}>Order History</a>
            </div>
          </div>
          <div className="col-lg-3 col-md-6">
            <div className="footer-item">
              <h4 className="text-light mb-3">Contact</h4>
              <h5 style={{ color: "white" }}>Address:</h5>
              <p>
                Bullet Crackers, Near by Kamaraj Matric School Backside, Sattur to Sivakasi Road<br />
                <span style={{ color: "white" }}>Pincode:</span> 626124
              </p>
              <div className="address mt-3">
                <h5 style={{ color: "white" }}>Mobile no:</h5>
                <p>
                  <a href="tel:+919791323661">+91 9791323661</a><br />
                  <a href="tel:+919585205399">+91 9585205399</a><br />
                  <a href="mailto:bullet2.0crackershop.com">bullet2.0crackershop.com</a>
                </p>
              </div>
              <p>Payment Accepted</p>
              <img src="/assets/payment.png" className="img-fluid" alt="Payment Methods" />
            </div>
          </div>
        </div>
      </div>

      {/* Terms and Conditions Modal */}
      <Modal show={termsModalShow} onHide={handleTermsModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Terms and Conditions</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Here you can provide the details of the terms and conditions.
            You can write your entire terms and conditions text here.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleTermsModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Privacy Policy Modal */}
      <Modal show={privacyModalShow} onHide={handlePrivacyModalClose}>
        <Modal.Header closeButton>
          <Modal.Title>Privacy Policy</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>
            Here you can provide the details of the privacy policy.
            You can write your entire privacy policy text here.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handlePrivacyModalClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* Authentication Modal */}
      <AuthModal show={showModal} handleClose={handleAuthModalClose} />
    </div>
  );
};

export default Footer;
