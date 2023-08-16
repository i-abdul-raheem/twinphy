export const Footer = () => {
  return (
    <footer class='footer fixed border-top'>
      <div class='container py-2'>
        <div class='commnet-footer'>
          <div class='d-flex align-items-center flex-1'>
            <div class='media media-40 rounded-circle'>
              <img id='user-image' src='/' alt='profile' />
            </div>
            <form class='flex-1'>
              <input
                id='comment-input'
                type='text'
                class='form-control'
                placeholder='Add a Comment...'
                autocomplete='off'
              />
            </form>
          </div>

          <a id='send-comment' href='#javascript' class='send-btn'>
            <img id='avatar' src='/' alt='' />
          </a>
        </div>
      </div>
    </footer>
  );
};
