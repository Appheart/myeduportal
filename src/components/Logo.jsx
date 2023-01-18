import logoImg from '../assets/logo.png';

const Logo = () => {
  return (
    <div className="logo flex gap-2 items-center justify-center font-bold text-[#589685]">
      <img src={logoImg} height="30" width={'30'} /> Edupora
    </div>
  );
};

export default Logo;
