import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBell,
  faEnvelopeOpenText,
  faShop,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import NotificationDrawer from './notificationDrawer';
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
      <div className="flex justify-between items-center w-full">
        <div className="flex gap-5 items-center">
          <Logo />
        </div>

        <LinkBtn link={'/profile'} className="flex gap-4 items-center ">
          <div className="notification rounded-full overflow-hidden">
            <img
              loading="lazy"
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfsTQFb0kp8I5e3JYPbVszsdPRsHBp3MM0snd7GltdQQ&s "
              alt=""
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
            <FontAwesomeIcon icon={faEnvelopeOpenText} className="" />
            <span>3</span>

            <NotificationDrawer
              toggleNotification={toggleNotification}
              notifyOpen={notifyOpen}
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
        </LinkBtn>
      </div>
    </header>
  );
};
export default Header;
