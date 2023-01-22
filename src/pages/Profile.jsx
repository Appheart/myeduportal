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

  const courses = coursesData
    .filter((item) => user.courses.includes(item.short))
    .sort(function (a, b) {
      if (a.short < b.short) {
        return -1;
      }

      if (a.short > b.short) {
        return 1;
      }

      return 0;
    });

  return (
    <main>
      {!userName ? (
        <UserError message={'Profile not setup'} cta={'Setup profile'} />
      ) : (
        <>
          <div className="drawn-bg bg-[url('https://img.freepik.com/premium-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=800')] h-[30vh] w-full bg-center bg-cover "></div>

          <fieldset className="-mt-[10vh] flex flex-col gap-5 py-5">
            <div className="flex items-end gap-5">
              <div className="profile__image--container  h-[8rem] w-[8rem] shadow-md rounded-full overflow-hidden">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsTQFb0kp8I5e3JYPbVszsdPRsHBp3MM0snd7GltdQQ&s"
                  alt="Profile image"
                  height={100}
                  width={100}
                  className={'w-full h-full object-cover'}
                />
              </div>
              <div className="flex flex-col">
                <h3 className="font-bold text-xl">{user?.name}</h3>
                <p className="text-sm">2021/234544</p>
                <p className="text-sm">Robotics Engineering</p>
              </div>
            </div>
          </fieldset>

          <section className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset flex flex-col justify-between gap-5 ">
              <table class="table-auto gap-2 min-h-[10rem] justify-self-start">
                <thead className="text-left text-sm mb-2">
                  <th>Course</th>
                  <th>Title</th>
                </thead>
                <tbody className="overflow-y-scroll ">
                  {courses.map((course) => (
                    <tr className="text-sm mb-2">
                      <td>{course.code}</td>
                      <td>{course.name}</td>
                      <td>
                        <LinkBtn link={`/courses/${course.short}`}>
                          View
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
            <h3>My Credentials</h3>

            <UserError
              message={"You haven't uploaded any files"}
              cta={'Get started now'}
            />
            <fieldset className="fieldset flex flex-col justify-between gap-5 ">
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
                  className="w-full bg-green-500  text-white flex  px-2 py-1 text-sm text-center rounded-md items-center gap-5 justify-center"
                >
                  <FontAwesomeIcon icon={faPrint} /> <span>Print</span>
                </LinkBtn>
              </div>
            </fieldset>
          </section>
        </>
      )}
    </main>
  );
};
export default Profile;
