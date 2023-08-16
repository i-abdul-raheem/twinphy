import { Footer } from './Footer';
import { Header } from './Header';
import { Message } from './Message';
import { VideoCall } from './VideoCall';

export const MessageWrapper = () => {
  return (
    <>
      <Header title={'Abdul Raheem'} />
      <Message />
      <Footer />
      <VideoCall />
    </>
  );
};
