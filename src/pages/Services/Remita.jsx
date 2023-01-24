import React from 'react';
import { LinkBtn } from '../../components';

const Remita = () => {
  return (
    <main>
      <section>
        <div className=" h-[23vh] md:h-[30vh] w-full p-4 shadow-sm">
          <div className="drawn-bg bg-[url('https://appheart.pages.dev/images/remita_orange_new_logo.svg')] h-full w-full bg-center bg-contain bg-no-repeat"></div>
        </div>

        <div className=" mt-10 max-w-lg mx-auto flex flex-col gap-5 py-5 border-b-2 bg-yellow-100 rounded-lg shadow-lg w-[94%]">
          {/* Remita Services */}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full p-3">
            <div className="p-4 bg-white shadow-md rounded-md">Pay Remita</div>{' '}
            <LinkBtn
              link={
                'https://appheart.pages.dev/solutions/RetrieveRemitaReceipt/'
              }
            >
              <div className="p-4 bg-white shadow-md rounded-md">
                Retrieve RRR Receipt
              </div>
            </LinkBtn>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Remita;
