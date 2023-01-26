import { faBraille } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../../components';

const JAMB = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          JAMB
        </div>
        <div className="explore-cards grid gap-3 py-3 px-3 bg-white shadow-md">
          <LinkBtn
            link={'/'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <div className="icon">
              <FontAwesomeIcon icon={faBraille} />
            </div>
            2022 - 2023 Registration
          </LinkBtn>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
          </div>
          <LinkBtn
            link={'https://eligibility.jamb.gov.ng/checker/'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <FontAwesomeIcon icon={faBraille} />
            Eligibility Checker
          </LinkBtn>
          <LinkBtn
            link={'/explore/notes'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <FontAwesomeIcon icon={faBraille} />
            My Notes
          </LinkBtn>
        </div>
      </section>
    </main>
  );
};

export default JAMB;
