import React from 'react';
import { Row, Col, Form, Button, Container } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { ToastContainer } from 'react-toastify';
import auth from '../../firebase.init';
import useBooking from '../../Hooks/useBooking';
import useServices from '../../Hooks/useServices';

const Checkout = () => {
  const [user] = useAuthState(auth)
  const [services, setServices] = useServices()
  const [booking, setBooking] = useBooking(services)
  return (
    <section className='my-5' style={{ height: '70vh' }}>
      <Container>
        <h2 className='text-center'>CheckOut</h2>
        <Row>
          <Col md={8}>
            <Form>
              <Row className="mb-3">
                <Form.Group as={Col} controlId="formGridEmail">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" placeholder="Full Name" />
                </Form.Group>
              </Row>

              <Row className='md-3'>
                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Email Address</Form.Label>
                  <Form.Control type="text" placeholder="Email Address" value={user.email} readOnly />
                </Form.Group>

                <Form.Group as={Col} controlId="formGridPassword">
                  <Form.Label>Phone Number</Form.Label>
                  <Form.Control type="number" placeholder="Phone Number" />
                </Form.Group>
              </Row>

              <Form.Group className="mb-3" controlId="formGridAddress1">
                <Form.Label>Address</Form.Label>
                <Form.Control type="text" placeholder="1234 Main St" />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formGridAddress2">
                <Form.Label>Address 2</Form.Label>
                <Form.Control type="text" placeholder="Apartment, studio, or floor" />
              </Form.Group>

            </Form>
          </Col>

          <Col md={4}>

            <div className='bg-secondary p-4 rounded-3' style={{ height: '60vh' }}>
              <h3 className='text-center text-white'>Booking Details</h3>
              {
                booking.map(item => {
                  return (
                    <div className='bg-light p-2 m-2 shadow-sm rounded-3'>
                      <h3 key={item.id}>{item.services}</h3>
                      <strong>Booking Price: ${item.price}</strong>
                    </div>
                  )
                })
              }

              <Button variant={'warning'} className="w-100">Order Confirm</Button>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Checkout;