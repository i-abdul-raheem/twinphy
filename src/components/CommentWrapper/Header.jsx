import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header className='header bg-white'>
      <div className='container'>
        <div className='main-bar'>
          <div className='left-content'>
            <Link to='/' className='back-btn'>
              <i className='fa-solid fa-arrow-left'></i>
            </Link>
            <h4 className='title mb-0'>Comments</h4>
          </div>
          <div className='mid-content'></div>
          <div className='right-content'></div>
        </div>
      </div>
    </header>
  );
};
