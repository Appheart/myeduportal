import { Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <div className="layout">
      <div className="header">Header</div>
      <Outlet />
    </div>
  );
};
export default Layout;
