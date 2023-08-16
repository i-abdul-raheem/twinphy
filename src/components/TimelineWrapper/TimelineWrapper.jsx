import { Header } from '../Header';
// import { Layout } from '../Layout';
import { MenuBar } from '../MenuBar';
import { Sidebar } from '../Sidebar';
import { Timeline } from './Timeline';

export const TimelineWrapper = () => {
  return (
    <>
      <Header title={'Timeline'} />
      <Sidebar />
      <Timeline />
      <MenuBar />
    </>
  );
};
