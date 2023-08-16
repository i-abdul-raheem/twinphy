import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";

export const EditNameModal = ({
  isOpen,
  onClose,
  firstName,
  lastName,
  setUserData,
}) => {
  const [editedName, setEditedName] = useState({
    firstName: firstName,
    lastName: lastName,
  });

  const [hasChanges, setHasChanges] = useState(false);

  const handleChnages = (e) => {
    e.preventDefault();
    onClose();
    console.log(editedName, "editedName");
    axios
      .put("http://localhost:5000/api/users/64d679342e7340553804ccdf", {
        firstName: editedName?.firstName,
        lastName: editedName?.lastName,
      })
      .then((res) => {
        setUserData({
          ...res?.data?.data,
          firstName: editedName?.firstName,
          lastName: editedName?.lastName,
        });
      })
      .catch((err) => console.log(err));
  };

  const handleFirstNameChange = (e) => {
    setEditedName({ ...editedName, firstName: e.target.value });
    setHasChanges(true);
  };

  const handleLastNameChange = (e) => {
    setEditedName({ ...editedName, lastName: e.target.value });
    setHasChanges(true);
  };

  useEffect(() => {
    setEditedName({
      firstName: firstName,
      lastName: lastName,
    });
    setHasChanges(false);
  }, [firstName, lastName]);

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Your Name</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <form onSubmit={handleChnages}>
          <div className="form-group">
            <label htmlFor="editFirstName">First Name</label>
            <input
              type="text"
              id="editFirstName"
              className="form-control"
              value={editedName.firstName}
              onChange={handleFirstNameChange}
            />
          </div>
          <div className="form-group">
            <label htmlFor="editLastName">Last Name</label>
            <input
              type="text"
              id="editLastName"
              className="form-control"
              value={editedName.lastName}
              onChange={handleLastNameChange}
            />
          </div>
          <div style={{ marginTop: "20px" }}>
            <Button variant="secondary" onClick={onClose}>
              Close
            </Button>
            <Button
              type="submit"
              variant="primary"
              className="mx-2"
              disabled={!hasChanges}
            >
              Save Changes
            </Button>
          </div>
        </form>
      </Modal.Body>
    </Modal>
  );
};
