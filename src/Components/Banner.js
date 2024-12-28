import React from "react";
import { Container } from "react-bootstrap";
import "./Banner.css";

const Banner = () => {
  return (
    <Container fluid className="banner-container m-0 p-0">
      <Container className="banner p-5">
        <h1>TASTY DONUTS<br/>IN KYIV LIVOBEREZHNYY</h1>
        <p>
          Indulge in the finest donuts with Ponchyk & Co. Whether you crave
          classic glazed, filled donuts, or unique flavors, we bring freshly
          baked sweetness right to your door.
        </p>
      </Container>
    </Container>
  );
};

export default Banner;
