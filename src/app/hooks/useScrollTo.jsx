import { useEffect } from 'react';
import { useLocation } from 'react-router';

const UseScrollTo = ({ children }) => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  return children;
};

export default UseScrollTo;
