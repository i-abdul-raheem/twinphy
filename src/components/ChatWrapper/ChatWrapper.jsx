import { Header } from '../Header';
import { MenuBar } from '../MenuBar';
import { Sidebar } from '../Sidebar';
import { Chat } from './Chat';

export const ChatWrapper = () => {
  return (
    <>
      <Header title={'Chat'} />
      <Sidebar />
      <Chat />
      <MenuBar />
    </>
  );
};
