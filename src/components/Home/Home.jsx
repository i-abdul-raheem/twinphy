import { Post } from './Post';
import { StorySection } from './StorySection';

export const Home = () => {
  return (
    <div className='page-content'>
      <div className='content-inner pt-0'>
        <div className='container bottom-content'>
          <StorySection />
          <Post
            text={
              'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do sum sit emat 😎😎'
            }
          />
        </div>
      </div>
    </div>
  );
};
