// import "swiper/css/swiper.min.css";

import { useState } from "react";

export const Follower = () => {
    const [iconTab, setIconTab] = useState({
        grid: true,
        column: false,
      });
    
      const handleGrid = () => {
        setIconTab({
          grid: true,
          column: false,
        });
      };
      const handleColumn = () => {
        setIconTab({
          grid: false,
          column: true,
        });
      };
  const userFriendsData = [
    {
      name: "Andy Lee",
      imageSrc: "assets/images/stories/small/pic1.jpg",
      isFollowed: true,
    },
    {
      name: "Brian Harahap",
      imageSrc: "assets/images/stories/small/pic2.jpg",
      isFollowed: true,
    },
    {
      name: "Christian Hang",
      imageSrc: "assets/images/stories/small/pic3.jpg",
      isFollowed: true,
    },
    {
      name: "Christian Hang",
      imageSrc: "assets/images/stories/small/pic3.jpg",
      isFollowed: true,
    },
    {
      name: "Christian Hang",
      imageSrc: "assets/images/stories/small/pic3.jpg",
      isFollowed: true,
    },
    {
      name: "Christian Hang",
      imageSrc: "assets/images/stories/small/pic3.jpg",
      isFollowed: true,
    },
  ];
  return (
    <>
      <div className="contant-section style-2" style={{ width: "100%" }}>
        <div className="title-bar m-0">
          <h6 className="mb-0">Friends</h6>
          <div className="dz-tab style-2">
            <ul className="nav nav-tabs" id="myTab3" role="tablist">
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  onClick={handleGrid}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M10 3H3V10H10V3Z"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 3H14V10H21V3Z"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M21 14H14V21H21V14Z"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M10 14H3V21H10V14Z"
                      stroke="var(--primary)"
                      strokeWidth="2"
                      strokeOpacity="0.5"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
              <li className="nav-item" role="presentation">
                <button
                  className="nav-link active"
                  onClick={handleColumn}
                >
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M8 6H21"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 12H21"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M8 18H21"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 6H3.01"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 12H3.01"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M3 18H3.01"
                      stroke="var(--primary)"
                      strokeOpacity="0.5"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              </li>
            </ul>
          </div>
        </div>
        <div className="tab-content" id="myTab3Content">
          {iconTab?.grid &&(<div
            className="tab-pane fade show active"
            id="grid"
            role="tabpanel"
            aria-labelledby="grid-tab"
          >
            <div className="dz-user-list row g-2">
              <div className="dz-user-list row g-2">
                {userFriendsData.map((user, index) => (
                  <div key={index} className="col-6">
                    <div className="user-grid">
                      <a
                        href="user-profile.html"
                        className="media status media-60"
                      >
                        <img src={user.imageSrc} alt="/" />
                        <div className="active-point"></div>
                      </a>
                      <a href="user-profile.html" className="name">
                        {user.name}
                      </a>
                      <a href="javascript:void(0);" className="follow-btn">
                        {user.isFollowed ? "UNFOLLOW" : "FOLLOW"}
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>)}
          {iconTab?.column &&(<div
            className="tab-pane fade show active"
            id="list"
            role="tabpanel"
            aria-labelledby="list-tab"
          >
            <div className="dz-user-list row g-3">
              {userFriendsData.map((user, index) => (
                <div key={index} className="col-12">
                  <div className="user-grid style-2">
                    <a
                      href="user-profile.html"
                      className="d-flex align-items-center"
                    >
                      <div className="media status media-50">
                        <img src={user.imageSrc} alt="/" />
                        <div className="active-point"></div>
                      </div>
                      <span className="name">{user.name}</span>
                    </a>
                    <a href="javascript:void(0);" className="follow-btn">
                      {user.isFollowed ? "UNFOLLOW" : "FOLLOW"}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>)}
        </div>
      </div>
    </>
  );
};
