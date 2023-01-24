import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { coursesData } from '../../data';

const RandomCourse = () => {
  let { courseId } = useParams();

  const [openTab, setOpenTab] = useState(1);

  const course = coursesData.find((c) => c.short == courseId);

  return (
    <main className="">
      <div className=" h-[23vh] md:h-[30vh] w-full shadow-sm ">
        <div className="flex justify-center items-center h-full rounded-lg w-full bg-gradient-to-r from-indigo-900 text-gray-200">
          <h3 className="text-lg font-bold">
            {course.code}: <span className="font-normal">{course.name}</span>
          </h3>
        </div>
      </div>

      <div className="max-w-5xl m-auto flex flex-col gap-3 pt-5">
        <section className="w-full mx-auto space-y-5">
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              Course description
            </summary>
            <div className="mt-3">
              {course.desc.map((d) => (
                <p>{d}</p>
              ))}
            </div>
          </details>
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              Topics
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">
                {course.topics.map((topic) => topic).join(', ')}
              </p>
            </div>
          </details>
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              Lecturers
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">None Assigned yet</p>
            </div>
          </details>
          <details className="rounded-lg shadow-sm px-3 py-2">
            <summary className="text-xl py-1 text-yellow-500 font-bold">
              Lecture Materials
            </summary>
            <div className="mt-3">
              <p className="text-sm leading-normal">None yet</p>
            </div>
          </details>
        </section>
      </div>
    </main>
  );
};

export default RandomCourse;
