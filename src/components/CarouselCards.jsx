import React from 'react';

const CarouselCards = () => {
  return (
    <div className="flex flex-col gap-3 ">
      {/* Carousels */}
      <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 gap-2 w-full flex-nowrap overflow-x-auto h-[10rem] sna">
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
