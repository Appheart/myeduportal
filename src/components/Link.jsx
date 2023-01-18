import { Link } from 'react-router-dom';

const LinkBtn = ({ link, children }) => {
  return (
    <>
      {!link.includes('https') ? (
        <Link to={link}> {children}</Link>
      ) : (
        <a href={link} target="_blank" rel="noopener noreferrer">
          {children}
        </a>
      )}
    </>
  );
};

export default LinkBtn;
