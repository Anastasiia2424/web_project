import React, { Component } from 'react'
import CarouselBox from '../Components/CarouselBox'
import Carousel from 'react-bootstrap/Carousel'
import { Row } from 'react-bootstrap'
import Footer from '../Components/Footer.js'

export default class Home extends Component {
    render() {
        return ( 
            <Row>
                <CarouselBox/>
                <Footer/>
            </Row>            
        )
    }
}