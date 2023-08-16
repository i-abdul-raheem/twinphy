import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header class='header bg-white'>
      <div class='container'>
        <div class='main-bar'>
          <div class='left-content'>
            <Link to='/' class='back-btn'>
              <i class='fa-solid fa-arrow-left'></i>
            </Link>
            <h4 class='title mb-0'>Notifications</h4>
          </div>
          <div class='mid-content'></div>
          <div class='right-content'></div>
        </div>
      </div>
    </header>
  );
};
