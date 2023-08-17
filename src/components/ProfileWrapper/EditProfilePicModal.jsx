import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaUserEdit } from "react-icons/fa";

const EditProfilePicModal = ({ isOpen, onClose, profileImage }) => {
  const [newProfilePic, setNewProfilePic] = useState(profileImage);
  const [selectedImage, setSelectedImage] = useState(null);

  const handlePicChange = (event) => {
    const selectedFile = event.target.files[0];
    setNewProfilePic(URL.createObjectURL(selectedFile));
    setSelectedImage(selectedFile); 
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (selectedImage) {
      console.log("New profile picture:", newProfilePic);
      onClose();
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
      <img src={newProfilePic || profileImage} alt="Profile" style={{ maxWidth: "100%", marginBottom: "15px" }} />
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="profilePic" style={{cursor:"pointer",marginTop:"15px"}}>
              <FaUserEdit style={{fontSize:"25px"}}/>
              Change Profile Picture:
            </label>
            <input
              type="file"
              id="profilePic"
              accept="image/*"
              onChange={handlePicChange}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button variant="primary" type="submit" disabled={!selectedImage}>
              Save
            </Button>
            <Button variant="secondary" onClick={onClose} className="mx-2">
              Cancel
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};

export default EditProfilePicModal;
