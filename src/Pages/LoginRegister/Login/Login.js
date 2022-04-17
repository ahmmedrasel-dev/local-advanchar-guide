import React, { useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const [userInfo, setUserInfo] = useState({
    email: '',
    password: ''
  })

  const handleSubmit = e => {
    e.preventDefault();
  }

  const navigateRegister = () => {
    navigate('/register')
  }

  return (
    <section className='my-5'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onClick={handleSubmit} className='border p-5 rounded-3'>
              <div className='text-center'>
                <h3>Please Login</h3>
                <p>Login with Your Email & Password.</p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" required />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" required />
              </Form.Group>
              <Button variant="primary" type="submit" className='w-100'>
                Submit
              </Button>

              <p className='text-center mt-3'>Don't have an account? <span style={{ 'cursor': 'pointer', 'color': 'red' }} onClick={navigateRegister}>Register</span></p>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;