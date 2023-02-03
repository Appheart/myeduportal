import { faCalculator, faQuestion } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { LinkBtn } from '../../components';
import GPAcalculator from '../../components/forms/GPCalculatorForm';

const cGPAManager = () => {
  return (
    <main>
      <section>
        <fieldset className="bg-gradient-to-r from-sky-100 to-indigo-200 flex flex-col gap-3 relative p-3 rounded-md">
          <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
            <LinkBtn
              link={'/'}
              className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
            >
              <FontAwesomeIcon icon={faQuestion} />
            </LinkBtn>
          </div>
          <h3 className="font-bold text-green-800 flex items-center gap-3">
            <div className="icon">
              <FontAwesomeIcon icon={faCalculator} />
            </div>
            <p>GP Calculator</p>
          </h3>

          {/* <div className="flex flex-col gap-3 border-b-2 border-cyan-700">
            <div className="flex border-b-2 border-cyan-700">
              <div className="w-[80%]"></div>
              <div className="w-[20%] font-bold">cGPA</div>
            </div>
            {sessions.map((session, index) => (
              <div className="flex font-mono pl-4" key={index}>
                <div className="w-[80%] flex items-center gap-2 ">
                  <div
                    className={`indicator h-3 w-3 rounded-full border-2  ${
                      sessionIsDone(session)
                        ? 'bg-cyan-300 border-cyan-300 cursor-not-allowed'
                        : session.isPending && session.isProgress
                        ? 'bg-red-700 border-red-700'
                        : 'opacity-30 border-cyan-700'
                    }`}
                  ></div>

                  {session.name}
                </div>
                <div className="w-[20%]">0.00</div>
              </div>
            ))}
            <div className="flex mt-3 border-t-2 border-cyan-700 py-2">
              <div className="w-[80%] font-bold pl-3">Overall cGPA</div>
              <div className="w-[20%] font-bold">0.00</div>
            </div>
          </div>  */}
          <GPAcalculator />
        </fieldset>
      </section>
    </main>
  );
};

export default cGPAManager;
