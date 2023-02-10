import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faSearch } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';
import Logo from './Logo';
import LinkBtn from './Link';

const Header = () => {
  const [notifyOpen, setNotifyOpen] = useState(false);

  const toggleNotification = () => {
    setNotifyOpen(!notifyOpen);
  };

  const Logout = (e) => {
    e.preventDefault();
    navigate('/login');
  };
  return (
    <header>
      <div className="flex justify-between items-center w-full px-2">
        <div className="flex gap-5 items-center">
          <Logo />
        </div>

        <div className="flex gap-5 items-center">
          <nav className="hidden md:flex gap-3 font-bold text-gray-700">
            <LinkBtn link="/" className={'font-bold text-gray-700'}>
              Quizzes
            </LinkBtn>
            <LinkBtn link="/" className={'font-bold text-gray-700'}>
              Videos
            </LinkBtn>
            <LinkBtn link="/" className={'font-bold text-gray-700'}>
              News
            </LinkBtn>
            <LinkBtn link="/" className={'font-bold text-gray-700'}>
              Shopping
            </LinkBtn>
            <LinkBtn link="/" className={'font-bold text-gray-700'}>
              Fudera
            </LinkBtn>
          </nav>

          <div className="flex gap-3 items-center">
            <div className="icon search-icon border border-green-200 p-1 rounded-full h-9 w-9 flex items-center justify-center hover:bg-green-600 cursor-pointer mr-4 hover:text-white">
              <FontAwesomeIcon
                icon={faSearch}
                size="lg"
                className="text-green-600"
              />
            </div>

            <div
              className={
                notifyOpen
                  ? 'notification open rounded-full w-3 h-3'
                  : 'notification rounded-full w-3 h-3'
              }
              onClick={toggleNotification}
            >
              <FontAwesomeIcon icon={faBell} className="" />
              <span>3</span>
            </div>

            <LinkBtn
              link={'/profile'}
              className="notification rounded-full overflow-hidden"
            >
              <img
                loading="lazy"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsTQFb0kp8I5e3JYPbVszsdPRsHBp3MM0snd7GltdQQ&s "
                alt=""
              />
            </LinkBtn>
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
