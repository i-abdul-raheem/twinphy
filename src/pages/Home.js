import { Header, MenuBar, Sidebar, Home } from './../components';

export function HomePage() {
  return (
    <>
      <Header title={'Home'} />
      <Sidebar />
      <Home />
      <MenuBar />
    </>
  );
}
