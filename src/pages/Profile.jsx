import { faMoon } from '@fortawesome/free-regular-svg-icons';
import { faPen, faPenAlt, faPrint } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { UserContext } from '../App';
import { LinkBtn, UserError, UserErrorMessage } from '../components';
import { coursesData } from '../data';

const Profile = () => {
  const { userName, instituteSync } = useSelector((state) => state.auth);

  const user = useContext(UserContext);

  return (
    <main>
      {!userName ? (
        <UserError message={'Profile not setup'} cta={'Setup profile'} />
      ) : (
        <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
          <fieldset className="fieldset flex  flex-col gap-5 py-5">
            <div className="flex items-center gap-5">
              <div className="profile__image--container h-[8rem] w-[8rem] shadow-md rounded-full overflow-hidden">
                <img src="" alt="Profile image" height={100} width={100} />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">{user?.name}</h3>
                <p className="text-sm">100 Level</p>
                <p className="text-sm">Robotics Engineering</p>
                <p className="text-sm">University of Nigeria, Nsukka</p>
              </div>
            </div>

            <div className="flex gap-2 justify-between">
              <LinkBtn
                link={'/'}
                className="bg-green-300 text-gray-900 w-full flex px-2 py-1 text-sm text-center rounded-md gap-5 items-center justify-center"
              >
                <FontAwesomeIcon icon={faPenAlt} />
                Edit
              </LinkBtn>
              <LinkBtn
                link={'/'}
                className="w-full bg-green-500 text-white flex  px-2 py-1 text-sm text-center rounded-md items-center gap-5 justify-center"
              >
                <FontAwesomeIcon icon={faMoon} />
                Change Theme
              </LinkBtn>
            </div>
          </fieldset>

          <fieldset className="fieldset flex flex-col justify-between gap-5 ">
            <table class="table-auto gap-2">
              <thead className="text-left text-sm mb-2">
                <th>Course</th>
                <th>Title</th>
              </thead>
              <tbody>
                {coursesData.map((course) => (
                  <tr className="text-sm mb-2">
                    <td>{course.name}</td>
                    <td>{course.title}</td>
                    <td>
                      <LinkBtn link={`/courses/${course.short}`}>
                        View Details
                      </LinkBtn>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="flex gap-2 justify-between">
              <LinkBtn
                link={'/'}
                className="bg-green-300 text-gray-900 w-full flex px-2 py-1 text-sm text-center rounded-md gap-5 items-center justify-center"
              >
                <FontAwesomeIcon icon={faPenAlt} />
                Edit
              </LinkBtn>
              <LinkBtn
                link={'/'}
                className="w-full bg-green-500 text-white flex  px-2 py-1 text-sm text-center rounded-md items-center gap-5 justify-center"
              >
                <FontAwesomeIcon icon={faPrint} /> <span>Print</span>
              </LinkBtn>
            </div>
          </fieldset>
        </section>
      )}
    </main>
  );
};
export default Profile;
