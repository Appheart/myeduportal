import React from 'react';

const Events = () => {
  return (
    <main>
      {' '}
      <div className="flex flex-col md:flex-row gap-3 md:gap-4 ">
        {/* Announcement */}
        <section className="section bg-yellow-50 p-3 rounded-lg w-full md:w-[50%]">
          <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Upcomings</h3>

          <div className="flex flex-col gap-3 ">
            {/* Carousels */}
            <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 px-4 gap-5 w-full flex-nowrap overflow-x-auto h-[8rem]">
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-white text-yellow-700 shadow-md h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Matriculation is now holding on the 18th of February this
                year, 2023
              </p>
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-white text-yellow-700 shadow-md h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Convocation is scheduled to hold in March 21st, 2023
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};

export default Events;
