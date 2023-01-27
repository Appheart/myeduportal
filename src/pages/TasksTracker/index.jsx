import React from 'react';
import { LinkBtn } from '../../components';

const TaksTracker = () => {
  return (
    <main>
      {/* Todos */}
      <section className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-md w-full md:w-[50%]">
        <h3 className="text-lg font-bold text-yellow-100 pb-2 ">
          Tasks Tracker
        </h3>
        <div className="grid md:flex grid-cols-2 gap-4 flex-wrap justify-between">
          <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg">
            <h3 className="text-sm font-bold">Fees payment</h3>
          </div>
          <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg">
            <h3 className="text-sm font-bold">Clearance</h3>
          </div>
          <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg">
            <h3 className="text-sm font-bold">Course Registration</h3>
          </div>
          <LinkBtn
            link={
              'https://appheartunn.substack.com/p/step-by-step-guide-on-how-to-write'
            }
            className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg"
          >
            <h3 className="text-sm font-bold">Term paper</h3>
          </LinkBtn>
          <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg">
            <h3 className="text-sm font-bold">Assignments</h3>
          </div>
          <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-white text-gray-700 shadow-sm rounded-lg">
            <h3 className="text-sm font-bold">Seminars</h3>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TaksTracker;
