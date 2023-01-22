import { faPenAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { UserContext } from '../../App';
import { LinkBtn, UserError } from '../../components';
import { coursesData } from '../../data';

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

          <section className="bg-gradient-to-r from-sky-100 to-indigo-200 container mx-auto grid grid-cols-1 md:grid-cols-2 gap-3 p-3 rounded-lg">
            {/*  */}

            <fieldset className="fieldset flex flex-col justify-between gap-5 relative bg-white ">
              <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
                <LinkBtn
                  link={'/'}
                  className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-sm text-center rounded-md gap-3 items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPenAlt} />
                  Edit
                </LinkBtn>
              </div>
              <h3 className="font-bold text-green-800">Bio Data:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm">
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> Matric:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> JAMB:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> O'Level:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> NIN:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
              </div>
            </fieldset>

            {/*  */}
            <fieldset className="fieldset flex flex-col justify-between gap-5 relative  bg-white">
              <div className="school_logo absolute top-3 right-3 shadow-sm rounded-lg">
                <LinkBtn
                  link={'/'}
                  className="bg-green-300 text-gray-900 max-w-max ml-auto flex px-2 py-2 text-sm text-center rounded-md gap-3 items-center justify-center"
                >
                  <FontAwesomeIcon icon={faPenAlt} />
                  Edit
                </LinkBtn>
              </div>
              <h3 className="font-bold text-green-8">Contact:</h3>
              <div className="grid grid-cols-2 gap-2 text-sm ">
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> Phone:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> Whatsapp:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> Email:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
                <div className="flex flex-col justify-between ">
                  <div className="">
                    <p className="font-bold"> Facebook:</p>
                  </div>
                  <div className="w-full flex justify-start">
                    <p className="font-mono">Nil</p>
                  </div>
                </div>
              </div>
            </fieldset>
          </section>
        </>
      )}
    </main>
  );
};
export default Profile;
