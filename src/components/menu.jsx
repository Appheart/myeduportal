import { NavLink } from 'react-router-dom';

import { faStar, faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <nav className="container mx-auto menu-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item ">
          <NavLink to={'/forum'}>
            <FontAwesomeIcon icon={faStar} /> <span> Chat</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/explore'}>
            <FontAwesomeIcon icon={faUser} /> <span>Explore</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
