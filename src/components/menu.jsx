import { NavLink } from 'react-router-dom';
import {
  faBraille,
  faHome,
  faMicrophone,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <nav className="md:hidden container mx-auto menu-navigation border-t-4">
      <ul className="nav-list items-center">
        <li className="nav-item">
          <NavLink to={'/'}>
            <FontAwesomeIcon icon={faHome} /> <span>Home</span>
          </NavLink>
        </li>
        <li className="nav-item h-[3.11rem] flex-shrink-0 max-w-[3.11rem] flex text-center items-center justify-center rounded-full shadow-md">
          <NavLink to={'/chat'}>
            <FontAwesomeIcon icon={faMicrophone} size="xl" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/explore'}>
            <FontAwesomeIcon icon={faBraille} /> <span>Explore</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
