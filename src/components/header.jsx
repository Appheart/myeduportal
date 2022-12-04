import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header>
      <div className="container mx-auto flex justify-between">
        <div className="logo">
          <Link to="/">MyEduPortal</Link>
        </div>
        <a href="/login" className="btn">
          Logout
        </a>
      </div>
    </header>
  );
};
export default Header;
