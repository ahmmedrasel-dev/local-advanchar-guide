import React, { useRef } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { toast } from 'react-toastify';
import auth from '../../../firebase.init';

const PasswordReset = () => {

  const [sendPasswordResetEmail, sending, error] = useSendPasswordResetEmail(auth);

  const emailRef = useRef('');

  const handleSubmit = async e => {
    e.preventDefault();
    const email = emailRef.current.value;
    await sendPasswordResetEmail(email);
    toast.success('Sent Rest Password Link to Email.')

  }
  return (
    <section className='my-5' style={{ 'height': '67vh' }}>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='border p-5 rounded-3'>
              <Form onSubmit={handleSubmit}>
                <div className='text-center'>
                  <p>We'll send you a link to reset your password.</p>
                </div>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control ref={emailRef} type="email" placeholder="Enter your email" required />
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                  Reset Password
                </Button>
              </Form>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default PasswordReset;