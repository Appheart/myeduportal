import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';
import { Header, Menu } from '../components';

const ProtectedLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (!user) {
    return <Navigate to="/login" />;
  }

  return (
    <>
      <Header />
      <Menu />
      {outlet}
    </>
  );
};
export default ProtectedLayout;
