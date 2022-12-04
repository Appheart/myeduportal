import { useState } from 'react';
import { UserError } from '../components';

const Profile = () => {
  const [data, setData] = useState('');

  return (
    <main>
      {!data ? (
        <UserError message={'Profile not setup'} cta={'Setup profile'} />
      ) : (
        <section className="container mx-auto">
          <div>Credentials</div>
        </section>
      )}
    </main>
  );
};
export default Profile;
