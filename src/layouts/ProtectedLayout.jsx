import { Navigate, useLocation, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';
import { Header, Menu } from '../components';

const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const location = useLocation();

  return user ? (
    <>
      <Header />
      <Menu />
      {outlet}
    </>
  ) : (
    <Navigate to="/login" replace state={{ from: location }} />
  );
};
export default ProtectedLayout;
