export const Layout = ({ children }) => {
  return (
    <>
      <div className='page-wraper header-fixed'>
        {/* <!-- Preloader --> */}
        {/* <div id='preloader'>
          <div className='spinner'></div>
        </div> */}
        {/* <!-- Preloader end--> */}
        <div
          className='offcanvas offcanvas-bottom'
          tabIndex='-1'
          id='offcanvasBottom1'
        >
          <button
            type='button'
            className='btn-close drage-close'
            data-bs-dismiss='offcanvas'
            aria-label='Close'
          ></button>
          <div className='offcanvas-header share-style m-0 pb-0'></div>
          <div className='offcanvas-body container pb-0'>
            <h4 style={{ textAlign: 'center' }}>Share this Post</h4>
            <div className='canvas-height mt-4 dz-scroll'>
              <ul
                className='social-icons'
                style={{
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  margin: 0,
                  padding: 0,
                  listStyleType: 'none',
                }}
              >
                <li style={{ margin: '0 10px' }}>
                  <a
                    href='#whatsapp'
                    className='whatsapp'
                    style={{
                      display: 'inline-block',
                      fontSize: '24px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    <i className='fab fa-whatsapp'></i>
                  </a>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <a
                    href='#facebook'
                    className='facebook'
                    style={{
                      display: 'inline-block',
                      fontSize: '24px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    <i className='fab fa-facebook'></i>
                  </a>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <a
                    href='#instagram'
                    className='instagram'
                    style={{
                      display: 'inline-block',
                      fontSize: '24px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    <i className='fab fa-instagram'></i>
                  </a>
                </li>
                <li style={{ margin: '0 10px' }}>
                  <a
                    href='#twitter'
                    className='twitter'
                    style={{
                      display: 'inline-block',
                      fontSize: '24px',
                      color: '#000',
                      textDecoration: 'none',
                    }}
                  >
                    <i className='fab fa-twitter'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {children}

        <div
          className='offcanvas offcanvas-top'
          tabIndex='-1'
          id='offcanvasTop'
        >
          <div className='offcanvas-header'>
            <h5 className='offcanvas-title' id='offcanvasTopLabel'>
              Report Post
            </h5>
            <button
              type='button'
              className='btn-close'
              data-bs-dismiss='offcanvas'
              aria-label='Close'
            ></button>
          </div>
          <div className='offcanvas-header share-style m-0 pb-0'>
            <form className='w-100'>
              <input
                id='report-content'
                type='text'
                className='form-control border-0'
                placeholder='report message ...'
              />
            </form>
          </div>
          <div className='offcanvas-body container pb-0'>
            <form>
              <div className='input-group'>
                <div className='col-auto'>
                  <button
                    id='report-submit'
                    type='submit'
                    className='btn btn-primary mb-3'
                  >
                    Submit
                  </button>
                  <button
                    type='button'
                    className=''
                    data-bs-toggle='offcanvas'
                    data-bs-target='#offcanvasTop'
                    aria-label='Close'
                    style={{
                      backgroundColor: 'transparent',
                      border: 'none',
                      textDecoration: 'none',
                      display: 'block',
                      outline: 0,
                    }}
                  ></button>
                </div>
              </div>
            </form>
          </div>
        </div>
        <div
          className='offcanvas offcanvas-bottom'
          tabIndex='-1'
          id='offcanvasBottom'
        >
          <div className='offcanvas-body small'>
            <ul className='theme-color-settings'>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_8'
                  name='theme_color'
                  type='radio'
                  value='color-primary'
                />
                <label htmlFor='primary_color_8'></label>
                <span>Default</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_2'
                  name='theme_color'
                  type='radio'
                  value='color-green'
                />
                <label htmlFor='primary_color_2'></label>
                <span>Green</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_3'
                  name='theme_color'
                  type='radio'
                  value='color-blue'
                />
                <label htmlFor='primary_color_3'></label>
                <span>Blue</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_4'
                  name='theme_color'
                  type='radio'
                  value='color-pink'
                />
                <label htmlFor='primary_color_4'></label>
                <span>Pink</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_5'
                  name='theme_color'
                  type='radio'
                  value='color-yellow'
                />
                <label htmlFor='primary_color_5'></label>
                <span>Yellow</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_6'
                  name='theme_color'
                  type='radio'
                  value='color-orange'
                />
                <label htmlFor='primary_color_6'></label>
                <span>Orange</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_7'
                  name='theme_color'
                  type='radio'
                  value='color-purple'
                />
                <label htmlFor='primary_color_7'></label>
                <span>Purple</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_1'
                  name='theme_color'
                  type='radio'
                  value='color-red'
                />
                <label htmlFor='primary_color_1'></label>
                <span>Red</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_9'
                  name='theme_color'
                  type='radio'
                  value='color-lightblue'
                />
                <label htmlFor='primary_color_9'></label>
                <span>Lightblue</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_10'
                  name='theme_color'
                  type='radio'
                  value='color-teal'
                />
                <label htmlFor='primary_color_10'></label>
                <span>Teal</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_11'
                  name='theme_color'
                  type='radio'
                  value='color-lime'
                />
                <label htmlFor='primary_color_11'></label>
                <span>Lime</span>
              </li>
              <li>
                <input
                  className='filled-in'
                  id='primary_color_12'
                  name='theme_color'
                  type='radio'
                  value='color-deeporange'
                />
                <label htmlFor='primary_color_12'></label>
                <span>Deeporange</span>
              </li>
            </ul>
          </div>
        </div>

        <div className='offcanvas offcanvas-bottom pwa-offcanvas'>
          <div className='container'>
            <div className='offcanvas-body small'>
              <img className='logo' src='assets/images/icon.png' alt='' />
              <h5 className='title'>Twinphy on Your Home Screen</h5>
              <p>
                Install Twinphy social network mobile app template to your home
                screen for easy access, just like any other app
              </p>
              <button type='button' className='btn btn-sm btn-primary pwa-btn'>
                Add to Home Screen
              </button>
              <button
                type='button'
                className='btn btn-sm pwa-close light btn-secondary ms-2'
              >
                Maybe later
              </button>
            </div>
          </div>
        </div>
        <div className='offcanvas-backdrop pwa-backdrop'></div>
      </div>

      <script src='assets/js/jquery.js'></script>
      <script src='assets/vendor/bootstrap/js/bootstrap.bundle.min.js'></script>
      <script src='assets/vendor/swiper/swiper-bundle.min.js'></script>
      {/* <!-- Swiper --> */}
      <script src='assets/vendor/bootstrap-touchspin/dist/jquery.bootstrap-touchspin.min.js'></script>
      {/* <!-- Swiper --> */}
      <script src='assets/js/dz.carousel.js'></script>
      {/* <!-- Swiper --> */}
      <script src='assets/js/settings.js'></script>
      <script src='assets/js/custom.js'></script>
      <script src='assets/js/user.js'></script>
      <script src='path/to/bootstrap.bundle.min.js'></script>

      {/* <!-- Your custom JavaScript --> */}
      <script src='path/to/custom.js'></script>

      <script
        src='https://cdn.socket.io/3.1.3/socket.io.min.js'
        integrity='sha384-cPwlPLvBTa3sKAgddT6krw0cJat7egBga3DJepJyrLl4Q9/5WLra3rrnMcyTyOnh'
        crossOrigin='anonymous'
      ></script>
      <script async src='index.js'></script>
      <script>$('.stepper').TouchSpin();</script>
    </>
  );
};
