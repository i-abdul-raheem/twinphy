export const VideoCall = () => {
  return (
    <div
      className='modal fade'
      tabIndex='-1'
      id='exampleModal1'
      ariaLabelledby='exampleModal1'
      ariaHidden='true'
    >
      <div className='modal-dialog modal-dialog-centered'>
        <div className='modal-content rounded border-0'>
          <div className='modal-body video-calling'>
            <div
              className='video-calling-popup'
              style={{
                backgroundImage: "url('assets/images/stories/pic2.png')",
              }}
            >
              <div className='main-box'>
                <div className='media mb-4 mx-auto media-60 rounded-circle'>
                  <img src='assets/images/stories/pic2.png' alt='videoCall' />
                </div>
                <div className='video-content'>
                  <i className='mb-2 fa-solid fa-video'></i>
                  <h6 className='text-white'>Emilia is video calling...</h6>
                </div>
                <div className='button-group'>
                  <a
                    className='btn btn-danger me-3'
                    href='#javascript'
                    dataBsDismiss='modal'
                    ariaLabel='Close'
                  >
                    <i className='fa-solid fa-xmark'></i>
                  </a>
                  <a className='btn btn-success ms-3' href='video-call.html'>
                    <i className='fa-solid fa-check'></i>
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
