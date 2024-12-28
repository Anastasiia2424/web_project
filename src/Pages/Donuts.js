import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import '../Components/DonutCollection.css';

const Donuts = () => {
    const donuts = [
        { name: 'Glazed Donut', price: '₴90.00', img: 'https://plus.unsplash.com/premium_photo-1676166013367-73507c019091?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Chocolate Donut', price: '₴110.50', img: 'https://plus.unsplash.com/premium_photo-1672846026959-2cfcf87ac8be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Sprinkle Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1646615077267-97c6088b74d9?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Strawberry Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1604853089584-b21706119aec?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Caramel Donut', price: '₴155.50', img: 'https://images.unsplash.com/photo-1709579545389-6dcac102eccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Glazed Donut', price: '₴90.00', img: 'https://plus.unsplash.com/premium_photo-1676166013367-73507c019091?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Chocolate Donut', price: '₴110.50', img: 'https://plus.unsplash.com/premium_photo-1672846026959-2cfcf87ac8be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Sprinkle Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1646615077267-97c6088b74d9?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Strawberry Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1604853089584-b21706119aec?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Caramel Donut', price: '₴155.50', img: 'https://images.unsplash.com/photo-1709579545389-6dcac102eccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Glazed Donut', price: '₴90.00', img: 'https://plus.unsplash.com/premium_photo-1676166013367-73507c019091?q=80&w=2006&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Chocolate Donut', price: '₴110.50', img: 'https://plus.unsplash.com/premium_photo-1672846026959-2cfcf87ac8be?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Sprinkle Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1646615077267-97c6088b74d9?q=80&w=2030&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Strawberry Donut', price: '₴130.00', img: 'https://images.unsplash.com/photo-1604853089584-b21706119aec?q=80&w=1972&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
        { name: 'Caramel Donut', price: '₴155.50', img: 'https://images.unsplash.com/photo-1709579545389-6dcac102eccf?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' },
 
    ];
    
      return (
        <Container fluid className="donuts-container m-0 p-0">        
            <Container className="donut-collection-title my-2 p-5">
            <h2>OUR DELICIOUS DONUTS</h2>
            <Row md={4} className="justify-content-center align-items-stretch my-4">
                {donuts.map((donut, index) => (
                <Col key={index} className="d-flex justify-content-center align-items-stretch">
                    <Card className="donut-card">
                    <Card.Img variant="top" src={donut.img} />
                    <Card.Body>
                        <Card.Title className="donut-title">{donut.name}</Card.Title>
                        <Card.Text className="donut-price">{donut.price}</Card.Text>
                    </Card.Body>
                    </Card>
                </Col>
                ))}
            </Row>
            </Container>        
        </Container>
      );
};

export default Donuts;