import { Link } from 'react-router-dom';

export const Row = ({ name, message, time, image, seen, isOnline }) => {
  return (
    <li>
      <Link to='/message'>
        <div className={`${isOnline && 'media'} media-50`}>
          <img className='rounded' src={image} alt='imag' />
        </div>
        <div className='media-content'>
          <div>
            <h6 className='name'>{name}</h6>
            <p className='my-1'>{message}</p>
          </div>
          <div className='left-content'>
            <span className='time'>{time}</span>
            <div className={`seen-btn ${seen && 'active'} mt-2`}>
              {seen && (
                <svg
                  width='11'
                  height='9'
                  viewBox='0 0 11 9'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    d='M3.73609 8.82324L0.161085 4.90081C-0.0536949 4.66516 -0.0536949 4.28308 0.161085 4.0474L0.938884 3.19399C1.15366 2.95832 1.50193 2.95832 1.71671 3.19399L4.125 5.8363L9.28329 0.176739C9.49807 -0.058913 9.84634 -0.058913 10.0611 0.176739L10.8389 1.03015C11.0537 1.2658 11.0537 1.64789 10.8389 1.88356L4.51391 8.82326C4.29911 9.05892 3.95087 9.05892 3.73609 8.82324Z'
                    fill='#BBB6D0'
                  />
                </svg>
              )}
            </div>
          </div>
        </div>
      </Link>
    </li>
  );
};
