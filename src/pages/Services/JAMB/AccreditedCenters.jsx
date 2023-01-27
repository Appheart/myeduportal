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
        <div className="header flex flex-col gap-2 mb-3 border-b-2 pb-2 rounded-md sticky top-[4rem] bg-white -mx-1 px-4">
          <h3 className="uppercase text-center text-xl">
            JAMB Accredited Centers
          </h3>
          <input
            type="search"
            name=""
            id=""
            placeholder="Type to Search"
            className="px-2 py-2 rounded-md"
          />
        </div>
        <div className="flex gap-2 flex-col text-sm text-gray-700">
          <div className="flex gap-2 items-center shadow-md p-2">
            <h3 className="w-2/6 md:w-1/6 font-bold">State</h3>
            <h3 className="w-4/6 md:w-5/6 font-bold">Center</h3>
          </div>
          {AccreditedCentresData.map((a) => (
            <div className="flex gap-2 items-center shadow-md p-2">
              <h3 className="w-2/6 md:w-1/6 font-bold">{a.state}</h3>
              <h3 className="w-4/6 md:w-5/6 text-green-800">{a.ctrName}</h3>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
};

export default AccreditedCenters;
