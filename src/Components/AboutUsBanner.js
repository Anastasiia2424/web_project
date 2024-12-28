import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import "./AboutUsBanner.css";  

const AboutUsBanner = () => {
  return (
    <Container fluid className="about-us">
        <Container className="about-us-banner">
          <Row className="about-us-row align-items-center justify-content-center px-5">
            <Col className="about-us-content p-5">
              <h2>ABOUT US</h2>
              <p>
                At Ponchyk & Co., we specialize in creating beautiful and original
                donuts, including classic flavors, creative custom designs, and
                mini-donuts for any occasion—birthdays, corporate events, weddings,
                and more.
              </p>
              <Button className="read-more mt-4" href="/aboutus">READ MORE</Button>
            </Col>
            <Col className="about-us-image d-flex justify-content-center align-items-center">
                <img
                  src="https://s0.wp.com/wp-content/themes/pub/cakely/assets/images/two_smiling_women_standing_in_a_bright_kitchen_behind.jpg"
                  alt="Ponchyk & Co. team in their shop"
                  className="img-fluid "
                />
            </Col>
          </Row>
        </Container>
    </Container>
  );
};

export default AboutUsBanner;