import React from 'react';
import { Card, Button, Image } from 'react-bootstrap';
import './ProjectsSection.css';

const ProjectsSection = () => {
  return (
    <div id="projects" className="section projects-section">
      <h2 className="section-title">Featured Projects</h2>
      <div className="projects-grid">
        <Card>
          <Image
            src="https://images.unsplash.com/photo-1607289763115-5107629a543b?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aG9tZWxlc3N8ZW58MHwxfDB8fHww"
            alt="homeless"
            className="card-image"
          />
          <Card.Body>
            <Card.Title>HomeLink</Card.Title>
            <Card.Text>
              Centralized Information for the Unhoused Community.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/albertohuerta22/homelink"
            >
              View on GitHub
            </Button>
          </Card.Body>
        </Card>

        <Card>
          <Card.Body>
            <Card.Title>BendWell</Card.Title>
            <Card.Text>
              Use TensorFlow AI to stretch with your laptop.
            </Card.Text>
            <Button
              variant="primary"
              href="https://github.com/cs-2201-15/bendwell"
            >
              View on GitHub
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
};

export default ProjectsSection;
