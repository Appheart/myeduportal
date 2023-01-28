import {
  faBackward,
  faCaretLeft,
  faCaretRight,
  faForward,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import { getAllAccreditedCenters } from '../../../app/api/JAMB/accreditedCentersApi.js';

const AccreditedCenters = () => {
  const [AccreditedCentresData, setAccreditedCentresData] = useState([]);
  const [page, setPage] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const fetchAccreditedCentresData = () => {
    getAllAccreditedCenters(page).then((result) => {
      setAccreditedCentresData(result);
      setIsLoaded(true);
    });
  };

  useEffect(() => {
    fetchAccreditedCentresData(), [page];
  });

  const searchForData = () => {
    return true;
  };

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <main>
      <section className="w-full max-w-3xl mx-auto">
        <div className="header flex flex-col gap-3 mb-3 border-b-2 py-4 rounded-md sticky top-[4rem] bg-white -mx-1 px-4">
          <h3 className="uppercase text-center text-xl text-green-700 font-bold">
            JAMB Accredited Centers
          </h3>
          <input
            type="search"
            name=""
            id=""
            placeholder="Type to Search"
            className="px-2 py-2 rounded-md text-sm placeholder:text-sm"
          />
        </div>

        {!isLoaded ? (
          'loading'
        ) : (
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

            <div className="flex gap-3 text-lg items-center justify-center">
              <div className="icon first_page-icon">
                <FontAwesomeIcon icon={faBackward} />
              </div>
              <div className="icon prev_page-icon" onClick={prevPage}>
                <FontAwesomeIcon icon={faCaretLeft} />
              </div>
              <p>{page}</p>
              <div className="icon next_page-icon">
                <FontAwesomeIcon icon={faCaretRight} onClick={nextPage} />
              </div>
              <div className="icon last_page-icon">
                <FontAwesomeIcon icon={faForward} />
              </div>
            </div>
          </div>
        )}
      </section>
    </main>
  );
};

export default AccreditedCenters;
