import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { Outlet, useNavigate } from 'react-router-dom';
import { Header, Menu } from '../components';

const Layout = () => {
  const { userName } = useSelector((state) => state.auth);
  const [token, setToken] = useState(userName);
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) {
      navigate('/login');
    }
  }, []);

  useEffect(() => {
    setToken(() => userName);
  }, [userName]);

  console.log(userName);

  return (
    <>
      <Header />
      <Menu />
      <Outlet />
    </>
  );
};
export default Layout;
