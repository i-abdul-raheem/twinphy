import { BiCog, BiLogOut } from "react-icons/bi";
import { Link } from "react-router-dom";
import { NavLink, useNavigate } from "react-router-dom";

export const Header = ({ title }) => {
  const navigate = useNavigate();
  return (
    <>
      <header className="header">
        <div className="container">
          <div className="main-bar">
            <div className="left-content">
              <h4 className="title mb-0">{title}</h4>
            </div>
            <div className="mid-content"></div>
            <div className="right-content d-flex align-items-center">
              <div
                id="avatar"
                style={{
                  width: "48px",
                  height: "48px",
                  border: "2px",
                  objectFit: "contain",
                  backgroundPosition: "center",
                  backgroundSize: "contain",
                  borderRadius: "100%",
                  marginRight: "20px",
                }}
              ></div>
              <Link to="/notifications" className="bell-icon me-2">
                <svg
                  width="25"
                  height="27"
                  viewBox="0 0 24 26"
                  fill="none"
                  //   xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M6.99863 5.94146C8.25877 4.69837 9.96789 4 11.75 4C13.5321 4 15.2412 4.69837 16.5014 5.94146C17.7615 7.18456 18.4694 8.87057 18.4694 10.6286C18.4694 13.6602 19.1264 15.5253 19.7182 16.5956C20.0157 17.1336 20.3031 17.4826 20.498 17.6854C20.5957 17.7872 20.6709 17.853 20.7136 17.8881C20.7334 17.9044 20.7462 17.9141 20.751 17.9176C21.1638 18.1996 21.3462 18.7128 21.2002 19.1883C21.0523 19.6703 20.6019 20 20.0914 20H3.40862C2.89809 20 2.44774 19.6703 2.2998 19.1883C2.15385 18.7128 2.33617 18.1996 2.74898 17.9176C2.75364 17.9144 2.75833 17.9113 2.76305 17.9082L2.7604 17.9099L2.7558 17.913L2.74949 17.9173C2.74783 17.9185 2.74697 17.9191 2.74688 17.9192C2.74681 17.9192 2.7472 17.9189 2.74803 17.9183C2.7483 17.9181 2.74862 17.9179 2.74898 17.9176C2.75375 17.9141 2.76657 17.9044 2.78642 17.8881C2.82906 17.853 2.90431 17.7872 3.00203 17.6854C3.19687 17.4826 3.48428 17.1336 3.78178 16.5956C4.37359 15.5253 5.03055 13.6602 5.03055 10.6286C5.03055 8.87056 5.73849 7.18456 6.99863 5.94146ZM2.76305 17.9082C2.76307 17.9082 2.76308 17.9081 2.7631 17.9081L2.76306 17.9082L2.76305 17.9082ZM17.6975 17.7143C17.693 17.7063 17.6886 17.6982 17.6841 17.6901C16.8857 16.2461 16.1524 13.997 16.1524 10.6286C16.1524 9.47677 15.6886 8.37215 14.863 7.55771C14.0374 6.74326 12.9176 6.28571 11.75 6.28571C10.5824 6.28571 9.46264 6.74326 8.63703 7.55771C7.81143 8.37215 7.3476 9.47677 7.3476 10.6286C7.3476 13.997 6.61433 16.2461 5.81591 17.6901C5.81144 17.6982 5.80697 17.7063 5.8025 17.7143H17.6975ZM2.7645 17.9072C2.7645 17.9072 2.7645 17.9072 2.76449 17.9072L2.76425 17.9074C2.76434 17.9073 2.76442 17.9073 2.7645 17.9072Z"
                    fill="#FE9063"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M8.87713 21.1933C9.47825 20.797 10.2482 21.0296 10.5969 21.7127C10.6633 21.8427 10.7586 21.9506 10.8732 22.0256C10.9878 22.1006 11.1177 22.1401 11.25 22.1401C11.3823 22.1401 11.5122 22.1006 11.6268 22.0256C11.7414 21.9506 11.8367 21.8427 11.9031 21.7127C12.2518 21.0296 13.0217 20.797 13.6229 21.1933C14.224 21.5895 14.4286 22.4646 14.0799 23.1477C13.7923 23.7111 13.3795 24.1787 12.8829 24.5038C12.3862 24.8289 11.8231 25 11.25 25C10.6769 25 10.1138 24.8289 9.61711 24.5038C9.12045 24.1787 8.70767 23.7111 8.42008 23.1477C8.07138 22.4646 8.27601 21.5895 8.87713 21.1933Z"
                    fill="#FE9063"
                  />
                  <circle
                    cx="18"
                    cy="6"
                    r="5"
                    fill="url(#paint0_linear_8_1045)"
                    stroke="#FEEADF"
                    strokeWidth="2"
                  />
                  <defs>
                    <linearGradient
                      id="paint0_linear_8_1045"
                      x1="15.8934"
                      y1="-5.17647"
                      x2="23.3834"
                      y2="-3.59332"
                      gradientUnits="userSpaceOnUse"
                    >
                      <stop stopColor="#704FFE" />
                      <stop offset="1" stopColor="#523CAD" />
                    </linearGradient>
                  </defs>
                </svg>
              </Link>

              <div className="dropdown">
                <button
                  className=" dropdown-toggle settings-icon"
                  type="button"
                  id="settingsDropdown"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{
                    border: "none",
                    background: "none",
                    color: "#FE9063",
                    width: "42px",
                    height: "42px",
                    lineHeight: "42px",
                    backgroundColor: "var(--rgba-primary-2)",
                    borderRadius: "var(--border-radius-base)",
                    textAlign: "center",
                    display: "block",
                    fontSize: "25px",
                  }}
                >
                  <BiCog />
                </button>

                <ul
                  className="dropdown-menu dropdown-menu-end"
                  aria-labelledby="settingsDropdown"
                >
                  <li
                    onClick={() => {
                      navigate("/profile");
                    }}
                  >
                    <Link className="dropdown-item" to="/settings">
                      Edit Profile
                    </Link>
                  </li>
                  <li>
                    <Link className="dropdown-item" to="/settings">
                      Settings
                    </Link>
                  </li>
                  <li
                    onClick={() => {
                      localStorage.removeItem("@twinphy-token");
                      localStorage.removeItem("@twinphy-user");
                      navigate("/login");
                    }}
                  >
                    <Link className="dropdown-item" to="/settings">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="dark-overlay"></div>
    </>
  );
};
