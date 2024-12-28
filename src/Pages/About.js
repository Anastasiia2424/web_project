import React from 'react';
import { Container } from 'react-bootstrap';
import Banner from '../Components/Banner';
import '../Components/AboutUsBanner.css';

const About = () => {
    const title = "ABOUT US";
    const description = <>
        Ponchyk & Co is a delightful donut haven nestled on the left bank of Kyiv, where tradition meets modern indulgence. 
        Known for its artisan take on the beloved "ponchyk" – Ukraine’s classic fried dough treat – this cozy spot offers a 
        mouthwatering selection of handcrafted donuts, each prepared with care and creativity.<br/><br/>

        Step into the inviting atmosphere of Ponchyk & Co, and you’ll be greeted by the aroma of freshly fried dough and the 
        cheerful buzz of satisfied customers. Their menu features everything from traditional sugar-dusted ponchyky to 
        contemporary creations filled with creamy custards, tangy berries, or decadent chocolate. Vegan and gluten-free options 
        ensure everyone can savor the magic.<br/><br/>

        Pair your sweet treat with a cup of locally roasted coffee, and take a moment to relax in the charming, Instagram-worthy 
        setting. Whether you’re a local or a visitor exploring the city, Ponchyk & Co is a must-visit destination for a delicious 
        taste of Kyiv.
        </>;

    return (
        <>
            <Banner title={title} text={description} titleAs="h2"/>
            <Container fluid className="about-container m-0 p-0">
                <Container className="about p-5 pt-0">
                    <h2>OUR LOCATION</h2>
                    <p>Find us at: 22 Mytropolyta Andreia Sheptytskoho St, Kyiv, Ukraine, 02000</p>
                    <iframe
                        title="Map"
                        src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d5080.593170182572!2d30.5914883!3d50.4542016!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cf66d94bb4cb%3A0x772dde3e20a02520!2sSilpo!5e0!3m2!1sen!2shu!4v1735418480731!5m2!1sen!2shu"
                        width="100%"
                        height="450"
                        style={{ border: 0 }}
                        allowFullScreen=""
                        loading="lazy">
                    </iframe>
                </Container>            
            </Container>
        </>
    );
};

export default About;