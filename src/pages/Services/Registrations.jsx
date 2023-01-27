import React from 'react';
import { Link } from 'react-router-dom';
import { LinkBtn } from '../../components';
import { servicesData } from '../../data';

const Registrations = () => {
  return (
    <main>
      {/* Services */}
      <section className="section bg-gray-50 p-3 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Services</h3>

        <div className="flex flex-wrap gap-4">
          {servicesData.map((item, index) => (
            <Link
              key={index}
              to={item?.link}
              className="flex update h-[118px] w-[118px] flex-shrink-0 flex-grow flex-col items-center bg-white justify-between text-center border  p-3 rounded-md gap-1 text-gray-700"
            >
              <div className=" h-[3rem] w-[3rem] overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.name} service`}
                  height={40}
                  width={40}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <small className="text-red-800">{item.name}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Registrations;
