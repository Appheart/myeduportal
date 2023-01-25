import React from 'react';
import { institutionsData } from '../../data';

const RandomInstitution = () => {
  let { instituteId } = useParams();

  const institution = institutionsData.find((i) => i.short_name == instituteId);

  return (
    <div>
      <h3>{institution.name}</h3>
    </div>
  );
};

export default RandomInstitution;
