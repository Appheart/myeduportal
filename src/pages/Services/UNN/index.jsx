import React from 'react';
import { LinkBtn } from '../../../components';

const UNNPage = () => {
  return (
    <main>
      <div className="max-w-5xl m-auto flex flex-col gap-3">
        <div className="section-title p-3 shadow-md text-lg text-center text-green-700 mb-5 rounded-md flex justify-center gap-4">
          <div className="img h-8 w-8 overflow-hidden">
            <img
              src="https://th.bing.com/th/id/R.a4ac95ad66dd2da7047ea9a3638f2f10?rik=V%2bQ8dfoXvbU93A&pid=ImgRaw&r=0"
              alt="UNN_LOGO_EDUPORA"
              className="object-contain h-full w-full"
            />
          </div>
          University of Nigeria
        </div>
        <section className="w-full mx-auto space-y-5">
          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="py-1 text-green-500 font-bold cursor-pointer">
              Quick Help
            </summary>
            <div className="mt-3">
              <ul className="flex flex-col gap-2 md:grid grid-cols-2 p-3 list-inside list-disc">
                <li className="">
                  <LinkBtn
                    link="https://unnportal.unn.edu.ng/StudentVerification.aspx"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Check admission status
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Recover Password
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Get Wifi Credentials
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Clearance processing
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Multiple admission given
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Retrieve Remita Invoice / Receipt
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Admission List
                  </LinkBtn>
                </li>
              </ul>
            </div>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="py-1 text-green-500 font-bold cursor-pointer">
              Applications
            </summary>
            <div className="mt-3">
              <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Shopping Form
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Staff Quota application
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    PUTME Appication
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    DE Application
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    PG Application
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="/unn/jupeb"
                    className={'text-sm text-gray-800 underline'}
                  >
                    JUPEB Application
                  </LinkBtn>
                </li>
              </ul>
            </div>
          </details>

          {/*  */}
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="py-1 text-green-500 font-bold cursor-pointer">
              iTranscript
            </summary>
            <div className="mt-3">
              <ul className="flex flex-col gap-2 p-3 list-inside list-disc">
                <li className="">
                  <LinkBtn
                    link="https://www.waecdirect.org/"
                    className={'text-sm text-gray-800 underline'}
                  >
                    Apply for UNN Transcript
                  </LinkBtn>
                </li>
                <li className="">
                  <LinkBtn
                    link="https://www.waecnigeria.org/faq#:~:text=School%20candidates%20collect%20their%20certificates,obtain%20theirs%20directly%20from%20WAEC."
                    className={'text-sm text-gray-800 underline'}
                  >
                    Verify Transcript
                  </LinkBtn>
                </li>
              </ul>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
};

export default UNNPage;
