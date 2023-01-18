import React, { useEffect, useState } from 'react';
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
          <a
            className="flex"
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            {item.name}
          </a>
        ))}
      </div>
    </section>
  );
};

export default NYSC;
