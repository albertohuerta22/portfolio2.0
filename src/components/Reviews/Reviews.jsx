import React from 'react';
import { Carousel } from 'react-bootstrap';

import './Reviews.css';

const Reviews = () => {
  return (
    <div id="reviews" className="section reviews-section">
      <h2>What my collegues say...</h2>
      <Carousel>
        <Carousel.Item>
          <p>
            "Alberto is always willing to go above and beyond for his team. He's
            a very sharp engineer with a keen technical eye. He'd be a great
            addition to any team!" - Elvis M. <i>Senior SWE Manager, Kaseya</i>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            "Alberto excels as an excellent communicator and team player,
            effortlessly conveying complex technical concepts and fostering a
            positive work environment. His expertise in frontend development and
            Node.js is impressive, consistently delivering high-quality
            results." - Omar D. <i>Software Engineer</i>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            "Alberto is an essential team player that brings immense knowledge,
            adaptability, and positivity to any atmosphere. Whether the task at
            hand is adapting to complex technologies or providing help to
            others, Alberto will always excel at what he does. He is an
            extremely hard working developer and filled our team with true
            insight and confidence." - Robert B. <i>Software Engineer, ECP</i>
          </p>
        </Carousel.Item>
        <Carousel.Item>
          <p>
            "Alberto showed amazing synergy with the team, notably by ensuring
            we were all on the same page throughout every step of our
            application, and by always keeping the team's morale and focus
            high." - Samuel J. <i>Software Engineer, Givebacks</i>
          </p>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Reviews;
