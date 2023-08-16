import { useEffect, useState } from 'react';
import { Header } from '../Header';
import { MenuBar } from '../MenuBar';
import { Sidebar } from '../Sidebar';
import { Chat } from './Chat';
import { getAllChats } from '../../api';

export const ChatWrapper = () => {
  const [chats, setChats] = useState([]);
  useEffect(() => {
    getAllChats().then((res) => {
      setChats(res);
    });
  }, []);
  return (
    <>
      <Header title={'Chat'} />
      <Sidebar />
      <Chat chats={chats} />
      <MenuBar />
    </>
  );
};
