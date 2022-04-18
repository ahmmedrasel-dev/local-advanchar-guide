import React from 'react';
import { BsCheckCircleFill } from 'react-icons/bs';

const ThankYou = () => {
  return (
    <div style={{ 'height': '82vh' }} className='d-flex justify-content-center align-items-center'>
      <div className='text-center'>
        <BsCheckCircleFill style={{ 'fontSize': "100px", 'color': 'green' }} />
        <h1 style={{ 'fontSize': '100px' }}>Thank You</h1>
        <p style={{ 'fontSize': '25px' }}>Your Booking is Successfully Complete.</p>
      </div>
    </div>
  );
};

export default ThankYou;