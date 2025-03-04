import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import CarouselBox from './CarouselBox';
import './Footer.css'; // Add a separate CSS file for styling

const Footer = () => {
  return (
    <Container fluid className="footer m-0 p-0">
      <Container className="footer-content p-5">
        <Row className="footer-row justify-content-center align-items-stretch flex-nowrap">
          <Col md={7}  className="footer-description "> 
            <a href="/" className="footer-home">Ponchyk & Co</a>
            <p>Bringing happiness to your taste buds with every bite. At Ponchyk & Co, we craft the finest donuts with love, perfect for any craving. Fresh, fluffy, and utterly delightful.</p>
          </Col>
          <Col md={3} className="footer-contact "> 
              <p>22 Mytropolyta Andreia Sheptytskoho St,<br/>Kyiv, Ukraine<br/>02000</p>
              <p><a href="tel:+380441234567">+38 (044) 123-4567</a></p>
              <p><a href="mailto:hello@ponchykco.com">hello@ponchykco.com</a></p>
          </Col>
          <Col md={2} className="footer-links ">
            <p><a href="https://www.facebook.com/">Facebook</a></p>
            <p><a href="https://www.instagram.com/">Instagram</a></p>
            <p><a href="https://www.tiktok.com">TikTok</a></p>
            <p><a href="/donuts">Menu</a></p>
          </Col>
        </Row>
      </Container>
      <CarouselBox />
    </Container>
  );
};

export default Footer;
