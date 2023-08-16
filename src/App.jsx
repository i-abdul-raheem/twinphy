import { Route, Routes } from 'react-router-dom';
import {
  Chat,
  Comment,
  CreatePost,
  HomePage,
  Message,
  Notification,
  Profile,
  Timeline,
} from './pages';
import { Forget, Login, Signup } from './components';

export default function App() {
  return (
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/timeline' element={<Timeline />} />
      <Route path='/chat' element={<Chat />} />
      <Route path='/message' element={<Message />} />
      <Route path='/profile' element={<Profile />} />
      <Route path='/notifications' element={<Notification />} />
      <Route path='/comment' element={<Comment />} />
      <Route path='/create-post' element={<CreatePost />} />
      <Route path='/login' element={<Login />} />
      <Route path='/signup' element={<Signup />} />
      <Route path='/forget' element={<Forget />} />
    </Routes>
  );
}
