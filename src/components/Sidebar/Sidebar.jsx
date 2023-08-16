export const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='author-box'>
        <div className='dz-media'>
          <img src='assets/images/stories/small/pic1.jpg' alt='author' />
        </div>
        <div className='dz-info'>
          <span>Good Morning</span>
          <h5 className='name'>Emilla</h5>
        </div>
      </div>
      <ul className='nav navbar-nav'>
        <li className='nav-label'>Main Menu</li>
        <li>
          <a className='nav-link' href='welcome.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M13.35 20.13c-.76.69-1.93.69-2.69-.01l-.11-.1C5.3 15.27 1.87 12.16 2 8.28c.06-1.7.93-3.33 2.34-4.29 2.64-1.8 5.9-.96 7.66 1.1 1.76-2.06 5.02-2.91 7.66-1.1 1.41.96 2.28 2.59 2.34 4.29.14 3.88-3.3 6.99-8.55 11.76l-.1.09z' />
              </svg>
            </span>
            <span>Welcome</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='index.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M10 19v-5h4v5c0 .55.45 1 1 1h3c.55 0 1-.45 1-1v-7h1.7c.46 0 .68-.57.33-.87L12.67 3.6c-.38-.34-.96-.34-1.34 0l-8.36 7.53c-.34.3-.13.87.33.87H5v7c0 .55.45 1 1 1h3c.55 0 1-.45 1-1z' />
              </svg>
            </span>
            <span>Home</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='pages.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M12.6 18.06c-.36.28-.87.28-1.23 0l-6.15-4.78c-.36-.28-.86-.28-1.22 0-.51.4-.51 1.17 0 1.57l6.76 5.26c.72.56 1.73.56 2.46 0l6.76-5.26c.51-.4.51-1.17 0-1.57l-.01-.01c-.36-.28-.86-.28-1.22 0l-6.15 4.79zm.63-3.02l6.76-5.26c.51-.4.51-1.18 0-1.58l-6.76-5.26c-.72-.56-1.73-.56-2.46 0L4.01 8.21c-.51.4-.51 1.18 0 1.58l6.76 5.26c.72.56 1.74.56 2.46-.01z' />
              </svg>
            </span>
            <span>Pages</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='ui-components.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M4 8h4V4H4v4zm6 12h4v-4h-4v4zm-6 0h4v-4H4v4zm0-6h4v-4H4v4zm6 0h4v-4h-4v4zm6-10v4h4V4h-4zm-6 4h4V4h-4v4zm6 6h4v-4h-4v4zm0 6h4v-4h-4v4z' />
              </svg>
            </span>
            <span>Components</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='notification.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M18 16v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.68-1.5-1.51-1.5S10.5 3.17 10.5 4v.68C7.63 5.36 6 7.92 6 11v5l-1.3 1.29c-.63.63-.19 1.71.7 1.71h13.17c.89 0 1.34-1.08.71-1.71L18 16zm-6.01 6c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zM6.77 4.73c.42-.38.43-1.03.03-1.43-.38-.38-1-.39-1.39-.02C3.7 4.84 2.52 6.96 2.14 9.34c-.09.61.38 1.16 1 1.16.48 0 .9-.35.98-.83.3-1.94 1.26-3.67 2.65-4.94zM18.6 3.28c-.4-.37-1.02-.36-1.4.02-.4.4-.38 1.04.03 1.42 1.38 1.27 2.35 3 2.65 4.94.07.48.49.83.98.83.61 0 1.09-.55.99-1.16-.38-2.37-1.55-4.48-3.25-6.05z' />
              </svg>
            </span>
            <span>Notification</span>
            <span className='badge badge-circle badge-danger'>1</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='profile.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v1c0 .55.45 1 1 1h14c.55 0 1-.45 1-1v-1c0-2.66-5.33-4-8-4z' />
              </svg>
            </span>
            <span>Profile</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='chat.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <path d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zM7 9h10c.55 0 1 .45 1 1s-.45 1-1 1H7c-.55 0-1-.45-1-1s.45-1 1-1zm6 5H7c-.55 0-1-.45-1-1s.45-1 1-1h6c.55 0 1 .45 1 1s-.45 1-1 1zm4-6H7c-.55 0-1-.45-1-1s.45-1 1-1h10c.55 0 1 .45 1 1s-.45 1-1 1z' />
              </svg>
            </span>
            <span>Chat</span>
            <span className='badge badge-circle badge-info'>5</span>
          </a>
        </li>
        <li>
          <a className='nav-link' href='welcome.html'>
            <span className='dz-icon'>
              <svg
                // xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <g></g>
                <g>
                  <g>
                    <path d='M5,5h6c0.55,0,1-0.45,1-1v0c0-0.55-0.45-1-1-1H5C3.9,3,3,3.9,3,5v14c0,1.1,0.9,2,2,2h6c0.55,0,1-0.45,1-1v0 c0-0.55-0.45-1-1-1H5V5z' />
                    <path d='M20.65,11.65l-2.79-2.79C17.54,8.54,17,8.76,17,9.21V11h-7c-0.55,0-1,0.45-1,1v0c0,0.55,0.45,1,1,1h7v1.79 c0,0.45,0.54,0.67,0.85,0.35l2.79-2.79C20.84,12.16,20.84,11.84,20.65,11.65z' />
                  </g>
                </g>
              </svg>
            </span>
            <span>Logout</span>
          </a>
        </li>
        <li className='nav-label'>Settings</li>
        <li
          className='nav-color'
          data-bs-toggle='offcanvas'
          data-bs-target='#offcanvasBottom'
          aria-controls='offcanvasBottom'
        >
          <a href='#null' className='nav-link'>
            <span className='dz-icon'>
              <svg
                className='color-plate'
                // xmlns='http://www.w3.org/2000/svg'
                height='30px'
                viewBox='0 0 24 24'
                width='30px'
                fill='#000000'
              >
                <path d='M12 3c-4.97 0-9 4.03-9 9s4.03 9 9 9c.83 0 1.5-.67 1.5-1.5 0-.39-.15-.74-.39-1.01-.23-.26-.38-.61-.38-.99 0-.83.67-1.5 1.5-1.5H16c2.76 0 5-2.24 5-5 0-4.42-4.03-8-9-8zm-5.5 9c-.83 0-1.5-.67-1.5-1.5S5.67 9 6.5 9 8 9.67 8 10.5 7.33 12 6.5 12zm3-4C8.67 8 8 7.33 8 6.5S8.67 5 9.5 5s1.5.67 1.5 1.5S10.33 8 9.5 8zm5 0c-.83 0-1.5-.67-1.5-1.5S13.67 5 14.5 5s1.5.67 1.5 1.5S15.33 8 14.5 8zm3 4c-.83 0-1.5-.67-1.5-1.5S16.67 9 17.5 9s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z' />
              </svg>
            </span>
            <span>Color Theme</span>
          </a>
        </li>
        <li>
          <div className='mode'>
            <span className='dz-icon'>
              <svg
                className='dark'
                // xmlns='http://www.w3.org/2000/svg'
                enableBackground='new 0 0 24 24'
                height='24px'
                viewBox='0 0 24 24'
                width='24px'
                fill='#000000'
              >
                <g></g>
                <g>
                  <g>
                    <g>
                      <path d='M11.57,2.3c2.38-0.59,4.68-0.27,6.63,0.64c0.35,0.16,0.41,0.64,0.1,0.86C15.7,5.6,14,8.6,14,12s1.7,6.4,4.3,8.2 c0.32,0.22,0.26,0.7-0.09,0.86C16.93,21.66,15.5,22,14,22c-6.05,0-10.85-5.38-9.87-11.6C4.74,6.48,7.72,3.24,11.57,2.3z' />
                    </g>
                  </g>
                </g>
              </svg>
            </span>
            <span className='text-dark'>Dark Mode</span>
            <div className='custom-switch'>
              <input
                type='checkbox'
                className='switch-input theme-btn'
                id='toggle-dark-menu'
              />
              <label className='custom-switch-label' htmlFor='toggle-dark-menu'></label>
            </div>
          </div>
        </li>
      </ul>
      <div className='sidebar-bottom'>
        <h6 className='name'>Twinphy - Social Network</h6>
        <span className='ver-info'>App Version 1.0</span>
      </div>
    </div>
  );
};
