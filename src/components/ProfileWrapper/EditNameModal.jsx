import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import { updateUser } from "../../api";

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
    updateUser(editedName?.firstName, editedName?.lastName)
      .then((res) => {
        const updatedUserData = {
          ...JSON.parse(localStorage.getItem("@twinphy-user")),
          firstName: editedName?.firstName,
          lastName: editedName?.lastName,
        };

        localStorage.setItem("@twinphy-user", JSON.stringify(updatedUserData));
        setUserData({
          ...updatedUserData
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
