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
        <input
          type="number"
          min={1}
          max={6}
          maxLength={1}
          className="px-2 py-1 border rounded-xl w-full max-w-[60px]"
          name="creditHours"
          value={course.creditHours}
          onChange={handleClassChange(index)}
        />
        <input
          type="number"
          maxLength={1}
          className="px-2 py-1 border rounded-xl w-full max-w-[60px] text-center"
          name="grade"
          value={course.grade}
          onChange={handleClassChange(index)}
        />
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
