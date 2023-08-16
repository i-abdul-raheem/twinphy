import moment from 'moment';
import { useEffect, useState } from 'react';

export const Message = ({ messages }) => {
  const [userInfo, setUserInfo] = useState(
    JSON.parse(localStorage.getItem('@twinphy-user'))
  );
  useEffect(() => {
    setUserInfo(JSON.parse(localStorage.getItem('@twinphy-user')));
    console.log(messages);
  }, [localStorage]);
  return (
    <div className='page-content message-content'>
      <div className='container chat-box-area bottom-content'>
        {messages.map((msg, index) => (
          <div
            key={index}
            className={`chat-content ${
              (userInfo?._id === msg?.sender?._id ||
                userInfo?._id?.$oid === msg?.sender?._id) &&
              'user'
            }`}
          >
            <div className='message-item'>
              <div className='bubble'>
                {msg?.text || (
                  <img style={{ maxWidth: 175 }} src={msg?.media} alt='demo' />
                )}
              </div>
              <div className='message-time'>
                {moment(msg?.updatedAt).fromNow()}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
