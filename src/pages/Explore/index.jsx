import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LinkBtn from '../../components/Link';

const toExplore = [
  {
    name: 'management',
    options: [
      {
        name: 'Tasks tracker',
        link: '/tasks-tracker',
        illustration: '/images/illustrations/task.png',
      },
      {
        name: 'Online Services',
        link: '/registrations',
        illustration: '/images/illustrations/registration.png',
      },
      {
        name: 'My Study Manager',
        link: '/explore',
        illustration: '/images/illustrations/study.png',
      },
      {
        name: 'Take a Tour',
        link: '/take-a-tour',
        illustration: '/images/illustrations/tour.png',
      },
      {
        name: 'Notes',
        link: '/explore/notes',
        illustration: '/images/illustrations/note.png',
      },
      {
        name: 'Lecture Materials',
        link: '/lecture-materials',
        illustration: '/images/illustrations/lecture.png',
      },
      {
        name: 'cGPA',
        link: '/explore/cgpa',
        illustration: '/images/illustrations/gpa.png',
      },
      {
        name: 'My Finance',
        link: '/explore',
        illustration: '/images/illustrations/stats.png',
      },
      {
        name: 'rFudict',
        link: '/explore',
        illustration: '/images/illustrations/diet.png',
      },
      {
        name: 'Social Events',
        link: '/events',
        illustration: '/images/illustrations/party.png',
      },
      {
        name: 'Online Shopping',
        link: '/explore',
        illustration: '/images/illustrations/market.png',
      },
      {
        name: 'My Timetable',
        link: '/explore/timetable',
        illustration: '/images/illustrations/timetable.png',
      },
    ],
  },

  {
    name: 'online registration',
    options: [{}],
  },

  {
    name: 'educational bodies',
    options: [
      {
        name: 'NECO',
      },
      {
        name: 'WAEC',
      },
      {
        name: 'JAMB',
      },
    ],
  },
];

const Explore = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto">
        <div className="explore-cards flex-wrap flex py-3 md:px-3 gap-2 md:gap-5 md:bg-white md:shadow-md">
          {toExplore.map((ex, index) => (
            <LinkBtn
              key={index}
              link={ex.link}
              className="explore-card border-b-2 border-blue-600 bg-white py-3 px-3 rounded-md shadow-md flex flex-col h-40 w-34 flex-grow gap-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800"
            >
              <div className="icon">
                <div className="icon h-6 w-6 overflow-hidden">
                  <img
                    src={ex.illustration}
                    alt={`Edupora ${ex.name}`}
                    loading="eager"
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
              <p className="text-sm">{ex.name}</p>
            </LinkBtn>
          ))}
        </div>
      </section>
    </main>
  );
};

export default Explore;
