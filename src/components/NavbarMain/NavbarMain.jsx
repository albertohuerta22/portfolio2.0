import React from 'react';
import { Nav, Navbar, Form } from 'react-bootstrap';
import { Link } from 'react-scroll';

import './NavbarMain.css';

const NavbarMain = ({ darkMode, setDarkMode }) => {
  // State to manage dark mode

  // Function to toggle dark mode
  const handleDarkModeToggle = () => {
    setDarkMode(!darkMode);
  };

  return (
    <Navbar
      bg={darkMode ? 'dark' : 'light'}
      variant={darkMode ? 'dark' : 'light'}
      fixed="top"
    >
      <Navbar.Brand href="#home" className="home">
        Alberto Huerta
      </Navbar.Brand>

      <div className="d-flex justify-content-between w-100 ">
        <Nav className="align-items-center">
          <Link to="about" smooth={true} duration={1} className="nav-link">
            About
          </Link>
          <Link to="projects" smooth={true} duration={1} className="nav-link">
            Projects
          </Link>
          <Link to="contact" smooth={true} duration={1} className="nav-link">
            Contact
          </Link>
          <Link to="reviews" smooth={true} duration={1} className="nav-link">
            Reviews
          </Link>
        </Nav>
        <Nav className="resume">
          <Nav.Link
            href="https://www.linkedin.com/in/alberto-huerta-fullstackdev"
            target="_blank"
          >
            LinkedIn
          </Nav.Link>
          <Nav.Link href="/path/to/resume.pdf" target="_blank" download>
            Download Resume
          </Nav.Link>
          {/* Dark mode toggle switch */}

          <Form.Check
            type="switch"
            id="dark-mode-switch"
            className="dark-mode-switch ml-2"
            checked={darkMode}
            onChange={handleDarkModeToggle}
          />
          <Nav.Link
            className="dark-mode-label"
            style={{ cursor: 'default', textDecoration: 'none' }}
          >
            Dark Mode
          </Nav.Link>
        </Nav>
      </div>
    </Navbar>
  );
};

export default NavbarMain;
