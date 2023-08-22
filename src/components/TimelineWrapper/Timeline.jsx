import { useEffect } from "react";
import { NavLink } from "react-router-dom";

export const Timeline = ({ fetchPosts, timelineData }) => {
  const video = [
    "mp4",
    "avi",
    "mov",
    "mkv",
    "wmv",
    "flv",
    "webm",
    "mpeg",
    "mpg",
    "3gp",
    "m4v",
    "ogg",
  ];

  
  return (
    <>
      <header className="header">
        <div className="container">
          <form className="my-3">
            <div className="input-group">
              <input
                type="text"
                className="form-control"
                placeholder="Search.."
              />
              <span className="input-group-text">
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.7871 22.7761L17.9548 16.9437C19.5193 15.145 20.4665 12.7982 20.4665 10.2333C20.4665 4.58714 15.8741 0 10.2333 0C4.58714 0 0 4.59246 0 10.2333C0 15.8741 4.59246 20.4665 10.2333 20.4665C12.7982 20.4665 15.145 19.5193 16.9437 17.9548L22.7761 23.7871C22.9144 23.9255 23.1007 24 23.2816 24C23.4625 24 23.6488 23.9308 23.7871 23.7871C24.0639 23.5104 24.0639 23.0528 23.7871 22.7761ZM1.43149 10.2333C1.43149 5.38004 5.38004 1.43681 10.2279 1.43681C15.0812 1.43681 19.0244 5.38537 19.0244 10.2333C19.0244 15.0812 15.0812 19.035 10.2279 19.035C5.38004 19.035 1.43149 15.0865 1.43149 10.2333Z"
                    fill="var(--primary)"
                  />
                </svg>
              </span>
            </div>
          </form>
        </div>
      </header>
      <div className="page-content">
        <div className="content-inner pt-0">
          <div className="container bottom-content">
            <div className="tab-content" id="myTabContent3">
              <div
                className="tab-pane fade show active"
                id="home-tab-pane3"
                role="tabpanel"
                aria-labelledby="home-tab"
                tabIndex="0"
              >
                <div className="row">
                  {timelineData
                    .filter((i) => i?.mediaUrls)
                    .map((item, index) => (
                      <div className="col-md-4" key={index}>
                        <div
                          className="dz-lightgallery style-2 mt-3"
                          id="lightgallery"
                        >
                          <NavLink
                            to="/explore"
                            className="gallery-box"
                            data-lg-id={item?.id}
                          >
                            {item?.mediaUrls &&
                            video.includes(
                              item?.mediaUrls.toString().split(".")[
                                item?.mediaUrls.toString().split(".").length - 1
                              ]
                            ) ? (
                              <video
                                src={item?.mediaUrls}
                                autoPlay
                                muted
                                style={{ width: "100%" }}
                              />
                            ) : (
                              <img
                                src={item?.mediaUrls}
                                alt={`photo${index + 1}`}
                              />
                            )}
                          </NavLink>
                        </div>
                      </div>
                    ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
