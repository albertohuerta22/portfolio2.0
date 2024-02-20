import React from 'react';
import { Card, Image } from 'react-bootstrap';
import './Skills.css';

const SkillsSection = () => {
  return (
    <div id="skills" className="section skills-section">
      <h2>Skills</h2>
      <div className="backdrop">
        <div className="card-container">
          <Card>
            <Card.Body>
              <div className="technology">
                <Image
                  src="https://www.coveros.com/wp-content/uploads/2014/03/java-logo.jpg"
                  alt="JavaScript Logo"
                  className="technology-logo"
                />
                <Card.Title>Java</Card.Title>
              </div>
              <Card.Text>
                Technologies: Spring Boot, Hibernate, Maven, Gradle, JUnit,
                Mockito
              </Card.Text>
            </Card.Body>
          </Card>
          {/* Add more cards for other programming languages */}
        </div>
      </div>
    </div>
  );
};

export default SkillsSection;
