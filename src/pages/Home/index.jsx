import useSWR from 'swr';
import { useEffect, useState } from 'react';
import { CarouselCards } from '../../components';
import News from '../../components/News';
import { getAllNews, newsUrlEndPoint as cacheKey } from '../../app/api/newsApi';
import { useQuery } from '@tanstack/react-query';

const Dashboard = () => {
  const [page, setPage] = useState(1);

  const [tag, setTag] = useState('');
  const [tags, setTags] = useState(['s']);

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

  const nextPage = () => setPage((prev) => prev + 1);
  const prevPage = () => setPage((prev) => prev - 1);

  const allTags = [];

  newsData?.forEach((t) => allTags.push(...t.tags));

  const taggs = [...new Set(allTags)];

  return (
    <main className="bg-gray-50">
      <div className="flex flex-col md:flex-row md:gap-3 items-start">
        <section className="mb-3 w-full">
          <CarouselCards />
        </section>
      </div>

      <section className="section  rounded-lg">
        <div className="newsTags scrollbar-none scroll-smooth sticky top-[3.98rem] z-50 px-3 py-2 bg-green-100 flex gap-3 mb-4 overflow-x-auto">
          <small
            onClick={() => setTag(() => '')}
            className="text-xs py-1 px-3 border rounded-xl bg-yellow-200 border-yellow-200 font-bold"
          >
            All
          </small>

          {allTags &&
            taggs?.map((n, index) => (
              <small
                key={index}
                onClick={(e) => setTag(() => n)}
                className="text-xs py-1 px-3 border rounded-xl font-bold bg-white"
              >
                {n}
              </small>
            ))}
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
