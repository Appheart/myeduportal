import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faBars,
  faBell,
  faRightFromBracket,
  faShop,
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

        <div className="flex gap-5 items-center ">
          <LinkBtn link={'/payment'}>
            <FontAwesomeIcon icon={faShop} />
          </LinkBtn>

          <div
            className={
              notifyOpen
                ? 'notification open rounded-full w-3 h-3  border-cyan-400'
                : 'notification rounded-full w-3 h-3  border-cyan-400'
            }
            onClick={toggleNotification}
          >
            <FontAwesomeIcon icon={faBell} className="" />
            <span>3</span>

            <NotificationDrawer
              toggleNotification={toggleNotification}
              notifyOpen={notifyOpen}
            />
          </div>

          <div className="btn" onClick={Logout}>
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </div>
        </div>
      </div>
    </header>
  );
};
export default Header;
