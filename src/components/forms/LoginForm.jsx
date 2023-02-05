const LoginForm = ({ handleSubmit }) => {
  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <input
        type="text"
        id=""
        name="hidden"
        className="appearance-none hidden"
      />

      <div className="flex flex-col gap-1">
        <input
          className="w-full px-3 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker text-sm"
          type="text"
          name="username"
          placeholder="Username"
          required
        />
        <small className="text-xs px-2 bg-green-300 w-max rounded-xl">
          Use <b>unn</b> as username
        </small>
      </div>
      <div className="flex flex-col gap-1">
        <input
          className="w-full px-3 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker text-sm"
          type="password"
          name="password"
          placeholder="Password"
          required
        />
        <small className="text-xs px-2 bg-green-300 w-max rounded-xl">
          Use <b>unn</b> as password
        </small>
      </div>
      <div className="flex items-center justify-between">
        {/* <!-- Remember me toggle --> */}
        <label className="flex items-center">
          <div className="relative inline-flex items-center">
            <input
              type="checkbox"
              name="remembr_me"
              className="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none toggle checked:bg-primary-light disabled:bg-gray-200 focus:outline-none text-sm"
            />
            <span className="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
          </div>
          <span className="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
            Remember me
          </span>
        </label>

        {/* Forgot password */}
        <a
          href="#"
          className="text-xs text-green-600 font-bold hover:underline"
        >
          Forgot Password?
        </a>
      </div>

      {/* Login button */}
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-green-700 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
