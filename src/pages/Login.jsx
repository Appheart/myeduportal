import LoginForm from '../components/forms/LoginForm';

const Login = () => {
  return (
    <div
      id="LoginPage"
      class="flex flex-col items-center justify-center p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light"
    >
      <div className="logo">
        <a href="/">My EduPortal</a>
      </div>
      <main>
        <div class="w-full max-w-sm px-4 py-6 space-y-6 bg-white rounded-md dark:bg-darker">
          <h1 class="text-xl font-semibold text-center">Login</h1>

          <LoginForm />

          {/* <!-- Or --> */}
          <div class="flex items-center justify-center space-x-2 flex-nowrap">
            <span class="w-20 h-px bg-gray-300"></span>
            <span>OR</span>
            <span class="w-20 h-px bg-gray-300"></span>
          </div>

          {/* <!-- Social login links --> */}

          {/* <!-- Register link --> */}
          <div class="text-sm text-gray-600 dark:text-gray-400">
            Don't have an account yet?{' '}
            <a href="register.html" class="text-blue-600 hover:underline">
              Register
            </a>
          </div>
        </div>
      </main>
    </div>
  );
};

<div class="flex flex-col items-center justify-center min-h-screen p-4 space-y-4 antialiased text-gray-900 bg-gray-100 dark:bg-dark dark:text-light">
  {/* <!-- Brand --> */}
  <a
    href="../index.html"
    class="inline-block mb-6 text-3xl font-bold tracking-wider uppercase text-primary-dark dark:text-light"
  >
    K-WD
  </a>
</div>;
export default Login;
