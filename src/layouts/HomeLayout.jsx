import { Navigate, useOutlet } from 'react-router-dom';
import { useAuth } from '../app/hooks/useAuth';

export const HomeLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();

  if (user) {
    return <Navigate to="/" replace />;
  }

  return { outlet };
};

export default HomeLayout;
