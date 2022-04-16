import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useServices from '../../../Hooks/useServices';
import ServicesItem from '../servicesItem/ServicesItem'

const Services = () => {
  const [services, setServices] = useServices();
  return (
    <section id="services" className='my-5' >
      <Container>
        <Row>
          <h2 className='text-center mb-5 text-uppercase'>Services</h2>
          {
            services.map(item => <ServicesItem key={item.id} servicesItem={item}></ServicesItem>)
          }
        </Row>
      </ Container>
    </section>
  );
};

export default Services;