import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import Banner from "../Components/Banner";
import Specialities from "../Components/Specialities";
import AboutUsBanner from "../Components/AboutUsBanner";
import DonutCollection from '../Components/DonutCollection';
import HappyCustomers from '../Components/HappyCustomers';

export default class Home extends Component {
    render() {
        return (
            <>
                <Banner/>
                <Specialities/>
                <AboutUsBanner/>
                <DonutCollection/>
                <HappyCustomers/>
            </>            
        )
    }
}