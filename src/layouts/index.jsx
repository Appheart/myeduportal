import { Outlet } from 'react-router-dom';
import { Header, Menu } from '../components';

const Layout = () => {
  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};
export default Layout;
