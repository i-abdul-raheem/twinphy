import { useEffect, useState } from 'react';
import { Footer } from './Footer';
import { Header } from './Header';
import { Message } from './Message';
import { VideoCall } from './VideoCall';
import { fetchMessages } from '../../api';

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
      <Message messages={messages} />
      <Footer receiver={messages[0]?.receiver?._id} setMessages={setMessages} />
      <VideoCall />
    </>
  );
};
