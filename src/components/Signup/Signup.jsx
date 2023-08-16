import axios from 'axios';
import { useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { BsGenderMale } from 'react-icons/bs';
import { BsCalendarDate } from 'react-icons/bs';
import { LiaCitySolid } from 'react-icons/lia';
import { BsFlag } from 'react-icons/bs';
import { FaFileImage } from 'react-icons/fa';
import { AiFillEye } from 'react-icons/ai';
import { AiFillEyeInvisible } from 'react-icons/ai';

const initialErrors = {
  firstName: '',
  lastName: '',
  userName: '',
  avatar: '',
  email: '',
  pass: '',
  dateOfBirth: '',
  city: '',
  country: '',
};

export const Signup = () => {
  const navigate = useNavigate();
  const [eye, setEye] = useState(false);
  const [errors, setErrors] = useState(initialErrors);
  const [userNameError, setUserNameError] = useState(false);

  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    userName: '',
    avatar: '',
    email: '',
    pass: '',
    gender: 'male',
    dateOfBirth: '',
    city: '',
    country: '',
  });

  function debouncedAPICall() {
    let timeoutId;

    return function () {
      clearTimeout(timeoutId);

      timeoutId = setTimeout(() => {
        axios
          .get('http://13.48.59.123:5001/api/users')
          .then((res) => {
            const names = res.data?.data?.userData.map(
              (item) => item?.userName
            );
            const result = names.includes(values.userName);
            if (result) {
              setUserNameError(true);
            } else {
              setUserNameError(false);
            }
          })
          .catch((err) => console.log(err));
      }, 700);
    };
  }

  const callfunc = debouncedAPICall();
  callfunc();

  const validateForm = () => {
    let isValid = true;
    const newErrors = { ...initialErrors };

    // Add validation rules here
    if (!values.firstName) {
      newErrors.firstName = 'First name is required';
      isValid = false;
    } else if (values.userName.length < 3) {
      newErrors.firstName = 'First name must be at least 3 characters long';
      isValid = false;
    }

    if (!values.lastName) {
      newErrors.lastName = 'Last name is required';
      isValid = false;
    }

    if (!values.userName) {
      newErrors.userName = 'User name is required';
      isValid = false;
    }

    if (!values.avatar) {
      newErrors.avatar = 'avatar is required';
      isValid = false;
    }

    if (!values.email) {
      newErrors.email = 'email is required';
      isValid = false;
    }

    if (!values.pass) {
      newErrors.pass = 'password is required';
      isValid = false;
    }

    if (!values.gender) {
      newErrors.gender = 'gender is required';
      isValid = false;
    }

    if (!values.dateOfBirth) {
      newErrors.dateOfBirth = 'Date is required';
      isValid = false;
    }

    if (!values.city) {
      newErrors.city = 'city is required';
      isValid = false;
    }

    if (!values.country) {
      newErrors.country = 'country is required';
      isValid = false;
    }

    // Add more validation rules for other fields

    setErrors(newErrors);
    return isValid;
  };

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues({
        ...values,
        avatar: URL.createObjectURL(file).replace(/^blob:/, ''),
      });
      const reader = new FileReader();
      reader.onload = function (e) {
        document.getElementById('pic').src = e.target.result;
      };
      console.log(reader.readAsDataURL(file), '12345');
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      // Form submission logic here
      console.log('Form submitted successfully!');
    } else {
      console.log('Form has errors. Please fix them.');
    }
    axios
      .post('http://localhost:5000/api/auths', {
        firstName: values.firstName,
        lastName: values.lastName,
        userName: values.userName,
        avatar: values.avatar,
        email: values.email,
        password: values.pass,
        gender: values.gender,
        dateOfBirth: values.dateOfBirth,
        city: values.city,
        country: values.country,
      })
      .then((res) => {
        console.log(res, 'res');
        localStorage.setItem('@twinphy-token', res?.data?.data?.token);
        localStorage.setItem(
          '@twinphy-user',
          JSON.stringify(res?.data?.data?.user)
        );
        navigate('/');
      })
      .catch((err) => console.log(err));
  };

  return (
    <div class='content-body'>
      <div class='container vh-100'>
        <div class='welcome-area'>
          <div
            class='bg-image bg-image-overlay'
            style={{ backgroundImage: "url('assets/images/login/pic3.jpg')" }}
          ></div>
          <div class='join-area'>
            <div class='started'>
              <h1 class='title'>Create an Account</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <form onSubmit={handleSubmit}>
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <svg width='19' height='19' viewBox='0 0 19 19' fill='none'>
                      <path
                        d='M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Firstname'
                  onChange={(e) =>
                    setValues({ ...values, firstName: e.target.value })
                  }
                />
              </div>
              {errors.firstName && (
                <div className='error'>{errors.firstName}</div>
              )}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <svg width='19' height='19' viewBox='0 0 19 19' fill='none'>
                      <path
                        d='M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Lastname'
                  onChange={(e) =>
                    setValues({ ...values, lastName: e.target.value })
                  }
                />
              </div>
              {errors.lastName && (
                <div className='error'>{errors.lastName}</div>
              )}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <svg width='19' height='19' viewBox='0 0 19 19' fill='none'>
                      <path
                        d='M15.587 16.3479V14.8261C15.587 14.019 15.2663 13.2448 14.6956 12.6741C14.1248 12.1033 13.3507 11.7827 12.5435 11.7827H6.45655C5.64937 11.7827 4.87525 12.1033 4.30448 12.6741C3.73372 13.2448 3.41307 14.019 3.41307 14.8261V16.3479'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                      <path
                        d='M9.50002 8.73918C11.1809 8.73918 12.5435 7.37657 12.5435 5.6957C12.5435 4.01483 11.1809 2.65222 9.50002 2.65222C7.81915 2.65222 6.45654 4.01483 6.45654 5.6957C6.45654 7.37657 7.81915 8.73918 9.50002 8.73918Z'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Username'
                  onChange={(e) =>
                    setValues({ ...values, userName: e.target.value })
                  }
                />
              </div>
              {userNameError && (
                <div className='error'>User Name Already Exist</div>
              )}
              {errors.userName && (
                <div className='error'>{errors.userName}</div>
              )}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <FaFileImage className='icon' />
                  </div>
                </span>
                <label
                  class='form-control'
                  htmlFor='file-input'
                  style={{ cursor: 'pointer' }}
                >
                  <span style={{ marginRight: 10 }}>Avatar</span>
                  {values.avatar !== '' && (
                    <img id='pic' height={50} width={50} />
                  )}
                  <input
                    name='file'
                    id='file-input'
                    type='file'
                    accept='image/*'
                    // style={{ display: "none" }}
                    onChange={handleImageUpload}
                  />
                </label>
              </div>
              {errors.avatar && <div className='error'>{errors.avatar}</div>}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                      <path
                        d='M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                      <path
                        d='M22 6L12 13L2 6'
                        stroke='white'
                        stroke-width='2'
                        stroke-linecap='round'
                        stroke-linejoin='round'
                      />
                    </svg>
                  </div>
                </span>
                <input
                  type='email'
                  class='form-control'
                  placeholder='Email'
                  onChange={(e) =>
                    setValues({ ...values, email: e.target.value })
                  }
                />
              </div>
              {errors.email && <div className='error'>{errors.email}</div>}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <svg width='24' height='24' viewBox='0 0 24 24' fill='none'>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M5 12C4.44772 12 4 12.4477 4 13V20C4 20.5523 4.44772 21 5 21H19C19.5523 21 20 20.5523 20 20V13C20 12.4477 19.5523 12 19 12H5ZM2 13C2 11.3431 3.34315 10 5 10H19C20.6569 10 22 11.3431 22 13V20C22 21.6569 20.6569 23 19 23H5C3.34315 23 2 21.6569 2 20V13Z'
                        fill='white'
                      ></path>
                      <path
                        fill-rule='evenodd'
                        clip-rule='evenodd'
                        d='M12 3C10.9391 3 9.92172 3.42143 9.17157 4.17157C8.42143 4.92172 8 5.93913 8 7V11C8 11.5523 7.55228 12 7 12C6.44772 12 6 11.5523 6 11V7C6 5.4087 6.63214 3.88258 7.75736 2.75736C8.88258 1.63214 10.4087 1 12 1C13.5913 1 15.1174 1.63214 16.2426 2.75736C17.3679 3.88258 18 5.4087 18 7V11C18 11.5523 17.5523 12 17 12C16.4477 12 16 11.5523 16 11V7C16 5.93913 15.5786 4.92172 14.8284 4.17157C14.0783 3.42143 13.0609 3 12 3Z'
                        fill='white'
                      ></path>
                    </svg>
                  </div>
                </span>
                <input
                  type={eye === false ? 'password' : 'text'}
                  class='form-control dz-password'
                  placeholder='Password'
                  onChange={(e) =>
                    setValues({ ...values, password: e.target.value })
                  }
                />
                <span
                  onClick={() => {
                    eye === false ? setEye(true) : setEye(false);
                  }}
                  class='input-group-text show-pass'
                >
                  {eye === false ? (
                    <AiFillEyeInvisible size={20} />
                  ) : (
                    <AiFillEye size={20} />
                  )}
                </span>
              </div>
              {errors.password && (
                <div className='error'>{errors.password}</div>
              )}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <BsGenderMale />
                  </div>
                </span>
                <select
                  class='form-control'
                  id='selectOption'
                  value={values.gender}
                  onChange={(e) =>
                    setValues({ ...values, gender: e.target.value })
                  }
                >
                  <option value='male'>Male</option>
                  <option value='female'>Female</option>
                </select>
              </div>
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <BsCalendarDate />
                  </div>
                </span>
                <input
                  type='date'
                  class='form-control'
                  placeholder='Birth Date'
                  onChange={(e) =>
                    setValues({ ...values, dateOfBirth: e.target.value })
                  }
                />
              </div>
              {errors.dateOfBirth && (
                <div className='error'>{errors.dateOfBirth}</div>
              )}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <LiaCitySolid />
                  </div>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='City'
                  onChange={(e) =>
                    setValues({ ...values, city: e.target.value })
                  }
                />
              </div>
              {errors.city && <div className='error'>{errors.city}</div>}
              <div class='mb-3 input-group input-group-icon'>
                <span class='input-group-text'>
                  <div class='input-icon'>
                    <BsFlag />
                  </div>
                </span>
                <input
                  type='text'
                  class='form-control'
                  placeholder='Country'
                  onChange={(e) =>
                    setValues({ ...values, country: e.target.value })
                  }
                />
              </div>
              {errors.country && <div className='error'>{errors.country}</div>}
              <button type='submit' className='btn btn-primary btn-block mb-3'>
                REGISTER
              </button>
            </form>
            {/* <a href="login.html" class="btn btn-primary btn-block mb-3">
              REGISTER
            </a> */}
            <div class='d-flex align-items-center justify-content-center'>
              <Link to='/login' class='text-light text-center d-block'>
                Already have an account?
              </Link>
              <Link to='/login' class='btn-link d-block ms-3 text-underline'>
                Login here
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
