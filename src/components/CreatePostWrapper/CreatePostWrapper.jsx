import { useState } from 'react';
import { CreatePost } from './CreatePost';
import { Footer } from './Footer';
import { Header } from './Header';
import './style.css';
import { handleAddPost } from '../../api/post';
import { avatarUpload } from '../../api';
import { useNavigate } from 'react-router-dom';

export const CreatePostWrapper = () => {
  const [text, setText] = useState('');
  const [loading, setLoading] = useState(false);
  const [mediaUrls, setMediaUrls] = useState('');
  const navigate = useNavigate();
  const handlePost = (e) => {
    setLoading(true);
    e.preventDefault();
    const userId = JSON.parse(localStorage.getItem('@twinphy-user'))._id;
    const formData = new FormData(e.currentTarget);
    if (formData.get('avatar')?.size > 0) {
      avatarUpload(formData).then((res) => {
        handleAddPost({ text, mediaUrls: res, id: userId })
          .then(() => {
            setLoading(false);
            navigate('/');
          })
          .catch(() => {
            setLoading(false);
            alert('Error');
          });
      });
    } else {
      handleAddPost({ text, id: userId })
        .then(() => {
          setLoading(false);
          navigate('/');
        })
        .catch(() => {
          setLoading(false);
          alert('Error');
        });
    }
  };

  return (
    <form onSubmit={handlePost}>
      <Header loading={loading} />
      <CreatePost setText={setText} />
      <Footer setMediaUrls={setMediaUrls} mediaUrls={mediaUrls} />
    </form>
  );
};
