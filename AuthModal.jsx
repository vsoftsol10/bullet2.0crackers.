import React from 'react';
import { Modal, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

const AuthModal = ({ show, handleClose }) => {
  const history = useHistory();

  const handleLoginClick = () => {
    handleClose();
    history.push('/login'); // Navigate to the login page
  };

  const handleRegisterClick = () => {
    handleClose();
    history.push('/register'); // Navigate to the registration page
  };

  return (
    <Modal show={show} onHide={handleClose}>
      <Modal.Header closeButton>
        <Modal.Title>Authentication Required</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <p>You need to log in or register to proceed to checkout.</p>
      </Modal.Body>
      <Modal.Footer>
        <Button variant="secondary" onClick={handleClose}>
          Close
        </Button>
        <Button variant="primary" onClick={handleLoginClick}>
          Log In
        </Button>
        <Button variant="primary" onClick={handleRegisterClick}>
          Register
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AuthModal;


