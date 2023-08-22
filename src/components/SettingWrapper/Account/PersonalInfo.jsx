import { BsGenderMale } from "react-icons/bs";
import { BsCalendarDate } from "react-icons/bs";
import { LiaCitySolid } from "react-icons/lia";
import { BsFlag } from "react-icons/bs";

export const PersonalInfo = () => {
  return (
    <>
      <div className="offcanvas offcanvas-top" tabIndex="-1" id="offcanvasTop1">
        <div className="offcanvas-header">
          <h5 className="offcanvas-title" id="offcanvasExampleLabel">
            Account Details
          </h5>
          <button
            type="button"
            className="btn-close text-reset"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          >
            <i className="fa-solid fa-xmark"></i>
          </button>
        </div>
        <div className="offcanvas-body container container">
          <form encType="mulipart/form-data">
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
              />
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
                class="form-control"
                placeholder="Country"
              />
            </div>
          </form>
          <a href="index.html" className="btn btn-primary btn-block mb-2">
            Save
          </a>
        </div>
      </div>
    </>
  );
};
