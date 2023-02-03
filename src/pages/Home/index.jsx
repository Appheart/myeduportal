import useSWR from 'swr';
import { useState } from 'react';
import { CarouselCards } from '../../components';
import News from '../../components/News';
import { getAllNews, newsUrlEndPoint as cacheKey } from '../../app/api/newsApi';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const {
    status,
    error,
    data: newsData,
    fetchStatus,
  } = useQuery({
    queryKey: ['newsData', [page]],
    keepPreviousData: true,
    queryFn: () => getAllNews(page),
  });

  // const {
  //   isLoading,
  //   error,
  //   data: newsData,
  //   mutate,
  // } = useSWR(cacheKey, getAllNews(page), {});

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  return (
    <main className="bg-gray-50">
      <div className="flex flex-col md:flex-row md:gap-3 items-start">
        <section className="mb-3 w-full">
          <CarouselCards />
        </section>
      </div>

      <section className="section  rounded-lg">
        <div className="newsTags  scrollbar-none scroll-smooth sticky top-[3.98rem] z-50 px-5  py-2 bg-green-100 flex gap-3 mb-4 overflow-x-auto -mx-3 md:-mx-[2%]">
          <small className="text-xs py-1 px-3 border rounded-xl bg-yellow-200 border-yellow-200 font-bold">
            All
          </small>
          <small className="text-xs py-1 px-3 border rounded-xl font-bold bg-white">
            Technology
          </small>
          <small className="text-xs py-1 px-3 border rounded-xl font-bold bg-white">
            Business
          </small>
          <small className="text-xs py-1 px-3 border rounded-xl font-bold bg-white">
            Finance
          </small>
          <small className="text-xs py-1 px-3 border rounded-xl font-bold bg-white">
            Education
          </small>
        </div>

        {newsData && (
          <News
            status={status}
            error={error}
            newsData={newsData}
            prevPage={prevPage}
            nextPage={nextPage}
            page={page}
          />
        )}
      </section>
    </main>
  );
};
export default Dashboard;
