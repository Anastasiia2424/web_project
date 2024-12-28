import React from 'react';
import Carousel from 'react-bootstrap/Carousel'
import donut10Img from '../asserts/donut10.png';
import donut20Img from '../asserts/donut20.png';

const CarouselBox = () => {
    const images = [ donut10Img, donut20Img ];
    
      const carouselImageStyle = {
        objectFit: 'cover', // Ensures the image is not distorted
        width: '100%',
        height: '100%',
      };
    
      const carouselItemStyle = {
        height: '300px', // Half the height of the original image
        overflow: 'hidden', // Clips the other half of the image
      };
    
      return (
        <Carousel fade indicators={false} controls={false}>
          {images.map((src, index) => (
            <Carousel.Item key={index} style={carouselItemStyle} interval={2000}>
              <img src={src} alt={`Slide ${index}`} style={carouselImageStyle} />
            </Carousel.Item>
          ))}
        </Carousel>
      );
}

export default CarouselBox;