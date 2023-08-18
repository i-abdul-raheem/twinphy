import { useEffect, useState, useMemo } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Message } from './Message';
import { VideoCall } from './VideoCall';
import { fetchMessages } from '../../api';
import io from "socket.io-client";
import { generateRandomRoomId } from "../../utils";

const socket = io.connect("http://localhost:5001");

export const MessageWrapper = () => {
  const [messages, setMessages] = useState([]);
  useEffect(() => {
    fetchMessages(window.location.pathname.split('/')[2]).then((res) =>
      setMessages(res)
    );
  }, []);
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('@twinphy-user'))
  );

  const joinRoom = () => {
    // if (messages.length > 0) {
      const room = process.env.REACT_APP_ROOM;
      socket.emit("join_room", room);
    // }
  };

  useEffect(() => {
    joinRoom();
  }, []);

  return (
    <>
      <Header
        title={
          userInfo?._id === messages[0]?.receiver?._id
            ? `${messages[0]?.sender?.firstName} ${messages[0]?.sender?.lastName}`
            : `${messages[0]?.receiver?.firstName} ${messages[0]?.receiver?.lastName}`
        }
        src={
          userInfo?._id === messages[0]?.receiver?._id
            ? messages[0]?.sender?.avatar
            : messages[0]?.receiver?.avatar
        }
      />
      <Message socket={socket} messages={messages} setMessages={setMessages} />
      <Footer socket={socket} messages={messages} receiver={messages[0]?.receiver?._id} setMessages={setMessages} />
      <VideoCall />
    </>
  );
};
