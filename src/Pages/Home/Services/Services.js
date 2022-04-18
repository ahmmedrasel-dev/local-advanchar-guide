import React from 'react';
import { Container, Row } from 'react-bootstrap';
import useBooking from '../../../Hooks/useBooking';
import useServices from '../../../Hooks/useServices';
import { addToDb } from '../../../utilities/fakedb';
import ServicesItem from '../servicesItem/ServicesItem'
import { Link, useNavigate } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Services = () => {
  const [services, setServices] = useServices();
  const [booking, setBooking] = useBooking(services)
  const navigate = useNavigate()

  const addedBooking = selectedItem => {
    let newBookingItem = [];
    const existingItem = booking.find(item => item.id === selectedItem.id)
    if (!existingItem) {
      selectedItem.quantity = 1;
      newBookingItem = [...booking, existingItem];
    } else {
      const restItem = booking.filter(item => item.id !== selectedItem.id);
      existingItem.quantity = selectedItem.quantity + 1
      newBookingItem = [...restItem, existingItem];
    }
    setBooking(newBookingItem);
    addToDb(selectedItem.id)
    toast.success('Booking Added.')
    navigate('/checkout')
  }

  return (
    <section id="services" className='my-5' >
      <Container>
        <Row>
          <h2 className='text-center mb-5 text-uppercase' style={{ 'color': '#2f92eb' }}>Services</h2>
          <ToastContainer />
          {
            services.map(item => <ServicesItem
              key={item.id}
              addedBooking={addedBooking}
              servicesItem={item}></ServicesItem>)
          }
        </Row>
      </ Container>
    </section>
  );
};

export default Services;