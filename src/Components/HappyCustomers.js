import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import './HappyCustomers.css';

const HappyCustomers = () => {
  const testimonials = [
    {
      name: 'Andriy, C.',
      feedback: "The glazed donut was simply divine—soft, sweet, and so fresh. I'll be back for more!",
    },
    {
      name: 'Anastatsiia, L.',
      feedback: "The chocolate donut was a hit at my office party. Everyone loved it! Perfect balance of flavors.",
    },
    {
      name: 'Denys, L.',
      feedback: "Your sprinkle donuts are my kids' favorite treat. Delicious and beautifully decorated!",
    },
  ];

  return (
    <Container fluid className="happy-customers-container m-0 p-0">
      <Container className='happy-customers p-5'>        
        <h2>HAPPY CUSTOMERS</h2>
        <Row className="testimonials justify-content-center align-items-stretch flex-nowrap">
          {testimonials.map((testimonial, index) => (
            <Col key={index} className="d-flex justify-content-center align-items-stretch">
              <Card className="testimonial">
                <Card.Body> 
                  <Card.Title as={"h3"} className="mb-4">★★★★★</Card.Title>
                  <Card.Text  className="mb-4">
                    <p>"{testimonial.feedback}"</p>
                  </Card.Text>
                  <blockquote className="blockquote mb-0">
                    <footer className="blockquote-footer">{testimonial.name}</footer>
                  </blockquote>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </Container>
  );
};

export default HappyCustomers;
