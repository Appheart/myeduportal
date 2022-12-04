import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBell, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between items-center">
        <div className="logo">
          <Link to="/">MyEduPortal</Link>
        </div>

        <div className="flex gap-5 items-center ">
          <div className="notification rounded-full w-5 h-5 p-1 border-cyan-400">
            <FontAwesomeIcon icon={faBell} className="" size="12" />
            <span>3</span>
          </div>

          <a href="/login" className="btn">
            <FontAwesomeIcon icon={faRightFromBracket} />
            Logout
          </a>
        </div>
      </div>
    </header>
  );
};
export default Header;
