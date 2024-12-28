import React from "react";
import { Container, Row, Col, Card } from 'react-bootstrap';
import './Specialities.css';

const Specialities = () => {
  const specialities = [
    { title: "Classic Donuts", imgSrc: "https://img.freepik.com/premium-photo/lush-donuts-metal-bucket-street-food-pink-soda_28806-70.jpg?w=740" },
    { title: "Custom Donuts", imgSrc: "https://cdn.pixabay.com/photo/2017/09/17/15/47/donut-2758808_1280.jpg" },
    { title: "Mini Donuts", imgSrc: "https://plus.unsplash.com/premium_photo-1673184236015-c1f35816b087?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" },
    { title: "Donut Boxes", imgSrc: "https://cdn.pixabay.com/photo/2013/09/05/19/31/donuts-179248_1280.jpg" },
  ];
  

  return (
    <Container className="speciality-collection my-0 p-5 pt-0">
      <h2>OUR SPECIALITIES</h2>
      <Row className="justify-content-center align-items-center flex-nowrap my-3 g-5">
        {specialities.map((speciality, index) => (
          <Col key={index} className="m-0">
            <Card className="speciality-card">
              <Card.Img variant="top" src={speciality.imgSrc} />
              <Card.Body>
                <Card.Title className="speciality-title">{speciality.title}</Card.Title>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Specialities;
