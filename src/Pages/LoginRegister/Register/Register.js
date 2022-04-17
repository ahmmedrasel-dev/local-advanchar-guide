import React, { useEffect, useState } from 'react';
import { Button, Col, Container, Form, Row } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useCreateUserWithEmailAndPassword, useSignInWithFacebook, useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FcGoogle } from 'react-icons/fc';
import { FaFacebookF } from 'react-icons/fa';
import { BsGithub } from 'react-icons/bs';

const Register = () => {
  const navigate = useNavigate()
  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    hookError,
  ] = useCreateUserWithEmailAndPassword(auth, {
    sendEmailVerification: true
  });

  const [signInWithGoogle, googleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [signInWithGithub, githubUser, githubLoading, githubError] = useSignInWithGithub(auth)

  const [signInWithFacebook, fbUser, fbLoading, fbError] = useSignInWithFacebook(auth)

  const [registerInfo, setRegisterInfo] = useState({
    name: '',
    email: '',
    password: '',
  })

  // Registration Error Set.
  const [registerError, setRegisterError] = useState({
    name: '',
    email: '',
    password: '',
    others: ''
  })

  const handleEmail = e => {
    const emailValidText = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const validEmail = emailValidText.test(e.target.value)
    if (validEmail) {
      setRegisterInfo({ ...registerInfo, email: e.target.value })
      setRegisterError({ ...registerError, email: '' })
    } else {
      setRegisterError({ ...registerError, email: 'Invalid Your Email' })
      setRegisterInfo({ ...registerInfo, email: '' })
    }
  }

  // Login with Google
  const handleGoogleSignin = () => {
    signInWithGoogle(registerInfo.email, registerInfo.password)
  }

  // Login with Github.
  const handleLoginGithub = () => {
    signInWithGithub(registerInfo.email, registerInfo.password)
  }

  // Login with Facebook.
  const handleSignInFb = () => {
    signInWithFacebook(registerInfo.email, registerInfo.password)
  }


  const handlePassword = e => {
    const regex = /.{6,}/;
    const validPassword = regex.test(e.target.value);
    if (validPassword) {
      setRegisterInfo({ ...registerInfo, password: e.target.value })
      setRegisterError({ ...registerError, password: '' })
    } else {
      setRegisterError({ ...registerError, password: 'Your Password Invalid' })
      setRegisterInfo({ ...registerInfo, password: '' })
    }
  }


  // After Successfully Register User Redirect to Home.
  if (user || googleUser || githubUser || fbUser) {
    navigate('/home')
    toast.success('User Created Successfully.')
  }

  const handleSubmitForm = e => {
    e.preventDefault()
    const name = e.target.name.value;
    if (name.length === 0) {
      setRegisterError({ ...registerError, name: 'Your Name Field is Empty' })
    } else {
      setRegisterInfo({ ...registerInfo, name: name })
      setRegisterError('')
    }
    createUserWithEmailAndPassword(registerInfo.email, registerInfo.password)
  }

  useEffect(() => {
    if (hookError) {
      toast.error(hookError.message)
    }
    if (googleError) {
      toast.error(googleError.message)
    }

    if (githubError) {
      toast.error(githubError.message)
    }

    if (fbError) {
      toast.error(fbError.message)
    }

  }, [hookError, googleError, githubError, fbError])

  return (
    <section className='my-5'>
      <Container>
        <Row>
          <Col md={{ span: 6, offset: 3 }}>
            <div className='border p-5 rounded-3'>
              <Form onSubmit={handleSubmitForm}>
                <div className='text-center'>
                  <h3>Register</h3>
                  <p>Create Account with Your Email & Password.</p>
                </div>

                <Form.Group className="mb-3" controlId="formGroupName">
                  <Form.Label>Full Name</Form.Label>
                  <Form.Control type="text" name="name" placeholder="Full Name" />

                  {
                    registerError?.name && <strong className='text-danger'>{registerError.name}</strong>
                  }
                </Form.Group>

                <Form.Group className="mb-3" controlId="formGroupEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" name="email" onChange={handleEmail} placeholder="Enter email" />
                  {
                    registerError?.email && <strong className='text-danger'>{registerError.email}</strong>
                  }

                </Form.Group>

                <ToastContainer />

                <Form.Group className="mb-3" controlId="formGroupPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" name="password" onChange={handlePassword} placeholder="Password" />

                  {
                    registerError?.password && <strong className='text-danger'>{registerError.password}</strong>
                  }
                </Form.Group>

                <Button variant="primary" type="submit" className='w-100'>
                  Register
                </Button>

                <p className='text-center mt-3'>Already have an account? <Link style={{ 'cursor': 'pointer', 'color': 'red' }} to='/login'>Login</Link></p>
              </Form>

              <div className='d-flex align-items-center'>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
                <p className='p-2 mt-3'>Or</p>
                <div className='w-50 bg-dark' style={{ height: '1px' }}></div>
              </div>

              <Button onClick={handleGoogleSignin} variant="warning" type="submit" className='w-100'>
                <FcGoogle /> Login with Google
              </Button>

              <Button onClick={handleLoginGithub} variant="dark" type="submit" className='w-100 my-2'>
                <BsGithub /> Login with Github
              </Button>

              <Button variant="primary" type="submit" onClick={handleSignInFb} className='w-100'>
                <FaFacebookF /> Login with Facebook
              </Button>

            </div>
          </Col>
        </Row>

      </Container>
    </section>
  );
};

export default Register;