import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselCards } from '../../components';
import { servicesData } from '../../data';
import News from '../../components/News';
import { getAllNews } from '../../app/api/newsApi';

const Dashboard = () => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNewsData = () => {
    getAllNews().then((result) => setNewsData(result));
  };

  useEffect(() => {
    fetchNewsData(), [];
  });

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <main>
      <div className="flex flex-col md:flex-row md:gap-3 items-start">
        <section className="bg-yellow-100 p-5 shadow-md mb-5 mt-3 rounded-md flex flex-col gap-1 flex-shrink-0 w-full md:w-[50%] max-h-min">
          <div className="flex justify-between gap-2 items-center">
            <p className="text-gray-800">
              Welcome back, <span className=" font-semibold">User</span>
            </p>
            <img src="/images/gif/waving-hi.gif" alt="" className="h-10 w-10" />
          </div>
        </section>

        <section className="mb-3  w-full md:w-[50%]">
          <CarouselCards />
        </section>
      </div>

      <section className="section  rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 pl-3">
          Latest Information
        </h3>

        <News
          newsData={newsData}
          prevPage={prevPage}
          nextPage={nextPage}
          page={page}
        />
      </section>

      {/* Services */}
      <section className="section bg-gray-50 p-3 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Services</h3>

        <div className="flex flex-wrap gap-4">
          {servicesData.map((item, index) => (
            <Link
              key={index}
              to={item.link}
              className="flex update h-[118px] w-[118px] flex-shrink-0 flex-grow flex-col items-center bg-white justify-between text-center border  p-3 rounded-md gap-1 text-gray-700"
            >
              <div className=" h-[3rem] w-[3rem] overflow-hidden">
                <img
                  src={item.img}
                  alt={`${item.name} service`}
                  height={40}
                  width={40}
                  className="h-full w-full object-contain"
                  loading="lazy"
                />
              </div>

              <small className="text-red-800">{item.name}</small>
            </Link>
          ))}
        </div>
      </section>

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 ">
        {/* Announcement */}
        <section className="section bg-yellow-50 p-3 rounded-lg w-full md:w-[50%]">
          <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Upcomings</h3>

          <div className="flex flex-col gap-3 ">
            {/* Carousels */}
            <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 px-4 gap-5 w-full flex-nowrap overflow-x-auto h-[8rem]">
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-white text-yellow-700 shadow-md h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Matriculation is now holding on the 18th of February this
                year, 2023
              </p>
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg  bg-white text-yellow-700 shadow-md h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Convocation is scheduled to hold in March 21st, 2023
              </p>
            </div>
          </div>
        </section>

        {/* Todos */}
        <section className="mb-3 bg-gradient-to-r from-purple-500 to-pink-500 p-3 rounded-md w-full md:w-[50%]">
          <h3 className="text-lg font-bold text-yellow-100 pb-2 ">Todos</h3>
          <div className="grid md:flex grid-cols-2 gap-4 flex-wrap justify-between">
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Fees payment</h3>
            </div>
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Clearance</h3>
            </div>
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Course Registration</h3>
            </div>
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Term paper</h3>
            </div>
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Assignments</h3>
            </div>
            <div className="flex px-4 py-2 flex-shrink-0 flex-col gap-3 bg-green-100 text-gray-700 shadow-sm rounded-lg">
              <h3 className="text-md md:text-sm">Seminars</h3>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
};
export default Dashboard;
