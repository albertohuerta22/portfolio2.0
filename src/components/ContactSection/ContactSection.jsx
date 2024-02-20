import React from 'react';
import './ContactSection.css';

const ContactSection = () => {
  return (
    <div id="contact" className="section contact-section">
      <h2>Contact Me</h2>
      <p>
        Email:{' '}
        <a href="mailto:albertohuerta22@gmail.com">albertohuerta22@gmail.com</a>
      </p>
      <p>
        Connect with me on{' '}
        <a
          href="https://www.linkedin.com/in/your-linkedin-id"
          target="_blank"
          rel="noopener noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        Download my{' '}
        <a
          href="/path/to/your-resume.pdf"
          target="_blank"
          download="Alberto_Huerta_Resume"
        >
          resume
        </a>
      </p>
    </div>
  );
};

export default ContactSection;
