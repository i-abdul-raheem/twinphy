import { Link } from 'react-router-dom';

export const Forget = () => {
  return (
    <div class='content-body'>
      <div class='container vh-100'>
        <div class='welcome-area'>
          <div
            class='bg-image bg-image-overlay'
            style={{ backgroundImage: "url('assets/images/login/pic6.jpg')" }}
          ></div>
          <div class='join-area h-50'>
            <div class='started'>
              <h1 class='title'>Forgot Password</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor
              </p>
            </div>
            <form>
              <div class='input-group form-item input-select'>
                <span class='input-group-text'>
                  <select class='form-control custom-image-select-2 image-select'>
                    <option data-thumbnail='assets/images/flags/australia.png'>
                      +61
                    </option>
                    <option data-thumbnail='assets/images/flags/india.png'>
                      +91
                    </option>
                    <option data-thumbnail='assets/images/flags/uae.png'>
                      +971
                    </option>
                    <option data-thumbnail='assets/images/flags/us.png'>
                      +1
                    </option>
                  </select>
                </span>
                <input
                  type='number'
                  class='form-control'
                  placeholder='Phone Number'
                />
              </div>
            </form>
            <div class='seprate-box mb-3'>
              <Link to='/login' class='back-btn'>
                <svg
                  width='10'
                  height='16'
                  viewBox='0 0 10 16'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <path
                    fill-rule='evenodd'
                    clip-rule='evenodd'
                    d='M4.40366 8L9.91646 2.58333L7.83313 0.499999L0.333132 8L7.83313 15.5L9.91644 13.4167L4.40366 8Z'
                    fill='white'
                  />
                </svg>
              </Link>
              <a href='otp-confirm.html' class='btn btn-primary btn-block'>
                NEXT
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
