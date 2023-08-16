import { Link } from 'react-router-dom';

export const Profile = () => {
  return (
    <div class='page-content'>
      <div class='container profile-area'>
        <div class='profile'>
          <div class='main-profile'>
            <div class='left-content'>
              <span id='username'>abdulraheem.arhex@gmail.com</span>
              <h5 id='fullname' class='mt-1'>
                Abdul Raheem
              </h5>
            </div>
            <div class='right-content'>
              <div class='upload-box'>
                <img
                  id='pic'
                  src='data:image/png;base64,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'
                  alt='profile-piture'
                />
              </div>
            </div>
          </div>
        </div>
        <div class='contant-section'>
          <div class='social-bar'>
            <ul>
              <li class='active'>
                <a href='#posts'>
                  <h4 id='posts'>20</h4>
                  <span>Post</span>
                </a>
              </li>
              <li>
                <Link to='/friends'>
                  <h4 id='following'>30</h4>
                  <span>Following</span>
                </Link>
              </li>
              <li>
                <Link to='/friends'>
                  <h4 id='followers'>40</h4>
                  <span>Followers</span>
                </Link>
              </li>
            </ul>
          </div>
          <div class='title-bar my-2'>
            <h6 class='mb-0'>My Posts</h6>
            <div class='dz-tab style-2'>
              <ul class='nav nav-tabs' id='myTab3' role='tablist'>
                <li class='nav-item' role='presentation'>
                  <button
                    class='nav-link active'
                    id='home-tab3'
                    dataBsToggle='tab'
                    dataBsTarget='#home-tab-pane3'
                    type='button'
                    role='tab'
                    ariaControls='home-tab-pane'
                    ariaSelected='true'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M10 3H3V10H10V3Z'
                        stroke='var(--primary)'
                        strokeWidth='2'
                        strokeOpacity='0.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 3H14V10H21V3Z'
                        stroke='var(--primary)'
                        strokeWidth='2'
                        strokeOpacity='0.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M21 14H14V21H21V14Z'
                        stroke='var(--primary)'
                        strokeWidth='2'
                        strokeOpacity='0.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M10 14H3V21H10V14Z'
                        stroke='var(--primary)'
                        strokeWidth='2'
                        strokeOpacity='0.5'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
                <li class='nav-item' role='presentation'>
                  <button
                    class='nav-link'
                    id='profile-tab3'
                    dataBsToggle='tab'
                    dataBsTarget='#profile-tab-pane3'
                    type='button'
                    role='tab'
                    ariaControls='profile-tab-pane'
                    ariaSelected='false'
                  >
                    <svg
                      width='24'
                      height='24'
                      viewBox='0 0 24 24'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <path
                        d='M8 6H21'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8 12H21'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M8 18H21'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 6H3.01'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 12H3.01'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                      <path
                        d='M3 18H3.01'
                        stroke='var(--primary)'
                        strokeOpacity='0.5'
                        strokeWidth='2'
                        strokeLinecap='round'
                        strokeLinejoin='round'
                      />
                    </svg>
                  </button>
                </li>
              </ul>
            </div>
          </div>
          <div class='tab-content' id='myTabContent3'>
            <div
              class='tab-pane fade show active'
              id='home-tab-pane3'
              role='tabpanel'
              ariaLabelledby='home-tab'
              tabindex='0'
            >
              <div class='dz-lightgallery style-2' id='lightgallery'>
                <span class='gallery-box'>
                  <img src='assets/images/post/pic1.png' alt='image1' />
                </span>
              </div>
            </div>
            <div
              class='tab-pane fade'
              id='profile-tab-pane3'
              role='tabpanel'
              ariaLabelledby='profile-tab'
              tabindex='0'
            >
              <div class='dz-lightgallery' id='lightgallery-2'>
                <span class='gallery-box'>
                  <img src='assets/images/post/pic4.png' alt='image1' />
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
