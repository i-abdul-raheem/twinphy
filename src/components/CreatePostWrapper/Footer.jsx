import React, { useState } from 'react';

export const Footer = ({setMediaUrl , mediaUrl}) => {
  const [name, setName] = useState('');
  

  const handleImageUpload = (e) => {
    const selectedFile = e.target.files[0];
    if (selectedFile) {
      setName(selectedFile.type.startsWith('image/') ? 'image' : 'video');
      setMediaUrl(URL.createObjectURL(selectedFile));
    }
  };

  return (
    <footer className="footer border-0 fixed">
      <div className="container" style={name === 'video' ? { position: 'relative' } : {}}>
        <ul className="element-list">
          <li>
            <input
              name="file"
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
              style={name !== '' ? { width: '320px', height: 'auto', marginTop: '20px' } : {}}
            >
              <img
                id="pic2"
                src={mediaUrl}
                alt="profile"
                style={name === 'image' ? { display: 'block' } : { display: 'none' }}
              />
              <video
                id="preview-video"
                src={mediaUrl}
                style={name === 'video' ? { display: 'block', marginLeft: '20px' } : { display: 'none' }}
                autoPlay
              ></video>
            </div>
          </li>
        </ul>
      </div>
    </footer>
  );
};

