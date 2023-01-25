import { faCalendarDays } from '@fortawesome/free-regular-svg-icons';
import { faGraduationCap, faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Button } from '@mui/material';
import { useAuth } from '../../app/hooks/useAuth';
import { LinkBtn } from '../../components';

const Profile = () => {
  const { user, logout } = useAuth();

  return (
    <main>
      <div className=" h-[23vh] md:h-[30vh] w-full">
        <div className="drawn-bg bg-[url('https://img.freepik.com/premium-vector/painted-background-multicoloured-palette_23-2148427592.jpg?w=800')] h-full w-full bg-center bg-cover "></div>
      </div>
      <fieldset className="-mt-[9vh] flex flex-col gap-5 py-5 border-b-2 border-red-300">
        <div className="flex items-center gap-3">
          <div className="profile__image--container h-[8rem] w-[8rem] shadow-md rounded-full overflow-hidden">
            <img
              loading="lazy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsTQFb0kp8I5e3JYPbVszsdPRsHBp3MM0snd7GltdQQ&s"
              alt="Profile image"
              height={100}
              width={100}
              className={'w-full h-full object-cover'}
            />
          </div>
          <div className="flex flex-col mt-9 leading-tight">
            <h3 className="font-bold text-xl">{user?.name}</h3>
            <p className="text-xs">Robotics Engineering</p>
            <p className="text-xs">@username</p>
          </div>
        </div>
      </fieldset>

      <section className="">
        {/*  */}
        <div className="ontainer mx-auto rounded-lg grid grid-cols-1 md:grid-cols-2 gap-3 p-3">
          <fieldset className="fieldset flex flex-col justify-between gap-3 relative bg-white ">
            <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
              <LinkBtn
                link={'/'}
                className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
              >
                <FontAwesomeIcon icon={faPenAlt} />
              </LinkBtn>
            </div>
            <h3 className="font-bold text-green-800">Edu Data</h3>
            <div className="grid grid-cols-2 gap-2 text-sm text-gray-600">
              <div className="flex flex-col justify-between ">
                <div className="">
                  <p className="font-bold"> Institution:</p>
                </div>
                <div className="w-full flex justify-start">
                  <LinkBtn link={'/institutions/UNN'} className="font-mono">
                    University of Nigeria, Nsukka
                  </LinkBtn>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <div className="">
                  <p className="font-bold"> Department:</p>
                </div>
                <div className="w-full flex justify-start">
                  <p className="font-mono">Robotics Engineering</p>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <div className="">
                  <p className="font-bold"> JAMB:</p>
                </div>
                <div className="w-full flex justify-start">
                  <p className="font-mono">202033921000AB</p>
                </div>
              </div>
              <div className="flex flex-col justify-between ">
                <div className="">
                  <p className="font-bold"> Matric No.</p>
                </div>
                <div className="w-full flex justify-start">
                  <p className="font-mono">349982992AB</p>
                </div>
              </div>
            </div>
          </fieldset>

          {/* My Courses */}
          <fieldset className="fieldset bg-gradient-to-r from-sky-100 to-indigo-200 c flex flex-col gap-3 relative bg-white ">
            <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
              <LinkBtn
                link={'/'}
                className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
              >
                <FontAwesomeIcon icon={faPenAlt} />
              </LinkBtn>
            </div>
            <h3 className="font-bold text-green-800 flex gap-3 items-center">
              <div className="icon">
                <FontAwesomeIcon icon={faGraduationCap} />
              </div>
              <p>My Courses</p>
            </h3>
            <div className="flex flex-wrap gap-2 text-xs  text-gray-600">
              <LinkBtn
                link={`/courses/BIO101`}
                className={'p-2 bg-yellow-50 rounded-md font-bold'}
              >
                Bio 101
              </LinkBtn>
              <LinkBtn
                link={'/profile'}
                className={'p-2 bg-yellow-50 rounded-md font-bold'}
              >
                COS 101
              </LinkBtn>
              <LinkBtn
                link={'/profile'}
                className={'p-2 bg-yellow-50 rounded-md font-bold'}
              >
                COS 101
              </LinkBtn>
              <LinkBtn
                link={'/profile'}
                className={'p-2 bg-yellow-50 rounded-md font-bold'}
              >
                COS 101
              </LinkBtn>
            </div>
          </fieldset>
        </div>

        {/*  */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {/* Time table */}
          <fieldset className="fieldset flex flex-col gap-3 relative bg-white ">
            <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
              <LinkBtn
                link={'/'}
                className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-xs text-center rounded-md gap-3 items-center justify-center"
              >
                <FontAwesomeIcon icon={faPenAlt} />
              </LinkBtn>
            </div>
            <h3 className="font-bold text-green-800 flex items-center gap-3">
              <div className="icon">
                <FontAwesomeIcon icon={faCalendarDays} />
              </div>
              <p>My Timetable</p>
            </h3>
            <div className="w-full mx-auto space-y-5">
              {[
                'Monday',
                'Tuesday',
                'Wednesday',
                'Thursday',
                'Friday',
                'Saturday',
                'Sunday',
              ].map((day) => (
                <details className="rounded-lg shadow-sm py-2">
                  <summary className="text-md py-2 text-gray-50 bg-yellow-700 px-3 font-bold rounded-tl-md rounded-tr-md">
                    {day}
                  </summary>
                  <div className="mt-3 px-3">
                    <p className="text-sm leading-normal">None yet</p>
                  </div>
                </details>
              ))}
            </div>
          </fieldset>
        </div>
        <button
          className="max-w- mt-5 mb-5 px-4 py-2 flex bg-red-700 text-white rounded-md mx-auto"
          onClick={logout}
        >
          Logout
        </button>
      </section>
    </main>
  );
};
export default Profile;
