import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import Project_1 from "../../Assets/Projects/project-1.jpg";
import Project_2 from "../../Assets/Projects/project-2.jpg";
import Project_3 from "../../Assets/Projects/project-3.jpg";
import Project_4 from "../../Assets/Projects/project-4.jpg";
import Project_5 from "../../Assets/Projects/project-5.jpg";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_1}
              isBlog={false}
              title="PMS and AIF "
              description="Developed a responsive web application for a financial services platform using React.js and Material-UI. Implemented real-time data updates and user-friendly interfaces with RESTful APIs. Ensured secure authentication with JWT, and used Context API and React Hooks for state management. Collaborated in an Agile environment with GIT for version control and JIRA for task management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_2}
              isBlog={false}
              title="Chatbot powered by Generative AI"
              description="Created a responsive chatbot interface using React.js and Material-UI. Integrated API calls for real-time conversations, implemented user-friendly features, and ensured smooth performance across devices. Focused on delivering a seamless user experience as a frontend developer."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_3}
              isBlog={false}
              title="Bank Vendor Payment System"
              description="Developed a responsive web application for managing vendor payments using React.js, JavaScript, and Material-UI. Integrated RESTful APIs, implemented secure data handling with CryptoJS and JWT. Worked in an Agile environment with GIT for version control and JIRA for task management."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_4}
              isBlog={false}
              title="iLand Spaces"
              description="Developed a full-stack real estate website using PHP Laravel and Postgres, deployed on AWS Elastic Beanstalk and EC2. Enhanced system performance and stability, collaborated with frontend developers for seamless UI integration, and optimized data storage with AWS services, reducing query time by 25%."
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Project_5}
              isBlog={false}
              title="Neonatal"
              description="Neonatal is a React-based web application designed to digitize neonatal care, enhancing efficiency and improving the user experience for doctors. As the UI Developer, I was responsible for designing and developing an intuitive, user-friendly interface. I also contributed to the backend development efforts utilizing Django. The project employed a tech stack including React, FastAPI, Django, PostgresSQL and AWS"
              ghLink="https://github.com/mohammed.safwan/AI_For_Social_Good"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
