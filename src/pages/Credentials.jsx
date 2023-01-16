import { useState } from 'react';
import { UserError } from '../components';

const Credentials = () => {
  const [data, setData] = useState('');

  return (
    <main>
      {!data ? (
        <UserError
          message={"You haven't uploaded any files"}
          cta={'Get started now'}
        />
      ) : (
        <section className="container mx-auto">
          <div>Credentials</div>
        </section>
      )}
    </main>
  );
};

export default Credentials;
