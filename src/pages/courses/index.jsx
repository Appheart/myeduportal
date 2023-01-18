import { useState } from 'react';
import { UserError } from '../../components';

const Courses = () => {
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
          <div>Courses</div>
        </section>
      )}
    </main>
  );
};
export default Courses;
