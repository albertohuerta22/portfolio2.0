import React from 'react';
import './About.css';
const About = () => {
  return (
    <div id="about" className="section about-section">
      <div className="about-content">
        <h2>About Me</h2>
        <p>
          I have a strong passion for maintaining and creating new features.
        </p>
      </div>
      <div className="about-image">
        {/* Replace 'path-to-your-image.jpg' with the actual path to your image */}
        <img
          src="https://images.unsplash.com/photo-1614741118887-7a4ee193a5fa?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvZ3JhbW1pbmd8ZW58MHwxfDB8fHww"
          alt="About Me"
        />
      </div>
    </div>
  );
};

export default About;
