import React from 'react';
import { LinkBtn } from '../../../../components';

const JupebPage = () => {
  return (
    <main>
      <section>
        <div>
          <div className="max-w-5xl m-auto flex flex-col gap-3">
            <div className="section-title p-3 shadow-md text-lg text-center text-green-700 mb-5 rounded-md flex justify-center gap-4">
              <div className="img h-8 w-8 overflow-hidden">
                <img
                  src="https://th.bing.com/th/id/R.a4ac95ad66dd2da7047ea9a3638f2f10?rik=V%2bQ8dfoXvbU93A&pid=ImgRaw&r=0"
                  alt="UNN_LOGO_EDUPORA"
                  className="object-contain h-full w-full"
                />
              </div>
              <div className="flex flex-col">
                University of Nigeria
                <h3 className="font-bold">School Fees</h3>
              </div>
            </div>
            <section className="w-full mx-auto space-y-5">
              {/*  */}
              <details className="rounded-lg shadow-sm px-3 py-2">
                <summary className="py-1 text-green-500 font-bold cursor-pointer">
                  Generate Invoice
                </summary>
                <div className="mt-3 flex flex-col gap-3 text-sm pl-4">
                  <p>
                    Login to the UNN Portal with your username and password,{' '}
                    <a href="https://unnportal.unn.edu.ng"> click here</a>
                  </p>

                  <p>
                    If you understand these steps, you can now go ahead to
                    generate your invoice.
                  </p>

                  <p>
                    Don't worry this page will be left open for you, as it will
                    generate a new tab to continue.
                  </p>

                  <LinkBtn
                    className={
                      'bg-transparent my-3 border-green-500 border py-1 px-3 justify-center items-center flex font-bold rounded-xl text-green-700 max-w-max mx-auto'
                    }
                    link="https://unnportal.unn.edu.ng/"
                  >
                    Click to continue
                  </LinkBtn>
                </div>
              </details>

              {/*  */}
              <details className="rounded-lg shadow-sm px-3 py-2">
                <summary className="py-1 text-green-500 font-bold cursor-pointer">
                  Make Remita Payment
                </summary>
                <div className="mt-3 flex flex-col gap-3 text-sm pl-4">
                  <p>
                    You have generated your Remita invoice for your <b>JUPEB</b>
                    &nbsp; application for <b>2022/2023</b>.&nbsp;
                    Congratulaitons!
                  </p>
                  <p>Next is to go with making the payment.</p>
                  <p>
                    You can do so either at the&nbsp;
                    <LinkBtn
                      link="https://appheartunn.substack.com/p/how-to-make-a-remita-payment-updated"
                      className={'inline'}
                    >
                      bank
                    </LinkBtn>{' '}
                    , or through an{' '}
                    <LinkBtn
                      link="https://appheartunn.substack.com/p/how-to-make-a-remita-payment-updated"
                      className={'inline'}
                    >
                      accredited cybercafe
                    </LinkBtn>{' '}
                    on campus, or by{' '}
                    <LinkBtn
                      link="https://appheartunn.substack.com/p/how-to-make-a-remita-payment-updated"
                      className={'inline'}
                    >
                      yourself.
                    </LinkBtn>{' '}
                  </p>
                </div>
              </details>

              {/*  */}
              <details className="rounded-lg shadow-sm px-3 py-2">
                <summary className="py-1 text-green-500 font-bold cursor-pointer">
                  Print Reciept
                </summary>
                <div className="mt-3 text-sm flex flex-col gap-3 pl-4">
                  <p>
                    You have Generate your invoice, and made payment.
                    Congratulations!
                  </p>

                  <p>
                    Finally, go ahead in fillin your appication form for the
                    JUPEB programme.
                  </p>

                  <p>
                    You will start by filling in the RRR Number, that has been
                    paid for, into the required box.
                  </p>
                  <p>
                    Continue in filling your valid information, and then the
                    &nbsp;
                    <b className="px-2  bg-green-700 text-white">Submit</b>{' '}
                    button
                  </p>
                  <LinkBtn
                    className={
                      'bg-transparent my-3 border-green-500 border py-1 px-3 justify-center items-center flex font-bold rounded-xl text-green-700 max-w-max mx-auto'
                    }
                    link="https://unnportal.unn.edu.ng/Modules/Applications/JUPEB/JUPEBLogin.aspx"
                  >
                    Fill application form
                  </LinkBtn>
                </div>
              </details>
            </section>
          </div>
        </div>
      </section>
    </main>
  );
};

export default JupebPage;
