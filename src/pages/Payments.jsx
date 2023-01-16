import { useState } from 'react';
import { UserError } from '../components';

const Payments = () => {
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
          <div>Payments</div>
        </section>
      )}
    </main>
  );
};
export default Payments;
