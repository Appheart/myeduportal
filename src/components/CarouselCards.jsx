import React from 'react';
import LinkBtn from './Link';
import { adsData } from '../data';

const CarouselCards = () => {
  return (
    <div className="flex flex-col gap-3 ">
      {/* Carousels */}
      <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 px-4 gap-5 w-full flex-nowrap overflow-x-auto h-[12rem]">
        {adsData.map((ad, index) => (
          <LinkBtn
            key={index}
            link={ad.link}
            className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-green-100 h-full w-full overflow-hidden max-w-[5] "
          >
            <img
              src={ad.adImg}
              alt={ad.title}
              className="h-full w-full object-cover"
            />
          </LinkBtn>
        ))}
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
