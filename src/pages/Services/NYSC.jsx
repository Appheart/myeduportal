import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../components';
import { servicesData } from '../../data';

const NYSC = () => {
  const service = servicesData.find(
    (service) => service.name.toLowerCase() == 'nysc'
  );

  return (
    <main>
      <div className="breadcrumb bg-gray-100 -my-2 -mx-3 p-3 flex justify-center gap-5 items-center">
        <LinkBtn link={'/'}>
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="justify-self-start text-xl"
          />
        </LinkBtn>
        <span className="m-auto text-green-500 font-bold">
          NYSC Related Services
        </span>
      </div>
      <section className="section p-2">
        <div className="grid grid-col-2 lg:grid-cols-3 gap-5 py-5">
          {service?.services.map((item) => (
            <LinkBtn
              className="flex bg-white text-sm font-bold text-gray-800 shadow-md p-3 justify-between gap-5 rounded-lg"
              link={item.link}
            >
              {item.name}
              <FontAwesomeIcon icon={faArrowRight} />
            </LinkBtn>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NYSC;
