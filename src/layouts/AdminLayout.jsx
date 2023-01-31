import React from 'react';

const AdminLayout = () => {
  const { user } = useAuth();
  const outlet = useOutlet();
  const location = useLocation();

  return <div>AdminLayout</div>;
};

export default AdminLayout;
