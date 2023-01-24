import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { CarouselCards, LinkBtn } from '../../components';
import { servicesData } from '../../data';
import { api } from '../../app/api';
import News from '../../components/News';

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

        <News newsData={newsData} />
      </section>

      <section className="section bg-gray-50 p-3 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Services</h3>

        {/* Services */}
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

      <div className="flex flex-col md:flex-row gap-3 md:gap-4 ">
        {/* Announcement */}
        <section className="section bg-yellow-50 p-3 rounded-lg w-full md:w-[50%]">
          <h3 className="text-lg font-bold text-yellow-600 pb-2 ">
            Announcements
          </h3>

          <div className="flex flex-col gap-3 ">
            {/* Carousels */}
            <div className=" snap-mandatory snap-x scrollbar-none scroll-smooth flex pb-4 px-4 gap-5 w-full flex-nowrap overflow-x-auto h-[8rem]">
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-yellow-700 text-gray-100 h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Matriculation is now holding on the 18th of February this
                year, 2023
              </p>
              <p className="snap-start relative justify-center items-center gap-4 text-sm flex flex-col flex-shrink-0  rounded-lg bg-yellow-700 text-gray-100 h-full w-full font-bold font-serif p-3 text-center  leading-normal ">
                🎉 UNN Convocation is scheduled to hold in March 21st, 2023
              </p>
            </div>
          </div>
        </section>

        {/* Todos */}
        <section className="mb-3  w-full md:w-[50%]">
          <h3 className="text-lg font-bold text-yellow-600 pb-2 ">Todos</h3>
          <div className="grid md:flex grid-cols-2 gap-4">
            <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
              <h3 className="text-lg md:text-md">Tuition Fees</h3>
            </div>
            <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
              <h3 className="text-lg md:text-md">Course Reg</h3>
            </div>
            <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
              <h3 className="text-lg md:text-md">Course Materials</h3>
            </div>
            <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
              <h3 className="text-lg md:text-md">Time-table</h3>
            </div>
          </div>
        </section>
      </div>

      {/* Subscribed Apps */}
      <section className="mb-3  w-full md:w-[50%]">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">
          Subscribed Apps
        </h3>
        <div className="grid md:flex grid-cols-2 gap-4">
          <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
            <h3 className="text-lg md:text-md">CampusCTZN</h3>
            <LinkBtn link={'https://campus.ctzn.ng'}>Access</LinkBtn>
          </div>
          <div className="h-[150px] md:w-[150px] flex py-3  flex-col gap-3 bg-gradient-to-r from-purple-500 to-pink-500 px-5 text-white shadow-sm rounded-lg">
            <h3 className="text-lg md:text-md">KMO Telecoms</h3>
            <LinkBtn link={'https://kmo.ng/telecoms'}>Access</LinkBtn>
          </div>
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
