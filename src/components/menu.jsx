import { faUser } from '@fortawesome/free-regular-svg-icons';
import { faBook, faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <nav className="container mx-auto menu-navigation">
      <ul className="nav-list">
        <li className="nav-item active">
          <FontAwesomeIcon icon={faHome} /> <span>Home</span>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faBook} /> <span> Credentials</span>
        </li>
        <li className="nav-item">
          <FontAwesomeIcon icon={faUser} /> <span>Profile</span>{' '}
        </li>
      </ul>
    </nav>
  );
};
export default Menu;
