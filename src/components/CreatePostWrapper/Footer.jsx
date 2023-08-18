import React, { useEffect, useState } from "react";

export const Footer = ({ setMediaUrls, mediaUrls }) => {
  const [values, setValues] = useState(null);
  const [name, setName] = useState("");

  useEffect(() => {
    if (name === "image") {
      document.getElementById("pic2").style.display = "block";
      document.getElementById("preview-video").style.display = "none";
    }
    if (name === "video") {
      document.getElementById("pic2").style.display = "none";
      document.getElementById("preview-video").style.display = "block";
    }
  }, [name]);

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      setValues(URL.createObjectURL(file).replace(/^blob:/, ""));
      const reader = new FileReader();
      reader.onload = function (e) {
        const fileType = e.target.result
          .split(";")[0]
          .split("/")[0]
          .split(":")[1];
        setName(fileType);

        if (fileType === "image") {
          document.getElementById("pic2").src = e.target.result;
        }
        if (fileType === "video") {
          document.getElementById("preview-video").src = e.target.result;
        }
      };
      reader.readAsDataURL(file);
    }
  };

setMediaUrls(values)
  return (
    <footer className="footer border-0 fixed">
      <div
        className="container"
        style={name === "video" ? { position: "relative" } : null}
      >
        <ul className="element-list">
          <li>
            <input
              name="avatar"
              id="file-input"
              type="file"
              accept="image/*, video/*"
              onChange={handleImageUpload}
            />
            <label htmlFor="file-input">
              <i className="fa-solid fa-file-image"></i> Photo/Video
            </label>
            <div
              className="media media-50"
              style={
                name !== ""
                  ? { width: "320px", height: "auto", marginTop: "20px" }
                  : {}
              }
            >
              <img
                id="pic2"
                src={mediaUrls}
                alt="profile"
                style={
                  name === "image" ? { display: "block" } : { display: "none" }
                }
              />
              <video
                id="preview-video"
                src={mediaUrls}
                style={
                  name === "video"
                    ? { display: "block", marginLeft: "20px" }
                    : { display: "none" }
                }
                autoPlay
              ></video>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};
