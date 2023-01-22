import logoImg from '../assets/logo.png';
import LinkBtn from './Link';

const Logo = () => {
  return (
    <LinkBtn
      link={'/'}
      className="logo flex gap-2 items-center justify-center font-bold text-[#589685]"
    >
      <img loading="lazy" src={logoImg} height="30" width={'30'} /> Edupora
    </LinkBtn>
  );
};

export default Logo;
