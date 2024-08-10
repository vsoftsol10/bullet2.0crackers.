import React from 'react';
import './ContactUs.css'; // Create this CSS file if needed for styling

const ContactUs = () => {
  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">Contact Us</h1>
      <div className="row">
        <div className="col-md-6">
          <h4>Our Office</h4>
          <div className="address mt-3">
            <h5 style={{color: "black"}}>Address:</h5>
            <p>
              Bullet Crackers, Near by kamaraj matric school backside, sattur to sivakasi road<br />
              <span style={{color: "black"}}>Pincode:</span> 626124
            </p>
          </div>
          <div className="address mt-3">
            <h5 style={{color: "black"}}>Mobile no:</h5>
            <p>
              <a href="tel:+919791323661">+91 9791323661</a><br />
              <a href="tel:+919585205399">+91 9585205399</a><br />
              <a href="mailto:bullet2.0crackershop.com">bullet2.0crackershop.com</a>
            </p>
          </div>
        </div>
        <div className="col-md-6">
          <h4>Get In Touch</h4>
          <form>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name</label>
              <input type="text" className="form-control" id="name" placeholder="Your Name" />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control" id="email" placeholder="Your Email" />
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" id="message" rows="4" placeholder="Your Message"></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;


