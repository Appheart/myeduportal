import { faHome } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Menu = () => {
  return (
    <nav className="container mx-auto menu-navigation">
      <ul className="nav-list">
        <li className="nav-item">
          <FontAwesomeIcon icon={faHome} /> Home
        </li>
        <li className="nav-item">Credentials</li>
        <li className="nav-item">Profile</li>
      </ul>
    </nav>
  );
};
export default Menu;
