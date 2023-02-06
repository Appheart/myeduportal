import { useAuth } from '../../app/hooks/useAuth';
import { LinkBtn } from '../../components';
import LoginForm from '../../components/forms/LoginForm';
import Logo from '../../components/Logo';
import { usersData } from '../../data';

const Login = () => {
  const { login } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();

    const data = new FormData(e.currentTarget);

    let username = data.get('username').trim();
    let password = data.get('password');

    if (!username || !password) {
      alert('Error signing in!');
      return false;
    }

    const checkUser = usersData.find(
      (user) =>
        user.userName == username.toLowerCase() && user.password === password
    );

    if (!checkUser) {
      alert('Invalid credentials');
      return false;
    }

    login({ username, password });
  };

  return (
    <main
      id="LoginPage"
      className="flex flex-col items-center justify-center p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
    >
      <div className="w-full max-w-sm px-4 py-[5%] space-y-5 bg-white rounded-md dark:bg-darker">
        <Logo />

        <LoginForm handleSubmit={handleSubmit} />

        {/* <!-- Or --> */}
        <div className="flex items-center justify-center space-x-2 flex-nowrap">
          <span className="w-20 h-px bg-gray-300"></span>
          <span>OR</span>
          <span className="w-20 h-px bg-gray-300"></span>
        </div>

        {/* <!-- Social login links --> */}

        {/* <!-- Register link --> */}
        <LinkBtn
          link={'/'}
          className="text-sm text-center flex underline justify-center text-gray-600 dark:text-gray-400"
        >
          Get onboard
        </LinkBtn>
      </div>
    </main>
  );
};

<div className="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
  {/* <!-- Brand --> */}
  <a
    href="../index.html"
    className="inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
  ></a>
</div>;
export default Login;
