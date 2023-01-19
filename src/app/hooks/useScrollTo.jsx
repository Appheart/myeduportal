import { useEffect } from 'react';
import { useLocation } from 'react-router';

const UseScrollTo = (x, y, props) => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(x, y);
  }, [pathname]);

  return <>{props.children}</>;
};

export default UseScrollTo;
