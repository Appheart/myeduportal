import { faBraille } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LinkBtn from '../../components/Link';

const Explore = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          Explore on EDUPORA
        </div>
        <div className="explore-cards grid gap-3 py-3 px-3 bg-white shadow-md">
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon">
              <FontAwesomeIcon icon={faBraille} />
            </div>
            Task tracker
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            Study Time Manager
          </div>
          <LinkBtn
            link={'/take-a-tour'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <FontAwesomeIcon icon={faBraille} />
            Take a Tour
          </LinkBtn>
          <LinkBtn
            link={'/explore/notes'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <FontAwesomeIcon icon={faBraille} />
            My Notes
          </LinkBtn>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            Lecture Materials
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            cGPA Tracker
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            Finance Tracker
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            rFudict
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            Social Events
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            Merch
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <FontAwesomeIcon icon={faBraille} />
            My Timetable
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
