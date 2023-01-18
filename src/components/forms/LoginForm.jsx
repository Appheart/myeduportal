import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../app/features/auth/AuthSlice';
import { usersData } from '../../data';

const LoginForm = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    username: '',
    password: '',
  });

  const onUpdateField = (e) => {
    const nextFormState = {
      ...form,
      [e.target.name]: e.target.value,
    };
    setForm(nextFormState);
  };

  const handleLogin = (e) => {
    e.preventDefault();

    if (!form.username || !form.password) {
      alert('Error signing in!');
      return false;
    }

    const checkUser = usersData.find(
      (user) =>
        user.userName == form.username && user.password === form.password
    );

    if (!checkUser) {
      alert('Invalid credentials');
      return false;
    }

    dispatch(login());

    navigate('/');
  };

  return (
    <form onSubmit={handleLogin} class="space-y-6">
      <input
        class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
        type="text"
        name="username"
        placeholder="Username"
        required
        onChange={onUpdateField}
      />
      <input
        class="w-full px-4 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker"
        type="password"
        name="password"
        placeholder="Password"
        required
        onChange={onUpdateField}
      />
      <div class="flex items-center justify-between">
        {/* <!-- Remember me toggle --> */}
        <label class="flex items-center">
          <div class="relative inline-flex items-center">
            <input
              type="checkbox"
              name="remembr_me"
              class="w-10 h-4 transition bg-gray-200 border-none rounded-full shadow-inner outline-none appearance-none toggle checked:bg-primary-light disabled:bg-gray-200 focus:outline-none"
            />
            <span class="absolute top-0 left-0 w-4 h-4 transition-all transform scale-150 bg-white rounded-full shadow-sm"></span>
          </div>
          <span class="ml-3 text-sm font-normal text-gray-500 dark:text-gray-400">
            Remember me
          </span>
        </label>

        {/* Forgot password */}
        <a href="#" class="text-sm text-blue-600 hover:underline">
          Forgot Password?
        </a>
      </div>

      {/* Login button */}
      <div>
        <button
          type="submit"
          class="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-purple-500 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
        >
          Login
        </button>
      </div>
    </form>
  );
};
export default LoginForm;
