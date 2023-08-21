import React, { useEffect, useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { FaUserEdit } from "react-icons/fa";
import axios from "axios";
import config from "../../api/config";
import { avatarUpload, editAvatar } from "../../api";
import { toJson } from "../../utils";

const EditProfilePicModal = ({
  isOpen,
  onClose,
  profileImage,
  setUserData,
}) => {
  const [newProfilePic, setNewProfilePic] = useState(profileImage);
  const [selectedImage, setSelectedImage] = useState(null);
  const [avatar, setAvatar] = useState(profileImage);
  const url = config.BASE_URL + "/upload";

  const handlePicChange = (event) => {
    const selectedFile = event.target.files[0];
    setNewProfilePic(URL.createObjectURL(selectedFile));
    setSelectedImage(selectedFile);
    console.log(selectedFile);
  };

  const handleEditImage = async (e) => {
    e.preventDefault();
    const storedUserData = localStorage.getItem("@twinphy-user");
    let userId;

    if (storedUserData) {
      try {
        const parsedUserData = JSON.parse(storedUserData);
        userId = parsedUserData._id;
      } catch (error) {
        console.error("Error parsing stored user data:", error);
      }
    }

    console.log(userId, "uid");
    if (selectedImage) {
      try {
        const formData = new FormData(e.currentTarget);
        const fileUpload = new FormData();
        fileUpload.append("avatar", formData.get("avatar"));
        let imagePath = await editAvatar(fileUpload);
        formData.append("avatar", imagePath);

        const response = await axios.post(`${url}`, formData);
        const profileImage = response?.data?.data?.Location;
        const response2 = await axios.patch(
          `${config.BASE_URL}/profile/update-picture`,
          { profileImage, _id: userId }
        );

        const userInfo = JSON.parse(localStorage.getItem("@twinphy-user"));
        if (userInfo?.profileImage) {
          userInfo.profileImage = response2?.data?.data?.profileImage;
          setNewProfilePic(userInfo?.profileImage);
          userInfo.avatar = response2?.data?.data?.profileImage;
          localStorage.setItem("@twinphy-user", JSON.stringify(userInfo));
          setUserData(userInfo);
        } else {
          userInfo.avatar = response2?.data?.data?.profileImage;
          localStorage.setItem("@twinphy-user", JSON.stringify(userInfo));
          setUserData(userInfo);
        }
        localStorage.setItem("@twinphy-user", JSON.stringify(userInfo));
        onClose();
      } catch (error) {
        console.error("Error updating profile picture:", error);
      }
    }
  };

  const updateImageLocally = (user) => {
    const userInfo = JSON.parse(localStorage.getItem("@twinphy-user"));
    if (userInfo?.profileImage) {
      userInfo.profileImage = user?.profileImage;
      setNewProfilePic(userInfo?.profileImage);
      userInfo.avatar = user?.profileImage;
      localStorage.setItem("@twinphy-user", JSON.stringify(userInfo));
      setUserData(userInfo);
    } else {
      userInfo.avatar = user?.profileImage;
      localStorage.setItem("@twinphy-user", JSON.stringify(userInfo));
      setUserData(userInfo);
    }
  };

  return (
    <Modal show={isOpen} onHide={onClose}>
      <Modal.Header closeButton>
        <Modal.Title>Edit Profile Picture</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <img
          src={newProfilePic || profileImage}
          alt="Profile"
          style={{ maxWidth: "100%", marginBottom: "15px" }}
        />
        <form onSubmit={handleEditImage}>
          <div className="form-group">
            <label
              htmlFor="profilePic"
              style={{ cursor: "pointer", marginTop: "15px" }}
            >
              <FaUserEdit style={{ fontSize: "25px" }} />
              Change Profile Picture:
            </label>
            <input
              name="avatar"
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
