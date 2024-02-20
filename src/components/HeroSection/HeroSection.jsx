import React from 'react';
import './HeroSection.css';

const HeroSection = () => {
  return (
    <div className="section hero-section">
      <div className="hero-image">
        {/* Replace 'path-to-hero-image.jpg' with the actual path to your image */}
        <img
          src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTh8fGxhcHRvcHxlbnwwfDF8MHx8fDA%3D"
          alt="Hero"
        />
      </div>
      <div className="hero-content">
        <h1>Welcome to My Portfolio</h1>
        <p>
          I'm a Software Engineer specialized in improving solutions. Please
          find my work below!
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
