import React from 'react';
import { Spinner } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../firebase.init';

const RequiredAuth = ({ children }) => {
  const [user, loading] = useAuthState(auth)
  const location = useLocation();
  if (loading) {
    return (
      <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
        <Spinner animation="grow" variant="secondary" />
      </div>
    )
  }
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />
  }

  return children;
};

export default RequiredAuth;