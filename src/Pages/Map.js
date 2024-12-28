import React from 'react';
import { Container } from 'react-bootstrap';

const Map = () => {
    return (
        <Container className="text-center my-5">
            <h2>Our Location</h2>
            <p>Find us at:</p>
            <iframe
                title="Map"
                src="https://www.google.com/maps/place/Silpo/@50.4542016,30.5914883,16.26z/data=!3m1!5s0x40d4cfe604f2c5b5:0x2d984984d7d09e9a!4m6!3m5!1s0x40d4cf66d94bb4cb:0x772dde3e20a02520!8m2!3d50.4563449!4d30.5937695!16s%2Fg%2F11js66xd7f?hl=en&entry=ttu&g_ep=EgoyMDI0MTIxMS4wIKXMDSoASAFQAw%3D%3D"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
            ></iframe>
            <p>123 Zhytomyrska street, Kyiv, Ukraine, 03179</p>
        </Container>
    );
};

export default Map;