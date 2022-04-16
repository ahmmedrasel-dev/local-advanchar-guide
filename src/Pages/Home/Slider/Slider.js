import React from 'react';
import { Carousel } from 'react-bootstrap';
import slider1 from '.././../../images/slider1.png'
import slider2 from '.././../../images/slider2.png'
import slider3 from '.././../../images/slider3.png'
import './Slider.css'

const Slider = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider1}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3 className='slider-title'>Enjoy The Moment!</h3>
          <p>Not all those who wander are lost. Travel opens <br /> our minds and heart and makes us better people</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={slider2}
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Explore Mountain</h3>
          <p>Climb the mountain so you can see the world, not so the world can see you.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Slider;