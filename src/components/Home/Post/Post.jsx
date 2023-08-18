import { Header } from './Header';
import { Media } from './Media';
import { Likes } from './Likes';
import { Comments } from './Comments';
import axios from 'axios';

export const Post = ({ text }) => {
  return (
    <div id='post-area' className='post-area'>
      <div className='post-card'>
        <Header />
        <p className='text-black'>{text}</p>
        <div className='dz-media'>
          <Media src={'assets/images/post/pic8.png'} />
          <div className='post-meta-btn'>
            <ul>
              <li>
                <Likes />
              </li>
              <li>
                <Comments />
              </li>

              {/* <!-- Dynamically Added Elements --> */}
              <div id='dynamicElements'>
                {/* <!-- Dynamically added elements will be inserted here --> */}
              </div>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
