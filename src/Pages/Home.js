import React from 'react'
import { Container } from 'react-bootstrap';
import Banner from "../Components/Banner";
import Specialities from "../Components/Specialities";
import AboutUsBanner from "../Components/AboutUsBanner";
import DonutCollection from '../Components/DonutCollection';
import HappyCustomers from '../Components/HappyCustomers';

const Home = () => {
    const title = <>TASTY DONUTS<br/>IN KYIV LIVOBEREZHNYY</>;
    const description = "Indulge in the finest donuts with Ponchyk & Co. Whether you crave classic glazed, filled donuts, or unique flavors, we bring freshly baked sweetness right to your door."

    return (
        <Container fluid className="m-0 p-0">
            <Banner title={title} text={description} maxWidth={600}/>
            <Specialities />
            <AboutUsBanner />
            <DonutCollection />
            <HappyCustomers />
        </Container>  
    );
};

export default Home;