import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              Experienced Associate in <b className="purple">Software Development, </b>
              adept at <b className="purple">full stack development</b> & dedicated to contributing valuable insights and top-quality work to collaborative teams.
              Passionate about driving innovation and achieving organizational goals.
              <br />
              <br />
              {/* I am fluent in classics like */}
              I am well-versed in foundational technologies such as
              <i>
                <b className="purple"> React, Node and Javascript. </b>
              </i>
              <br />
              <br />
              My areas of interest include building innovative&nbsp;
              <i>
                <b className="purple">Web Technologies and Products </b> ,advancing in{" "}
                <b className="purple">
                Mobile Application Development.
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I apply my expertise in <b className="purple">React</b> and <b className="purple">Node.js </b>
              to develop advanced web and mobile applications, staying at the forefront of innovation with the latest
              <i>
                <b className="purple">
                  {" "}
                  Javascript Frameworks and Technologies
                </b>
              </i>
              &nbsp; like
              <i>
                <b className="purple"> React.js and Next.js</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://twitter.com/mr_saff_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/mohammed-safwan-61a41121b/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/mhd_safwan_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container >
  );
}
export default Home2;
