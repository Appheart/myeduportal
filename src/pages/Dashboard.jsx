import { Link } from "react-router-dom";
import newsData from "../data/news";

const Dashboard = () => {
  return (
    <main>
      <section className="section">
        <fieldset>
          <div className="cards grid grid-cols-2 py-5 gap-4 ">
            <div className="card p-4 bg-blue-100  rounded-lg">
              <Link to={"/courses"} className="flex justify-center w-full">
                Courses
              </Link>
            </div>
            <div className="ca rd p-4 bg-blue-300 flex justify-center w-full rounded-lg">
              <Link to={"/payments"} className="flex justify-center w-full">
                Payments
              </Link>
            </div>
            <div className="card p-4 bg-blue-300 flex justify-center w-full  rounded-lg">
              <Link to={"/timetable"} className="flex justify-center w-full">
                Timetable
              </Link>
            </div>
            <div className="card p-4 bg-blue-100 flex justify-center w-full rounded-lg">
              <Link to={"/examinations"} className="flex justify-center w-full">
                Examination
              </Link>
            </div>
          </div>
        </fieldset>
      </section>

      <section className="section">
        <h3 className="section__title">Latest Information</h3>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsData.map((item) => (
            <a
              target={"_blank"}
              href={item.link}
              className="flex update border p-3 rounded gap-4"
            >
              <div className="">
                <h3>{item.title}</h3>
              </div>
              <div className="img-container">
                <img src="/images/img-1.jpg" alt="" height={60} width={60} />
              </div>
            </a>
          ))}
        </div>
      </section>
    </main>
  );
};
export default Dashboard;
