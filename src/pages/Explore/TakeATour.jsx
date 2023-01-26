import React from 'react';

const TakeATour = () => {
  return (
    <main>
      <section className="max-w-3xl mx-auto">
        <div className="section-title p-3 shadow-md text-xl text-center text-green-700 mb-5 rounded-md">
          Take a Tour
        </div>
        <div className="explore-cards flex flex-wrap gap-3 py-3 px-3 bg-white shadow-md">
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Lecture Halls</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Sport Centers</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Faculty Buildings</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Administrative Offices</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Banks</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Restuarants</h3>
            </div>
          </div>
          <div className="tour-card px-5 py-3 bg-blue-700 text-white rounded-md">
            <div className="tour-image">
              <h3>Eateries</h3>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default TakeATour;
