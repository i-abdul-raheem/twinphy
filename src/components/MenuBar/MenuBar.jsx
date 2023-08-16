import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export const MenuBar = () => {
  const [active, setActive] = useState(window.location.pathname);
  useEffect(() => {
    setActive(window.location.pathname);
  }, []);
  return (
    <div className='menubar-area'>
      <div className='toolbar-inner menubar-nav'>
        <Link to='/' className={`nav-link ${active === '/' && 'active'}`}>
          <svg
            // xmlns='http://www.w3.org/2000/svg'
            width='22'
            height='22'
            fill='none'
            // xmlns:v='https://vecta.io/nano'
          >
            <path
              d='M21.44 11.035a.75.75 0 0 1-.69.465H18.5V19a2.25 2.25 0 0 1-2.25 2.25h-3a.75.75 0 0 1-.75-.75V16a.75.75 0 0 0-.75-.75h-1.5a.75.75 0 0 0-.75.75v4.5a.75.75 0 0 1-.75.75h-3A2.25 2.25 0 0 1 3.5 19v-7.5H1.25a.75.75 0 0 1-.69-.465.75.75 0 0 1 .158-.818l9.75-9.75A.75.75 0 0 1 11 .246a.75.75 0 0 1 .533.222l9.75 9.75a.75.75 0 0 1 .158.818z'
              fill='#b5b5b5'
            />
          </svg>
        </Link>
        <Link
          to='/timeline'
          className={`nav-link ${active === '/timeline' && 'active'}`}
        >
          <svg
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            // xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M11 19C15.4183 19 19 15.4183 19 11C19 6.58172 15.4183 3 11 3C6.58172 3 3 6.58172 3 11C3 15.4183 6.58172 19 11 19Z'
              stroke='#b5b5b5'
              strokeOpacity='1'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M21 21L16.65 16.65'
              stroke='#b5b5b5'
              strokeOpacity='1'
              strokeWidth='2.5'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        </Link>
        <Link to='/create-post' className='nav-link add-post'>
          <i className='fa-solid fa-plus'></i>
        </Link>
        <Link
          to='/chat'
          className={`nav-link ${active === '/chat' && 'active'}`}
        >
          <svg
            // xmlns='http://www.w3.org/2000/svg'
            width='24'
            height='24'
            fill='#b5b5b5'
            viewBox='0 0 511.606 511.606'
            // xmlns:v='https://vecta.io/nano'
          >
            <path d='M436.594 74.943c-99.917-99.917-261.637-99.932-361.568 0-80.348 80.347-95.531 199.817-48.029 294.96L.662 485.742c-3.423 15.056 10.071 28.556 25.133 25.133l115.839-26.335c168.429 84.092 369.846-37.653 369.846-228.812 0-68.29-26.595-132.494-74.886-180.785zM309.143 319.394h-160c-11.598 0-21-9.402-21-21s9.402-21 21-21h160c11.598 0 21 9.402 21 21s-9.402 21-21 21zm53.334-85.333H149.143c-11.598 0-21-9.402-21-21s9.402-21 21-21h213.334c11.598 0 21 9.402 21 21s-9.403 21-21 21z' />
          </svg>
        </Link>
        <Link
          to='/profile'
          className={`nav-link ${active === '/profile' && 'active'}`}
        >
          <svg
            // xmlns='http://www.w3.org/2000/svg'
            width='16'
            height='21'
            fill='#b5b5b5'
            // xmlns:v='https://vecta.io/nano'
          >
            <path d='M8 7.75a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 1 0 0 7.5zm7.5 9v1.5c-.002.199-.079.39-.217.532C13.61 20.455 8.57 20.5 8 20.5s-5.61-.045-7.282-1.718C.579 18.64.501 18.449.5 18.25v-1.5a7.5 7.5 0 1 1 15 0z' />
          </svg>
        </Link>
      </div>
    </div>
  );
};
