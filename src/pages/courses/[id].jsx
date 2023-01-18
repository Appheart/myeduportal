import React from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../../data';

const RandomCourse = () => {
  let { courseId } = useParams();

  const course = coursesData.find((c) => c.short == courseId);
  return (
    <main className="max-w-5xl m-auto flex flex-col gap-3 pt-5">
      <section className="">
        {course ? (
          <h3 className="text-lg font-bold">
            {course.name}: <span className="font-normal">{course.title}</span>
          </h3>
        ) : (
          `No record found for ${courseId}`
        )}
      </section>

      <section>
        <h3 className="text-xl py-1 text-yellow-500 font-bold">Topics</h3>

        <p className="text-sm leading-normal">
          {course.topics.map((topic) => topic).join(', ')}
        </p>
      </section>

      <section>
        <h3 className="text-xl py-1 text-yellow-500 font-bold">Lecturers</h3>

        <p className="text-sm leading-normal">None Assigned yet</p>
      </section>

      <section>
        <h3 className="text-xl py-1 text-yellow-500 font-bold">
          Lecture Materials
        </h3>

        <p className="text-sm">None yet</p>
      </section>
    </main>
  );
};

export default RandomCourse;
