import React from 'react';
import { LinkBtn } from '../../../components';

const WAECPage = () => {
  return (
    <main>
      <div className="max-w-5xl m-auto flex flex-col gap-3">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          WAEC
        </div>
        <section>
          <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
            <li className="">
              <LinkBtn
                link="https://www.waecdirect.org/"
                className={'text-sm text-gray-800 underline'}
              >
                Result Cheker
              </LinkBtn>
            </li>
            <li className="">
              <LinkBtn
                link="https://github.com/Appheart/myeduportal/raw/main/public/uploads/Download-WAEC-TIMETABLE-2023-EDUPORA.pdf"
                className={'text-sm text-gray-800 underline'}
              >
                Download 2023 Examination Timetable
              </LinkBtn>
            </li>
          </ul>
        </section>
      </div>
    </main>
  );
};

export default WAECPage;
