import { faBraille } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../../components';

const JAMB = () => {
  return (
    <main>
      <div className="max-w-5xl m-auto flex flex-col gap-3">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          JAMB
        </div>
        <section className="w-full mx-auto space-y-5">
          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-lg py-1 text-yellow-500 font-bold cursor-pointer">
              JAMB CAPS
            </summary>
            <div className="mt-3">
              <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
                <li className="">
                  <LinkBtn
                    link="/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    None yet
                  </LinkBtn>
                </li>
              </ul>
            </div>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-lg py-1 text-yellow-500 font-bold cursor-pointer">
              JAMB Registration 2023
            </summary>

            <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
              <li className="">
                <LinkBtn link="/" className={'text-sm text-gray-800 underline'}>
                  Get started
                </LinkBtn>
              </li>
              <li className="">
                <LinkBtn link="/" className={'text-sm text-gray-800 underline'}>
                  Registration deadline
                </LinkBtn>
              </li>
              <li>
                <LinkBtn link="/" className={'text-sm text-gray-800 underline'}>
                  Reprint Registration Slip
                </LinkBtn>
              </li>
              <li>
                <LinkBtn link="/" className={'text-sm text-gray-800 underline'}>
                  Novel: The Life Changer
                </LinkBtn>
              </li>
              <li>
                <LinkBtn
                  link="/jamb/accredited-centres"
                  className={'text-sm text-gray-800 underline'}
                >
                  Accredited Centres
                </LinkBtn>
              </li>
            </ul>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-lg py-1 text-yellow-500 font-bold cursor-pointer">
              JAMB Related Services
            </summary>
            <div className="mt-3">
              <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
                <li className="">
                  <LinkBtn
                    link="/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Admission Letter
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Result slip
                  </LinkBtn>
                </li>
                <li>
                  <LinkBtn
                    link="/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Change of course / institution
                  </LinkBtn>
                </li>
                <li>
                  <LinkBtn
                    link="/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Correction of Data
                  </LinkBtn>
                </li>
              </ul>
            </div>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-lg py-1 text-yellow-500 font-bold cursor-pointer">
              JAMB Brochure
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">h</p>
            </div>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-lg py-1 text-yellow-500 font-bold cursor-pointer">
              JAMB Syllabus
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">h</p>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
};

export default JAMB;
