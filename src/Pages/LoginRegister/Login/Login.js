import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaFacebookF } from 'react-icons/fa';
import { FcGoogle } from 'react-icons/fc';


const Login = () => {

  const [
    signInWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useSignInWithEmailAndPassword(auth);

  const navigate = useNavigate();

  const [loginInfo, setLoginInfo] = useState({
    email: '',
    password: ''
  });

  const [loginError, setLoginError] = useState({
    email: '',
    password: ''
  })

  const handleEmail = e => {
    const emailValidText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailValidText.test(e.target.value)
    if (validEmail) {
      setLoginInfo({ ...loginInfo, email: e.target.value })
      setLoginError({ ...loginError, email: '' })
    } else {
      setLoginError({ ...loginError, email: 'Invalid Your Email' })
      setLoginInfo({ ...loginInfo, email: '' })
    }
  }


  const handlePassword = e => {
    const regex = /.{6,}/;
    const validPassword = regex.test(e.target.value);
    if (validPassword) {
      setLoginInfo({ ...loginInfo, password: e.target.value })
      setLoginError({ ...loginError, password: '' })
    } else {
      setLoginError({ ...loginError, password: 'Your Password Invalid' })
      setLoginInfo({ ...loginInfo, password: '' })
    }
  }

  if (user) {
    toast.success('Login Successfully.')
  }

  const handleSubmit = e => {
    e.preventDefault();
    signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
  }

  const navigateRegister = () => {
    navigate('/register')
  }

  useEffect(() => {
    if (hookError) {
      toast.error(hookError.message)
    }

  }, [hookError])

  return (
    <section className='my-5'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <Form onSubmit={handleSubmit} className='border p-5 rounded-3'>
              <div className='text-center'>
                <h3>Please Login</h3>
                <p>Login with Your Email & Password.</p>
              </div>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" onChange={handleEmail} placeholder="Enter email" required />

                {
                  loginError?.email && <strong className='text-danger'>{loginError.email}</strong>
                }
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" onChange={handlePassword} placeholder="Password" required />

                {
                  loginError?.password && <strong className='text-danger'>{loginError.password}</strong>
                }
              </Form.Group>
              <Button variant="primary" type="submit" className='w-100'>
                Submit
              </Button>
              <ToastContainer />
              <p className='text-center mt-3'>Don't have an account? <span style={{ 'cursor': 'pointer', 'color': 'red' }} onClick={navigateRegister}>Register</span></p>

              <div className='d-flex align-items-center'>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
                <p className='p-2 mt-3'>Or</p>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
              </div>

              <Button variant="info" type="submit" className='w-100'>
                Login with Google
              </Button>

              <Button variant="warning" type="submit" className='w-100 my-2'>
                <FcGoogle /> Login with Github
              </Button>

              <Button variant="primary" type="submit" className='w-100'>
                <FaFacebookF /> Login with Facebook
              </Button>

            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Login;