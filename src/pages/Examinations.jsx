import { useState } from 'react';

import { UserError } from '../components';

const Examinations = () => {
  const [data, setData] = useState('');

  return (
    <main>
      {!data ? (
        <UserError
          message={'You are currently not on any plans'}
          cta={'Upgrade to Pro'}
        />
      ) : (
        <section className="container mx-auto">
          <div>Exminations</div>
        </section>
      )}
    </main>
  );
};
export default Examinations;
