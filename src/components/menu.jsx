import { NavLink } from 'react-router-dom';

import { faUser } from '@fortawesome/free-regular-svg-icons';
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
          <NavLink to={'/credentials'}>
            <FontAwesomeIcon icon={faBook} /> <span> Credentials</span>
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/profile'}>
            <FontAwesomeIcon icon={faUser} /> <span>Profile</span>{' '}
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
