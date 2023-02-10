import { NavLink } from 'react-router-dom';
import { faMessage, faSun } from '@fortawesome/free-regular-svg-icons';
import { faHome, faMicrophone } from '@fortawesome/free-solid-svg-icons';
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
        <li className="nav-item  h-[4rem] max-w-[4rem] flex text-center items-center justify-center rounded-full shadow-md">
          <NavLink to={'/chat'}>
            <FontAwesomeIcon icon={faMicrophone} size="xl" />
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to={'/explore'}>
            <FontAwesomeIcon icon={faSun} /> <span>Explore</span>
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
