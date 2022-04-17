import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FaLocationArrow } from 'react-icons/fa';

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = e => {
    signOut(auth);
  }

  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'> <FaLocationArrow /> <span className='text-danger'>Local Adventure Guide</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as={Link} to="/">Home</Nav.Link>
            <Nav.Link href="home#services">Services</Nav.Link>
            <Nav.Link as={Link} to="/about">About</Nav.Link>
            <Nav.Link as={Link} to="/checkout">Checkout</Nav.Link>
            {
              user ?
                <Button className='btn btn-link text-white text-decoration-none' onClick={handleSignOut}>Sign Out</Button>
                :
                <Nav.Link as={Link} to="/login">Login</Nav.Link>
            }

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;