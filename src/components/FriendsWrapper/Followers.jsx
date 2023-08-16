export const Followers = () => {
  return (
    <div class='swiper-slide'>
      <div class='contant-section style-2'>
        <div class='title-bar m-0'>
          <h6 class='mb-0'>Friends</h6>
        </div>
        <div class='tab-content' id='myTab3Content'>
          <div
            class='tab-pane fade'
            id='grid'
            role='tabpanel'
            aria-labelledby='grid-tab'
          >
            <div class='dz-user-list row g-2'>
              <div class='col-6'>
                <div class='user-grid'>
                  <a href='user-profile.html' class='media status media-60'>
                    <img src='assets/images/stories/small/pic1.jpg' alt='/' />
                    <div class='active-point'></div>
                  </a>
                  <a href='user-profile.html' class='name'>
                    Andy Lee
                  </a>
                </div>
              </div>
              <div class='col-6'>
                <div class='user-grid'>
                  <a href='user-profile.html' class='media status media-60'>
                    <img src='assets/images/stories/small/pic2.jpg' alt='/' />
                    <div class='active-point'></div>
                  </a>
                  <a href='user-profile.html' class='name'>
                    Brian Harahap
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
