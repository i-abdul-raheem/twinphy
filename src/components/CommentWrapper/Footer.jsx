export const Footer = () => {
  return (
    <footer className='footer fixed border-top'>
      <div className='container py-2'>
        <div className='commnet-footer'>
          <div className='d-flex align-items-center flex-1'>
            <div className='media media-40 rounded-circle'>
              <img id='user-image' src='/' alt='profile' />
            </div>
            <form className='flex-1'>
              <input
                id='comment-input'
                type='text'
                className='form-control'
                placeholder='Add a Comment...'
                autocomplete='off'
              />
            </form>
          </div>

          <a id='send-comment' href='#javascript' className='send-btn'>
            <img id='avatar' src='/' alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};
