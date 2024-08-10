import React, { useEffect } from 'react';
import './AboutUs.css'; // Ensure this CSS file exists for styling

const AboutUs = () => {
  useEffect(() => {
    const fireworkContainer = document.getElementById("fireworks-container");
    for (let i = 0; i < 20; i++) {
      const firework = document.createElement("div");
      firework.className = "firework";
      firework.style.left = `${Math.random() * 100}vw`;
      firework.style.bottom = `0`; // Fireworks start from the bottom
      firework.style.animationDelay = `${Math.random() * 5}s`;
      fireworkContainer.appendChild(firework);
    }
  }, []);

  return (
    <div className="container my-5">
      <h1 className="text-center mb-4">About Us</h1>
      <p className="text-justify">
        Welcome to Bullet Crackers 2.0, your ultimate destination for high-quality fireworks and crackers. We are passionate about bringing joy and excitement to your celebrations with our extensive range of fireworks that light up the sky and create unforgettable memories.
      </p>
      <h2 className="text-center mb-4">Our Mission</h2>
      <p className="text-justify">
        At Bullet Crackers 2.0, our mission is to provide safe and spectacular fireworks that add sparkle to every occasion. Whether it's a grand wedding, a festive Diwali celebration, a New Year's Eve party, or any special event, we aim to be your trusted partner in making it truly spectacular.
      </p>
      <p className="text-justify">
        Founded in [Year], Bullet Crackers has come a long way from its beginnings in [Location]. When we first started out, our passion for providing high-quality fireworks drove us to start our own business.
      </p>
      <p className="text-justify">
        We now serve customers all over [Area/Location], and are thrilled that we're able to turn our passion into our own website.
      </p>
      <p className="text-justify">
        If you have any questions or comments, please don't hesitate to contact us.
      </p>
      <div id="fireworks-container"></div>
    </div>
  );
};

export default AboutUs;

