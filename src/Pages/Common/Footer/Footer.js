import React from 'react';
import { Col, Row } from 'react-bootstrap';

const Footer = () => {
  const today = new Date();
  const year = today.getFullYear();
  return (
    <footer>
      <Row>
        <Col className='text-center bg-dark p-4'>
          <strong className='text-white'>&copy; {year} | All rights reserved. </strong>
        </Col>
      </Row>
    </footer>
  );
};

export default Footer;