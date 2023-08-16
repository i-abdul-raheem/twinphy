import { Header } from '../Header';
import { MenuBar } from '../MenuBar';
import { Sidebar } from '../Sidebar';
import { Profile } from './Profile';

export const ProfileWrapper = () => {
  return (
    <>
      <Header title={'Profile'} />
      <Sidebar />
      <Profile />
      <MenuBar />
    </>
  );
};
