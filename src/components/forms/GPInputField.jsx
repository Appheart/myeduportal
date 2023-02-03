import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const GPInputField = ({
  course,
  index,
  handleRemoveClass,
  handleClassChange,
}) => {
  return (
    <div className="flex gap-2 items-center">
      <div className="flex w-full gap-3 text-sm">
        <input
          type="text"
          className="px-2 py-1 border rounded-xl  w-full"
          placeholder={`Subject ${index + 1} `}
          name="course"
          value={course.course}
          onChange={handleClassChange(index)}
        />
        <select
          name="creditHours"
          value={course.creditHours}
          onChange={handleClassChange(index)}
          className="px-2 py-1 border rounded-xl w-full max-w-[60px]"
        >
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="6"></option>
        </select>

        <select
          name="grade"
          value={course.grade}
          onChange={handleClassChange(index)}
          className="px-2 py-1 border rounded-xl w-full max-w-[60px]"
        >
          <option value="5">A</option>
          <option value="4">B</option>
          <option value="3">C</option>
          <option value="2">D</option>
          <option value="1">E</option>
          <option value="0">F</option>
        </select>
      </div>

      <div
        onClick={handleRemoveClass(index)}
        className="deleteAction bg-transparent border border-red-700 hover:text-white cursor-pointer hover:bg-red-600 text-red-600 text-xs p-1 px-2 rounded-lg"
      >
        <FontAwesomeIcon icon={faTrash} />
      </div>
    </div>
  );
};

export default GPInputField;
