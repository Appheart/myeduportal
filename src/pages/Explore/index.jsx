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
        name: 'Delon Jobs',
        link: 'https://jobs.delon.ng/',
        illustration:
          'https://jobs.delon.ng/wp-content/uploads/2018/09/Delon_Jobs.jpg',
      },
      {
        name: 'Glassdoor',
        link: 'https://www.glassdoor.com/Job',
        illustration:
          'https://www.glassdoor.com/about-us//app/uploads/sites/2/2018/06/Group-7.png',
      },
      {
        name: 'Jobberman',
        link: 'https://www.jobberman.com/jobs',
        illustration:
          'https://www.jobberman.com/static-assets/img/ng/landscape.svg',
      },
      {
        name: 'Indeed',
        link: 'https://ng.indeed.com/',
        illustration: '/images/illustrations/indeed-logo.svg',
      },
      {
        name: 'TotalJobs',
        link: 'https://www.totaljobs.com/browse-jobs',
        illustration: '/images/illustrations/TotalJobs.svg',
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
        illustration: '/images/illustrations/NECO-logo.jpg',
      },
      {
        name: 'WAEC',
        link: '/waec',
        illustration: '/images/illustrations/WAEC-logo.jpg',
      },
      {
        name: 'JUPEB',
        link: '/unn/jupeb',
        illustration: '/images/illustrations/JUPEB-Logo.png',
      },
      {
        name: 'JAMB',
        link: '/jamb',
        illustration: '/images/illustrations/jamb-logo.jpg',
      },
      {
        name: 'UNN',
        link: '/unn',
        illustration:
          'https://th.bing.com/th/id/R.a4ac95ad66dd2da7047ea9a3638f2f10?rik=V%2bQ8dfoXvbU93A&pid=ImgRaw&r=0',
      },
      {
        name: 'IJMB',
        link: 'https://ijmbenigeria.com/',
        illustration:
          'https://i0.wp.com/ijmbenigeria.com/wp-content/uploads/2021/03/IJMBE-Nigeria-Logo.png?w=300&ssl=1',
      },
      {
        name: 'NABTEB',
        illustration: '/images/illustrations/NABTEB-logo.png',
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
                <h3 className="py-1 mb-1 text-orange-500 font-bold border-b-2 ">
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
                        className="explore-card items-center text-center bg-white py-3 px-3 rounded-md shadow-md flex flex-col h-36 w-36 flex-grow gap-4 hover:cursor-pointer hover:bg-blue-200 flex-shrink-0 hover:text-white text-gray-800"
                      >
                        <div className="icon">
                          <div className="icon h-10 w-10 overflow-hidden">
                            <img
                              src={e.illustration}
                              alt={`Edupora ${e.name}`}
                              loading="eager"
                              className="h-full w-full object-contain"
                            />
                          </div>
                        </div>
                        <p className="text-yellow-700">{e.name}</p>
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
