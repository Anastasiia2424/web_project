import React, { Component } from 'react';
import Carousel from 'react-bootstrap/Carousel'
import donut10Img from '../asserts/donut10.png';
import donut20Img from '../asserts/donut20.png';


export default class CarouselBox extends Component {
    render() {
        return (
            <Carousel>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ donut20Img }
                        alt="Donut"
                    />
                    <Carousel.Caption>
                        <h3>Donut Image</h3>
                        <p>do you her anybody abot doghunaut?</p>
                    </Carousel.Caption>

                </Carousel.Item>
                <Carousel.Item>
                    <img 
                        className="d-block w-100"
                        src={ donut10Img }
                        alt="Donut"
                    />
                    <Carousel.Caption>
                        <h3>Donut Image</h3>
                        <p>do you her anybody abot doghunaut?</p>
                    </Carousel.Caption>

                </Carousel.Item>

        

            </Carousel>
        )
    }
}