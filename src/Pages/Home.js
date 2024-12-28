import React from 'react'
import { Container } from 'react-bootstrap';
import Banner from "../Components/Banner";
import Specialities from "../Components/Specialities";
import AboutUsBanner from "../Components/AboutUsBanner";
import DonutCollection from '../Components/DonutCollection';
import HappyCustomers from '../Components/HappyCustomers';

const Home = () => {
    return (
        <Container fluid className="m-0 p-0">
            <Banner />
            <Specialities />
            <AboutUsBanner />
            <DonutCollection />
            <HappyCustomers />
        </Container>  
    );
};

export default Home;