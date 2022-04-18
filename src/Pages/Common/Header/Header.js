import { signOut } from 'firebase/auth';
import React from 'react';
import { Button, Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';
import { FaLocationArrow } from 'react-icons/fa';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css'

const Header = () => {
  const [user] = useAuthState(auth)

  const handleSignOut = e => {
    signOut(auth);
  }

  return (
    <Navbar bg="light" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to='/'> <FaLocationArrow /> <span style={{ 'color': "#2f92eb" }}>Local Adventure Guide</span></Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="ms-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <CustomLink className="nav-link" to='/'>Home</CustomLink>
            <CustomLink className="nav-link" to='/services'>Service</CustomLink>
            <CustomLink className="nav-link" to='/about'>About</CustomLink>
            <CustomLink className="nav-link" to='/blogs'>Blog</CustomLink>
            <CustomLink className="nav-link" to='/checkout'>Checkout</CustomLink>

            {
              user ?
                <NavDropdown title="Logout" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">{user?.displayName}</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2" onClick={handleSignOut}>Logout</NavDropdown.Item>
                </NavDropdown>
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