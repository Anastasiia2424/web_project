import React from 'react';
import { Container, Row, Col, Card } from "react-bootstrap";
import '../Components/HappyCustomers.css';

const Comments = () => {
    const testimonials = [
        {
            name: 'Andriy, C.',
            feedback: "The glazed donut was simply divine—soft, sweet, and so fresh. I'll be back for more!",
            stars: '★★★★★'
        },
        {
            name: 'Anastatsiia, L.',
            feedback: "The chocolate donut was a hit at my office party. Everyone loved it! Perfect balance of flavors.",
            stars: '★★★★★'
        },
        {
            name: 'Denys, L.',
            feedback: "Your sprinkle donuts are my kids' favorite treat. Delicious and beautifully decorated!",
            stars: '★★★★★'
        },
        {
            name: 'Alice',
            feedback: "Absolutely loved the donuts! They were fresh and delicious.",
            stars: '★★★★'
        },
        {
            name: 'Bob',
            feedback: "Great service and even better donuts! Will order again.",
            stars: '★★★★★'
        },
        {
            name: 'Charlie',
            feedback: "The variety of flavors is amazing! Highly recommend.",
            stars: '★★★★'
        },
        {
            name: 'Diana, T.',
            feedback: "Tried the seasonal pumpkin spice donuts—delicious and so festive!",
            stars: '★★★★★'
        },
        {
            name: 'Evan, H.',
            feedback: "The blueberry donuts were bursting with flavor. Perfectly moist and sweet!",
            stars: '★★★★★'
        },
        {
            name: 'Fiona, G.',
            feedback: "Loved the presentation of the donuts. They tasted just as good as they looked!",
            stars: '★★★★'
        },
        {
            name: 'George, M.',
            feedback: "The classic old-fashioned donut is my absolute favorite. Nostalgic and perfect!",
            stars: '★★★★★'
        },
        {
            name: 'Hanna, P.',
            feedback: "Tried your vegan donuts—so good, I didn’t even miss the dairy!",
            stars: '★★★★'
        },
        {
            name: 'Ivan, K.',
            feedback: "The cinnamon sugar donut is heavenly. Warm and comforting!",
            stars: '★★★★★'
        },
        {
            name: 'Julia, V.',
            feedback: "My family adored the assortment box. Something for everyone!",
            stars: '★★★★★'
        },
        {
            name: 'Kevin, L.',
            feedback: "The filled donuts are my go-to. The raspberry filling is unbeatable.",
            stars: '★★★★★'
        },
        {
            name: 'Lily, N.',
            feedback: "Beautifully decorated and delicious donuts. Made my party extra special!",
            stars: '★★★★★'
        },
        {
            name: 'Max, O.',
            feedback: "Quick delivery and amazing taste. Perfect for a late-night snack!",
            stars: '★★★★'
        },
        {
            name: 'Nina, Z.',
            feedback: "The maple bacon donut is a game changer. Sweet and savory perfection!",
            stars: '★★★★★'
        },
        {
            name: 'Oliver, P.',
            feedback: "Tried your gluten-free donuts, and they were fantastic. Thank you!",
            stars: '★★★★'
        },
        {
            name: 'Paula, R.',
            feedback: "The chocolate glaze is rich and decadent. A chocolate lover’s dream!",
            stars: '★★★★★'
        }
    ];
    
    
      return (
        <Container fluid className="happy-customers-container m-0 p-0">
          <Container className='happy-customers p-5'>        
            <h2>CUSTOMER COMMENTS</h2>
            <Row className="testimonials justify-content-center align-items-stretch">
              {testimonials.map((testimonial, index) => (
                <Col key={index} className="d-flex justify-content-center align-items-stretch">
                  <Card className="testimonial">
                    <Card.Body> 
                      <Card.Title as={"h3"} className="mb-4">{testimonial.stars}</Card.Title>
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

export default Comments;