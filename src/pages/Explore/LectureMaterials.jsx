import { faGraduationCap, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../components';

const LectureMaterials = () => {
  return (
    <main>
      <section>
        {/* My Courses */}
        <fieldset className="fieldset bg-gradient-to-r from-sky-100 to-indigo-200 flex flex-col gap-3 relative">
          <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
            <LinkBtn
              link={'/'}
              className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
            >
              <FontAwesomeIcon icon={faPenAlt} />
            </LinkBtn>
          </div>
          <h3 className="font-bold text-green-800 flex gap-3 items-center">
            <div className="icon">
              <FontAwesomeIcon icon={faGraduationCap} />
            </div>
            <p>My Courses</p>
          </h3>
          <div className="flex flex-wrap gap-2 text-xs  text-gray-600">
            {[
              'COS 101',
              'GSP 111',
              'GSP 101',
              'BIO 151',
              'CHM 101',
              'CHM 171',
              'PHY 191',
            ].map((c, index) => (
              <LinkBtn
                key={index}
                link={`/courses/BIO101`}
                className={'p-2 bg-yellow-50 rounded-md font-bold'}
              >
                {c}
              </LinkBtn>
            ))}
          </div>
        </fieldset>
      </section>
    </main>
  );
};

export default LectureMaterials;
