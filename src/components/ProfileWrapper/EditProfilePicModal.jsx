import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const EditProfilePicModal = ({ isOpen, onClose }) => {
  const [newProfilePic, setNewProfilePic] = useState("");

  const handlePicChange = (event) => {
    setNewProfilePic(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Update the profile picture using the newProfilePic state
    console.log("New profile picture:", newProfilePic);
    onClose(); // Close the modal
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group>
            <Form.Label>New Profile Picture URL:</Form.Label>
            <Form.Control
              type="text"
              value={newProfilePic}
              onChange={handlePicChange}
            />
          </Form.Group>
          <div style={{ marginTop: "20px" }}>
            <Button variant="primary" type="submit">
              Save
            </Button>
            <Button variant="secondary" onClick={onClose}  className="mx-2">
              Cancel
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfilePicModal;
