import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = ({title, text, titleAs="h1", maxWidth = null}) => {
  return (
    <Container fluid className="banner-container m-0 p-0">
      <Container className="banner p-5">
        {React.createElement(titleAs, null, title)}
        <p style={maxWidth ? { maxWidth: maxWidth } : {}}>{text}</p>
      </Container>
    </Container>
  );
};

export default Banner;
