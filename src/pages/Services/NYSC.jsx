import React from 'react';
import { LinkBtn } from '../../components';
import { servicesData } from '../../data';

const NYSC = () => {
  const service = servicesData.find(
    (service) => service.name.toLowerCase() == 'nysc'
  );

  return (
    <section className="section p-2">
      <h3>NYSC Services</h3>

      <div className="grid grid-col-2 lg:grid-cols-3">
        {service?.services.map((item) => (
          <LinkBtn className="flex" link={item.link}>
            {item.name}
          </LinkBtn>
        ))}
      </div>
    </section>
  );
};

export default NYSC;
