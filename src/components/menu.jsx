import { NavLink } from 'react-router-dom';

import {
  faMessage,
  faStar,
  faSun,
  faUser,
} from '@fortawesome/free-regular-svg-icons';
import { faBook, faHome, faWallet } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <nav className="container mx-auto menu-navigation border-t-4">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to={'/chat'}>
            <FontAwesomeIcon icon={faMessage} /> <span> Chat</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/explore'}>
            <FontAwesomeIcon icon={faSun} /> <span>Explore</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/walleti'}>
            <FontAwesomeIcon icon={faWallet} /> <span>Walleti</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
