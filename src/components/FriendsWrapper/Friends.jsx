import { Followers } from './Followers';
import { Followings } from './Followings';

export const Frineds = () => {
  return (
    <div class='page-content'>
      <nav id='main-navigation'>
        <ul class='links-container'>
          <li class='nav-link active'>245 Followers</li>
          <li class='nav-link'>85 Following</li>
        </ul>
      </nav>
      <div class='swiper-scrollbar'></div>
      <div class='container profile-area pt-0'>
        <article id='pages-container'>
          <article id='pages-container-inner'>
            <div class='swiper-wrapper'>
              <Followers />
            </div>
            <div class='swiper-wrapper'>
              <Followings />
            </div>
          </article>
        </article>
      </div>
    </div>
  );
};
