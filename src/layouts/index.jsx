import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';
import { Header, Menu } from '../components';

const Layout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <Header />
      <Menu />
      {outlet}
    </>
  );
};
export default Layout;
