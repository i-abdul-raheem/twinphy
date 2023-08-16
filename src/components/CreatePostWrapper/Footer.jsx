import './style.css';
export const Footer = () => {
  return (
    <footer className='footer border-0 fixed'>
      <div className='container'>
        <ul className='element-list'>
          <li>
            <input name='file' id='file-input' type='file' />
            <label for='file-input'>
              <i className='fa-solid fa-file-image'></i>Photo/Video
            </label>
            <div id='preview-container' style={{ display: 'none' }}>
              <img
                id='preview-image'
                style={{ display: 'none' }}
                alt='image1'
              />
              <video
                id='preview-video'
                style={{ display: 'none' }}
                controls
              ></video>
            </div>

            {/* <!-- Rest of your HTML code --> */}
          </li>
        </ul>
      </div>
    </footer>
  );
};
