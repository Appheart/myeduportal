import { useEffect, useState } from 'react';
import { CarouselCards } from '../../components';
import News from '../../components/News';
import { getAllNews } from '../../app/api/newsApi';

const Dashboard = () => {
  const [newsData, setNewsData] = useState([]);
  const [page, setPage] = useState(1);

  const fetchNewsData = () => {
    getAllNews(page).then((result) => setNewsData(result));
  };

  useEffect(() => {
    fetchNewsData(), [page];
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
    </main>
  );
};
export default Dashboard;
