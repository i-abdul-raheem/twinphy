import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Toast from 'react-bootstrap/Toast';

function ShowToast({errorMessage}) {
  const [show, setShow] = useState(false);

  return (
    <Row>
      <Col xs={6}>
        <Toast onClose={() => setShow(false)} show={errorMessage !== ''} delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Error</strong>
          </Toast.Header>
          <Toast.Body>{errorMessage}</Toast.Body>
        </Toast>
      </Col>
    </Row>
  );
}

export default ShowToast;