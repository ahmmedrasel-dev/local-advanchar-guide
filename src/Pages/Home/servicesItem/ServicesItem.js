import React from 'react';
import { Col } from 'react-bootstrap';
import './ServiceItem.css';

const ServicesItem = ({ servicesItem }) => {
  const { services, price, description, picture } = servicesItem;
  return (
    <Col md={4}>
      <div className="service-item">
        <div className='service-pic'>
          <img className='w-100' src={picture} alt={services} />
        </div>
        <div className='d-flex justify-content-between my-3'>
          <h4>{services}</h4>
          <h4>${price}</h4>
        </div>
        <p>{description}</p>
        <button className='btn btn-primary w-100'>Booking</button>
      </div>
    </Col>
  );
};

export default ServicesItem;