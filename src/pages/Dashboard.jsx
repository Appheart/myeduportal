import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { CarouselCards } from '../components';
import { servicesData } from '../data';
import newsData from '../data/news';

const Dashboard = () => {
  return (
    <main>
      <section className="mt-2 mb-3">
        <CarouselCards />
      </section>

      <section className="section p-3 rounded-lg">
        <h3 className="text-lg font-bold text-yellow-600 pb-2 ">
          Latest Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((item) => (
            <a
              target={'_blank'}
              href={item.link}
              className="flex bg-white shadow-sm update flex-col border  p-3 rounded gap-1 text-gray-700"
            >
              <small className="text-green-800">
                <span className="font-bold">Monday</span>, January 4 2022
              </small>

              <div className="flex items-center justify-between gap-2">
                <p className="font-bold">{item.title}</p>

                <div className="img-container">
                  <img src={item.imgSrc} alt="" height={80} width={80} />
                </div>
              </div>

              <small className="text-red-800">{item.source}</small>
            </a>
          ))}
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
          {servicesData.map((item) => (
            <Link
              to={item.link}
              className="flex update flex-col items-center  justify-between text-center border  p-3 rounded gap-1 text-gray-700"
            >
              <div className=" h-[3rem] w-[3rem] overflow-hidden">
                <img
                  src={item.img}
                  alt=""
                  height={40}
                  width={40}
                  className="h-full w-full object-cover"
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
