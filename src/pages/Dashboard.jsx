import { useEffect, useState } from 'react';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CarouselCards, LinkBtn } from '../components';
import { servicesData } from '../data';
import { api } from '../app/api';

const Dashboard = () => {
  const [newsData, setNewsData] = useState([]);

  const fetchNewsData = () =>
    api.get(`/news`).then((response) => {
      setNewsData(response.data);
    });

  useEffect(() => {
    fetchNewsData(), [];
  });

  return (
    <main>
      <section className="mt-2 mb-3">
        <CarouselCards />
      </section>

      <section className="section  rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 pl-3">
          Latest Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.length > 0 ? (
            newsData
              .sort(function (a, b) {
                if (a.date > b.date) {
                  return -1;
                }

                if (a.date < b.date) {
                  return 1;
                }

                return 0;
              })
              .map((item, index) => (
                <div
                  key={index}
                  className={
                    'flex bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700'
                  }
                >
                  <small className="text-green-800 font-bold">
                    {item.publishedOn}
                  </small>

                  <div className="flex items-center justify-between gap-2">
                    <p className="">{item.title}</p>

                    <div className="img-container">
                      <img
                        src={item.illustration}
                        alt=""
                        height={80}
                        width={80}
                      />
                    </div>
                  </div>

                  <LinkBtn
                    link={item.link}
                    className="text-red-800 text-xs font-bold"
                  >
                    Read more
                  </LinkBtn>
                </div>
              ))
          ) : (
            <div
              className={
                'flex py-7 text-center bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700'
              }
            >
              <p className="text-sm text-gray-900">Reload to get News</p>
            </div>
          )}
        </div>

        <div className="mt-5 flex justify-center items-center gap-4">
          <FontAwesomeIcon icon={faArrowLeft} />
          <Link
            to={'/'}
            className=" text-sm flex  justify-center text-center text-red-400 font-bold underline"
          >
            1
          </Link>
          <FontAwesomeIcon icon={faArrowRight} />
        </div>
      </section>

      {/* Services */}
      <section className="section bg-gray-50 p-3 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Services</h3>

        <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4">
          {servicesData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex update flex-col items-center bg-white justify-between text-center border  p-3 rounded-md gap-1 text-gray-700"
            >
              <div className=" h-[3rem] w-[3rem] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  height={40}
                  width={40}
                  className="h-full w-full object-contain"
                />
              </div>

              <small className="text-red-800">{item.name}</small>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
