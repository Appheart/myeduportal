import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <Link to="/">MyEduPortal</Link>
        </div>

        <a href="/login" className="btn">
          <FontAwesomeIcon icon={faRightFromBracket} />
          Logout
        </a>
      </div>
    </header>
  );
};
export default Header;
