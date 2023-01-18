import React from 'react';
import { LinkBtn } from '../components';

const Error404 = () => {
  return (
    <main>
      <section className="flex flex-col gap-3 w-full h-full items-center justify-center text-center">
        <h1>404!</h1>
        <p>Oops! Page not found</p>
        <LinkBtn link={'/'}>Back to Home</LinkBtn>
      </section>
    </main>
  );
};

export default Error404;
