import React, { useState } from 'react';
import GPInputField from './GPInputField';

function calculateGPA(classes) {
  let totalCreditHours = 0;
  let totalGradePoints = 0;

  classes.forEach(({ creditHours, grade }) => {
    totalCreditHours += creditHours;
    totalGradePoints += creditHours * grade;
  });

  return totalGradePoints / totalCreditHours;
}

function GPAcalculator() {
  const [classes, setClasses] = useState([
    { course: '', creditHours: 1.0, grade: 5.0 },
  ]);

  const [gpa, setGPA] = useState(calculateGPA(classes));

  const handleClassChange = (index) => (event) => {
    const updatedClasses = [...classes];
    updatedClasses[index][event.target.name] = Number(event.target.value);
    setClasses(updatedClasses);
    setGPA(calculateGPA(updatedClasses));
  };

  const handleAddClass = () => {
    setClasses([...classes, { course: '', creditHours: 1, grade: 1.0 }]);
    setGPA(calculateGPA(updatedClasses));
  };

  const handleRemoveClass = (index) => () => {
    const updatedClasses = [...classes];
    updatedClasses.splice(index, 1);
    setClasses(updatedClasses);
    setGPA(calculateGPA(updatedClasses));
  };

  return (
    <div>
      <div className="flex flex-col gap-1 w-full">
        <div className="flex w-full gap-3 font-bold">
          <p className="w-full">Course</p>
          <p className="w-full max-w-[60px]">Unit</p>
          <p className="w-full max-w-[60px]">Grade</p>
          <div className="w-full max-w-[20px]"></div>
        </div>
        {classes.map((c, i) => (
          <form key={i}>
            <GPInputField
              course={c}
              index={i}
              handleRemoveClass={handleRemoveClass}
              handleClassChange={handleClassChange}
            />
          </form>
        ))}
        <div className="flex mt-5 p-2 w-full gap-3 justify-center items-center">
          <button
            onClick={handleAddClass}
            className={
              'flex justify-center items-center py-1 px-3 border-green-700 bg-transparent text-green-700 '
            }
          >
            Add Course
          </button>
          <button
            type="submit"
            className="py-1 px-3 bg-green-700 text-yellow-50"
          >
            Calculate GP
          </button>
          {/* <button>Save GP</button> */}
        </div>
      </div>
      <p className="w-full mt-4 text-xl items-center justify-center text-center">
        GPA: {gpa}
      </p>
    </div>
  );
}

export default GPAcalculator;
