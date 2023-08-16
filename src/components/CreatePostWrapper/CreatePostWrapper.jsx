import { CreatePost } from './CreatePost';
import { Footer } from './Footer';
import { Header } from './Header';
import './style.css';

export const CreatePostWrapper = () => {
  return (
    <>
      <Header />
      <CreatePost />
      <Footer />
    </>
  );
};
