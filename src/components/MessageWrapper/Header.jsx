import { Link } from 'react-router-dom';

export const Header = () => {
  return (
    <header class='header bg-white'>
      <div class='container'>
        <div class='main-bar'>
          <div class='left-content'>
            <Link to='/chat' class='back-btn'>
              <i class='fa-solid fa-arrow-left'></i>
            </Link>
            <div class='media me-3 media-35 rounded-circle'>
              <img src='assets/images/stories/small/pic1.jpg' alt='/' />
            </div>
            <h5 class='mb-0'>Claudia Surr</h5>
          </div>
          <div class='mid-content'></div>
          <div class='right-content'>
            <span
              class='text-dark font-20'
              dataBsToggle='modal'
              dataBsTarget='#exampleModal1'
            >
              <i class='fa-solid fa-video'></i>
            </span>
          </div>
        </div>
      </div>
    </header>
  );
};
