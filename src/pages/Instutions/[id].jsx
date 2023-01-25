import React from 'react';
import { useParams } from 'react-router-dom';
import { institutionsData } from '../../data';

const RandomInstitution = () => {
  let { instituteId } = useParams();

  const institution = institutionsData.find((i) => i.short_name == instituteId);

  return (
    <main>
      <section>
        <h3>{institution.name}</h3>
      </section>
    </main>
  );
};

export default RandomInstitution;
