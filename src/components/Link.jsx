import { Link } from 'react-router-dom';

const LinkBtn = ({ link, children, className }) => {
  return (
    <>
      {!link.includes('https') ? (
        <Link to={link} className={className ? className : 'flex'}>
          {children}
        </Link>
      ) : (
        <a
          href={link}
          className={className ? className : ''}
          target="_blank"
          rel="noopener noreferrer"
        >
          {children}
        </a>
      )}
    </>
  );
};

export default LinkBtn;
