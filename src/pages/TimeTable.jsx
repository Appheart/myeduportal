import { useState } from 'react';
import { UserError } from '../components';

const TimeTable = () => {
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
          <div>Time Table</div>
        </section>
      )}
    </main>
  );
};
export default TimeTable;
