import axios from "axios";
import { useEffect, useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { BsGenderMale } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { LiaCitySolid } from "react-icons/lia";
import { BsFlag } from "react-icons/bs";
import { FaFileImage } from "react-icons/fa";
import { AiFillEye } from "react-icons/ai";
import { AiFillEyeInvisible } from "react-icons/ai";
import { signup, debouncedUserName } from "../../api";
import { debounce } from "lodash";
import { toJson } from "../../utils";

export const Signup = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [userNameError, setUserNameError] = useState(false);
  const [errors, setErrors] = useState("");
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
    userName: "",
    avatar: "",
    email: "",
    password: "",
    gender: "male",
    dateOfBirth: "",
    city: "",
    country: "",
  });

  useEffect(() => {
    axios
      .get("https://api.ipify.org/?format=json")
      .then((res) => {
        axios
          .get(`http://ip-api.com/json/${res.data.ip}`)
          .then((res) => {
            setValues({
              ...values,
              city: res.data?.city,
              country: res.data?.country,
            });
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => console.log(err));
  }, []);

  const debouncedAPICall = async (e) => {
    let result = await debouncedUserName(e);
    console.log(result, "debounce call");
    setUserNameError(result);
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues({
        ...values,
        avatar: URL.createObjectURL(file).replace(/^blob:/, ""),
      });
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById("pic").src = e.target.result;
      };
      console.log(reader.readAsDataURL(file), "12345");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get("avatar");
    const blob = new Blob([file], { type: file.type });
    // formData.set('avatar', blob)
    formData.set(
      "avatar",
      "http://localhost:3000/assets/images/stories/pic2.png"
    );
    console.log(toJson(formData), "formData");
    signup(toJson(formData))
      .then((res) => {
        console.log(res.response?.data?.message, "res");
        if (res.response) {
          setErrors(res.response?.data?.message);
          return;
        }
        localStorage.setItem("@twinphy-token", res?.data?.token);
        localStorage.setItem("@twinphy-user", JSON.stringify(res?.data?.user));
        navigate("/");
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class="content-body">
      <div class="container vh-100">
        <div class="welcome-area">
          <div
            class="bg-image bg-image-overlay"
            style={{ backgroundImage: "url('assets/images/login/pic3.jpg')" }}
          ></div>
          <div class="join-area">
            <div class="started">
              <h1 class="title">Create an Account</h1>
              <p>
                Unlock a world of social connection and engagement by creating
                your account today
              </p>
            </div>
            <form onSubmit={handleSubmit} encType="mulipart/form-data">
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  required={true}
                  minLength={3}
                  maxLength={25}
                  name="firstName"
                  type="text"
                  class="form-control"
                  placeholder="Firstname"
                />
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  required={true}
                  minLength={3}
                  maxLength={25}
                  name="lastName"
                  type="text"
                  class="form-control"
                  placeholder="Lastname"
                />
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <svg width="19" height="19" viewBox="0 0 19 19" fill="none">
                      <path
                        d="M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                      <path
                        d="M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  required={true}
                  minLength={3}
                  maxLength={25}
                  name="userName"
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  onChange={(e) => debouncedAPICall(e)}
                />
              </div>
              {userNameError && (
                <div className="error">User Name Already Exist</div>
              )}
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <FaFileImage className="icon" />
                  </div>
                </span>
                <label
                  class="form-control"
                  htmlFor="file-input"
                  style={{ cursor: "pointer" }}
                >
                  <span style={{ marginRight: 10 }}>Avatar</span>
                  {values.avatar !== "" && (
                    <img id="pic" height={50} width={50} />
                  )}
                  <input
                    required={true}
                    name="avatar"
                    id="file-input"
                    type="file"
                    accept="image/*"
                    // style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                      <path
                        d="M22 6L12 13L2 6"
                        stroke="white"
                        stroke-width="2"
                        stroke-linecap="round"
                        stroke-linejoin="round"
                      />
                    </svg>
                  </div>
                </span>
                <input
                  required={true}
                  maxLength={25}
                  name="email"
                  type="email"
                  class="form-control"
                  placeholder="Email"
                />
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z"
                        fill="white"
                      ></path>
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z"
                        fill="white"
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  required={true}
                  minLength={8}
                  maxLength={50}
                  name="password"
                  type={eye === false ? "password" : "text"}
                  class="form-control dz-password"
                  placeholder="Password"
                />
                <span
                  onClick={() => {
                    eye === false ? setEye(true) : setEye(false);
                  }}
                  class="input-group-text show-pass"
                >
                  {eye === false ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </span>
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <BsGenderMale />
                  </div>
                </span>
                <select
                  required
                  name="gender"
                  class="form-control"
                  id="selectOption"
                >
                  <option value="">Select Gender...</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                </select>
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <BsCalendarDate />
                  </div>
                </span>
                <input
                  required={true}
                  name="dateOfBirth"
                  type="date"
                  class="form-control"
                  placeholder="Birth Date"
                />
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <LiaCitySolid />
                  </div>
                </span>
                <input
                  required={true}
                  minLength={3}
                  maxLength={25}
                  name="city"
                  type="text"
                  value={values.city}
                  class="form-control"
                  placeholder="City"
                />
              </div>
              <div class="mb-3 input-group input-group-icon">
                <span class="input-group-text">
                  <div class="input-icon">
                    <BsFlag />
                  </div>
                </span>
                <input
                  required={true}
                  minLength={3}
                  maxLength={25}
                  name="country"
                  type="text"
                  value={values.country}
                  class="form-control"
                  placeholder="Country"
                />
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-3">
                REGISTER
              </button>
            </form>
            {/* <a href="login.html" class="btn btn-primary btn-block mb-3">
              REGISTER
            </a> */}
            <div class="d-flex align-items-center justify-content-center">
              {errors}
            </div>
            <div class="d-flex align-items-center justify-content-center">
              <Link to="/login" class="text-light text-center d-block">
                Already have an account?
              </Link>
              <Link to="/login" class="btn-link d-block ms-3 text-underline">
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
