import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <main>
      <section className="container mx-auto">
        <fieldset>
          <div className="cards grid grid-cols-2 py-5 gap-4 ">
            <div className="card p-4 bg-blue-100  rounded-lg">
              <Link to={'/courses'} className="flex justify-center w-full">
                Courses
              </Link>
            </div>
            <div className="ca rd p-4 bg-blue-300 flex justify-center w-full rounded-lg">
              <Link to={'/payments'} className="flex justify-center w-full">
                Payments
              </Link>
            </div>
            <div className="card p-4 bg-blue-300 flex justify-center w-full  rounded-lg">
              <Link to={'/timetable'} className="flex justify-center w-full">
                Timetable
              </Link>
            </div>
            <div className="card p-4 bg-blue-100 flex justify-center w-full rounded-lg">
              <Link to={'/examinations'} className="flex justify-center w-full">
                Examination
              </Link>
            </div>
          </div>
        </fieldset>
      </section>
    </main>
  );
};
export default Dashboard;
