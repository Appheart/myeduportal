import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import LinkBtn from '../../components/Link';

const toExplore = [
  {
    name: 'Management',
    options: [
      {
        name: 'Tasks tracker',
        link: '/tasks-tracker',
        illustration: '/images/illustrations/task.png',
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
        name: 'My Timetable',
        link: '/explore/timetable',
        illustration: '/images/illustrations/timetable.png',
      },
    ],
  },

  {
    name: 'Jobs',
    options: [
      {
        name: 'Job Application',
        link: '/registrations',
        illustration: '/images/illustrations/registration.png',
      },
      {
        name: 'Scholarships',
        link: '/registrations',
        illustration: '/images/illustrations/registration.png',
      },
    ],
  },
  {
    name: 'Scholarships',
    options: [
      {
        name: 'Job Application',
        link: '/registrations',
        illustration: '/images/illustrations/registration.png',
      },
      {
        name: 'Scholarships',
        link: '/registrations',
        illustration: '/images/illustrations/registration.png',
      },
    ],
  },

  {
    name: 'Education',
    options: [
      {
        name: 'NECO',
      },
      {
        name: 'WAEC',
      },
      {
        name: 'JUPEB',
      },
      {
        name: 'JAMB',
        link: '/jamb',
      },
      {
        name: 'NABTEB',
      },
    ],
  },
];

const Explore = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto">
        <div className="flex flex-col gap-2">
          {toExplore
            .sort((a, b) => (a.name > b.name ? 1 : a.name < b.name ? -1 : 0))
            .map((n, index) => (
              <div className="flex flex-col gap-1">
                <h3 className="py-1 mb-1 text-green-700 text-sm font-bold border-b-2 border-orange-500">
                  {n.name}
                </h3>
                <div
                  key={index}
                  className="explore-cards flex-wrap flex py-3 md:px-3 gap-2 md:gap-5 md:bg-white md:shadow-md"
                >
                  {n.options
                    .sort((c, d) =>
                      c.name > d.name ? 1 : c.name < d.name ? -1 : 0
                    )
                    .map((e, index) => (
                      <LinkBtn
                        key={index}
                        link={e.link}
                        className="explore-card border-b-2 border-blue-600 bg-white py-3 px-3 rounded-md shadow-md flex flex-col h-36 w-32 flex-grow gap-4 hover:cursor-pointer hover:bg-blue-600 hover:text-white text-gray-800"
                      >
                        <div className="icon">
                          <div className="icon h-6 w-6 overflow-hidden">
                            <img
                              src={e.illustration}
                              alt={`Edupora ${e.name}`}
                              loading="eager"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                        <p className="text-sm">{e.name}</p>
                      </LinkBtn>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </section>
    </main>
  );
};

export default Explore;
