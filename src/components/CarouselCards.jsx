import React from 'react';
import LinkBtn from './Link';

const CarouselCards = () => {
  return (
    <div className="flex flex-col gap-3 ">
      {/* Carousels */}
      <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 gap-2 w-full flex-nowrap overflow-x-auto h-[10rem] sna">
        <div className="snap-start justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0 p-2 rounded-lg bg-green-100 h-full w-full">
          <h3>Carry out transactions with ease!</h3>
          <LinkBtn
            className={
              'py-2 px-3 bg-green-800 rounded-lg text-white font-bold '
            }
            link={'/'}
          >
            Set up wallet
          </LinkBtn>
        </div>
        <div className="snap-start flex flex-shrink-0 p-2 rounded-lg bg-green-100 h-full w-full">
          Ad Card
        </div>
        <div className="snap-start flex flex-shrink-0 p-2 rounded-lg bg-green-100 h-full w-full">
          Ad Card
        </div>
        <div className="snap-start flex flex-shrink-0 p-2 rounded-lg bg-green-100 h-full w-full">
          Ad Card
        </div>
        <div className="snap-start flex flex-shrink-0 p-2 rounded-lg bg-green-100 h-full w-full">
          Ad Card
        </div>
      </div>

      {/* Carousels Controllers */}
      <div className="flex items-center justify-center gap-1">
        <div className="h-2 w-2 bg-red-500 rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
      </div>
    </div>
  );
};

export default CarouselCards;
