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
      <section className="section max-w-3xl mx-auto ">
        <div className="breadcrumb bg-gray-100 p-3 flex justify-center gap-5 items-center h-20 mb-5">
          <LinkBtn link={'/'}>
            <FontAwesomeIcon
              icon={faArrowLeft}
              className="justify-self-start text-xl"
            />
          </LinkBtn>
          <div className="mx-auto text-green-500 font-bold flex gap-2 items-center ">
            <div className="h-5 w-5 flex items-center justify-center rounded-full overflow-hidden">
              <img
                src="https://www.nysccbo.org.ng/nyscbo/public/web/resources/images/nysclogo.png"
                alt=""
                className="h-full w-full object-cover"
              />
            </div>

            <span>NYSC Related Services</span>
          </div>
        </div>
        <div className="grid grid-cols-1 gap-5 py-5 bg-white shadow-md px-5">
          {service?.services.map((item) => (
            <LinkBtn
              className="flex bg-white  text-gray-800 shadow-md p-3 justify-between gap-5 rounded-lg"
              link={item.link}
            >
              <div className="flex flex-col gap-3 pb-2">
                <h3 className="font-bold text-sm text-green-800">
                  {item.name}
                </h3>
                <p className="text-xs h-[3.7rem] text-gray-700 leading-normal overflow-hidden text-ellipsis ">
                  {item.desc}
                </p>
              </div>
              <FontAwesomeIcon icon={faArrowRight} />
            </LinkBtn>
          ))}
        </div>
      </section>
    </main>
  );
};

export default NYSC;
