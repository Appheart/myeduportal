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
              <div className="icon h-6 w-6 overflow-hidden">
                <img
                  src="/images/illustrations/task.png"
                  alt=""
                  className="h-full w-full object-contain"
                />
              </div>
            </div>
            Tasks tracker
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/registration.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Application and Registrations
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/study.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Study Time Manager
          </div>
          <LinkBtn
            link={'/take-a-tour'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/tour.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Take a Tour
          </LinkBtn>
          <LinkBtn
            link={'/explore/notes'}
            className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white "
          >
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/note.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            My Notes
          </LinkBtn>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/lecture.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Lecture Materials
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/gpa.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            cGPA Manager
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/stats.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Finance Tracker
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/diet.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            rFudict
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/party.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Social Events
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/market.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            Market Merch
          </div>
          <div className="explore-card border-2 border-blue-700 p-3 px-5 rounded-md flex items-center gap-3 hover:cursor-pointer hover:bg-blue-600 hover:text-white ">
            <div className="icon h-6 w-6 overflow-hidden">
              <img
                src="/images/illustrations/timetable.png"
                alt=""
                className="h-full w-full object-contain"
              />
            </div>
            My Timetable
          </div>
        </div>
      </section>
    </main>
  );
};

export default Explore;
