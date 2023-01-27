import React, { useEffect, useState } from 'react';
import { getAllAccreditedCenters } from '../../../app/api/JAMB/accreditedCentersApi.js';

const AccreditedCenters = () => {
  const [AccreditedCentresData, setAccreditedCentresData] = useState([]);

  const fetchAccreditedCentresData = () => {
    getAllAccreditedCenters().then((result) =>
      setAccreditedCentresData(result)
    );
  };

  useEffect(() => {
    fetchAccreditedCentresData(), [];
  });

  return (
    <main>
      <section className="w-full max-w-3xl mx-auto">
        <h3>AccreditedCenters</h3>
        <div className="flex gap-2 flex-col text-sm text-gray-600">
          <div className="flex gap-2 items-start border-b-2">
            <h3 className="w-2/6 md:w-1/6 font-bold">State</h3>
            <h3 className="w-4/6 md:w-5/6 font-bold">Center</h3>
          </div>
          {AccreditedCentresData.map((a) => (
            <div className="flex gap-2 items-start border-b-2">
              <h3 className="w-2/6 md:w-1/6">{a.state}</h3>
              <h3 className="w-4/6 md:w-5/6">{a.ctrName}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AccreditedCenters;
