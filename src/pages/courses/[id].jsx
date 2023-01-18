import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../../data';

const RandomCourse = () => {
  let { courseId } = useParams();

  const course = coursesData.find((c) => c.short == courseId);
  return (
    <main>
      <section>
        {course ? <h3>Course Id</h3> : `No record found for ${courseId}`}
      </section>
    </main>
  );
};

export default RandomCourse;
