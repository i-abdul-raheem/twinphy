import { useState } from "react";
import { NavLink } from "react-router-dom";

export const MyPost = () => {
    const [grid, setGrid] = useState(true);

    const handleGrid = () => {
        setGrid(true)
    };
    const handleColumn = () => {
      setGrid(false)
    };

  const profileData = [
    {
      images: [
        "assets/images/post/pic1.png",
        "assets/images/post/pic2.png",
        "assets/images/post/pic3.png",
        "assets/images/post/pic4.png",
        "assets/images/post/pic5.png",
        "assets/images/post/pic6.png",
        "assets/images/post/pic7.png",
        "assets/images/post/pic8.png",
      ],
    }
  ];

  return (
    <>
      <div className="title-bar my-2">
        <h6 className="mb-0">My Posts</h6>
        <div className="dz-tab style-2">
          <ul className="nav nav-tabs" id="myTab3" role="tablist">
            <li className="nav-item" role="presentation">
              <button className={`nav-link ${grid && "active"}`} onClick={handleGrid}>
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
              <button className={`nav-link ${!grid && "active"}`} onClick={handleColumn}>
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
      <div className="tab-content" id="myTabContent3">
        {grid ? (
          <div
            className="tab-pane fade show active"
            id="home-tab-pane3"
            role="tabpanel"
            aria-labelledby="home-tab"
            tabindex="0"
          >
            {profileData.map((tab, index) => (
              <div className="dz-lightgallery style-2" id="lightgallery">
                {tab.images.map((image, imgIndex) => (
                  <a className="gallery-box" href={image} key={imgIndex}>
                    <NavLink to="/user-post">
                      <img src={image} alt="image" />
                    </NavLink>
                  </a>
                ))}
              </div>
            ))}
          </div>
        )
        :(
          <div
            className="tab-pane fade  show active"
            id="profile-tab-pane3"
            role="tabpanel"
            aria-labelledby="profile-tab"
            tabindex="0"
          >
            {profileData.map((tab, index) => (
              <div className="dz-lightgallery" id="lightgallery-2">
                {tab.images.map((image, imgIndex) => (
                  <a className="gallery-box" href={image} key={imgIndex}>
                    <NavLink to="/user-post">
                      <img src={image} alt="image" />
                    </NavLink>
                  </a>
                ))}
              </div>
            ))}
          </div>
        )}
        {/* {profileData.length > 0 ? (
          profileData.map((tab, index) => (
            <div
              className={`tab-pane fade ${index === 0 ? "show active" : ""}`}
              id={tab.id}
              role="tabpanel"
              aria-labelledby={`${tab.id}-tab`}
              tabIndex="0"
              key={index}
            >
              <div className="dz-lightgallery style-2" id={tab.galleryId}>
                {tab.images.map((image, imgIndex) => (
                  <a className="gallery-box" href={image} key={imgIndex}>
                    <NavLink to="/user-post">
                      <img src={image} alt="image" / />
                    </NavLink>
                  </a>
                ))}
              </div>
            </div>
          ))
        ) : (
          <div className="no-posts-message">No posts yet</div>
        )}*/}
      </div>
    </>
  );
};
