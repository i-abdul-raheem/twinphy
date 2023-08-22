export const StorySection = () => {
  return (
    <div className='author-notification mb-4'>
      <div className='swiper-btn-center-lr my-0'>
        <div className='swiper-container categorie-swiper'>
          <div className='swiper-wrapper media-scroller'>
            <div className='swiper-slide'>
              <a href='#story' className='categore-box style-1'>
                <div className='story-bx'>
                  <img
                    id='pic-top'
                    src={
                      JSON.parse(localStorage.getItem('@twinphy-user')).avatar
                    }
                    alt='/'
                  />
                  <div className='add-box'>
                    <i className='fa-solid fa-plus'></i>
                  </div>
                </div>
                <span className='detail'>Your Story</span>
              </a>
            </div>

            <div className='swiper-slide'>
              <a href='story.html' className='categore-box'>
                {' '}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
