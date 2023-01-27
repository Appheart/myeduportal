import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faPenAlt, faTableCells } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../components';

const TimeTable = () => {
  const weekDays = [
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday',
    'Sunday',
  ];
  const d = new Date();
  const dd = new Date().toLocaleDateString('en-us', {
    weekday: 'long',
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
  let today = weekDays[d.getDay() - 1];

  const active = (day) => {
    if (day === today)
      return 'bg-yellow-200 hover:bg-yellow-600 text-gray-600 hover:text-gray-100 ';
    else return 'bg-white hover:bg-slate-600 text-gray-600 hover:text-gray-100';
  };

  return (
    <main>
      <section>
        {/* Time table */}
        <fieldset className="fieldset flex flex-col gap-3 relative bg-yellow-50 ">
          <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
            <LinkBtn
              link={'/'}
              className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
            >
              <FontAwesomeIcon icon={faPenAlt} />
            </LinkBtn>
          </div>
          <h3 className="font-bold text-green-800 flex items-center gap-3">
            <div className="icon">
              <FontAwesomeIcon icon={faCalendarDays} />
            </div>
            <p>My Timetable</p>
          </h3>
          <div className="w-full mx-auto space-y-5">
            {weekDays.map((day, index) => (
              <details className="rounded-lg shadow-sm" key={index}>
                <summary
                  className={`text-sm py-2   px-3 font-bold rounded-tl-md rounded-tr-md cursor-pointer flex justify-between items-center ${active(
                    day
                  )}`}
                >
                  {day == today ? (
                    <>
                      {dd}
                      <span className="text-xs bg-orange-500 py-0.5 px-1 rounded-md text-white">
                        <FontAwesomeIcon icon={faTableCells} />
                      </span>
                    </>
                  ) : (
                    day
                  )}
                </summary>
                <div className=" px-3 py-2 pt-5 bg-white">
                  <p className="text-sm leading-normal">None yet</p>
                </div>
              </details>
            ))}
          </div>
        </fieldset>
      </section>
    </main>
  );
};

export default TimeTable;
