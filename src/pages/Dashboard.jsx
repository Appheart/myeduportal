import { CarouselCards } from '../components';
import newsData from '../data/news';

const Dashboard = () => {
  return (
    <main>
      <section className="mt-2 mb-3">
        <CarouselCards />
      </section>

      <section className="section">
        <h3 className="text-lg font-bold text-yellow-600 pb-2">
          Latest Information
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((item) => (
            <a
              target={'_blank'}
              href={item.link}
              className="flex update flex-col border  p-3 rounded gap-1 text-gray-700"
            >
              <small className="text-green-800">
                <span className="font-bold">Monday</span>, January 4 2022
              </small>

              <div className="flex items-center">
                <p className="font-bold">{item.title}</p>

                <div className="img-container">
                  <img src="/images/img-1.jpg" alt="" height={60} width={60} />
                </div>
              </div>

              <small className="text-red-800">MySchool News</small>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
