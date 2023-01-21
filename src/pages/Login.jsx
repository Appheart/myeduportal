import { LinkBtn } from '../components';
import LoginForm from '../components/forms/LoginForm';
import Logo from '../components/Logo';

const Login = () => {
  return (
    <div
      id="LoginPage"
      className="flex flex-col items-center justify-center p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
    >
      <main>
        <div className="w-full max-w-sm px-4 py-6 space-y-5 bg-white rounded-md dark:bg-darker">
          <Logo />

          <LoginForm />

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
    </div>
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
