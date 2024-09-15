import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p>
            Hi Everyone, I am <span className="purple">MOHAMMED SAFWAN </span>
            from <span className="purple"> Mangalore, India.</span>
            <br />
            I am currently employed as a Cloud Associate at Niveus Solutions Pvt Ltd.
            <br />
            I have completed MSc (Software Technology) at St Aloysius (Autonomous) College, Mangalore.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          <footer className="blockquote-footer">Safwan</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
