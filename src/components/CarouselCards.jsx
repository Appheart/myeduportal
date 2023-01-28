import React from 'react';
import LinkBtn from './Link';
import { adsData } from '../data';

const CarouselCards = () => {
  return (
    <div className="flex flex-col gap-5">
      {/* Carousels */}
      <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pt-2 pb-3 gap-5 w-full flex-nowrap overflow-x-auto max-h-max border-t-4 border-b-8">
        {adsData.map((ad, index) => (
          <LinkBtn
            key={index}
            link={ad.link}
            className="snap-start rounded-md relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0 bg-white shadow-md overflow-hidden w-[5rem] h-[8rem] "
          >
            <img
              loading="lazy"
              src={ad.adImg}
              alt={ad.title}
              className="h-full rounded-lg w-full object-contain"
            />
          </LinkBtn>
        ))}
      </div>
      {/* Carousels Controllers */}
      <div className="flex items-center justify-center gap-1">
        <div className="h-2 w-5 bg-red-500 rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
        <div className="h-2 w-2 border-red-500 border rounded-full"></div>
      </div>
    </div>
  );
};

export default CarouselCards;
