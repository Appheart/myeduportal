import { faBraille } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../../components';

const JAMB = () => {
  return (
    <main>
      <div className="max-w-5xl m-auto flex flex-col gap-3">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          JAMB
        </div>
        <section className="w-full mx-auto space-y-5">
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              JAMB Registration 2023
            </summary>
          </details>
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              JAMB Subject Combination
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">h</p>
            </div>
          </details>
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              JAMB Accredited Centers
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">None Assigned yet</p>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
};

export default JAMB;
