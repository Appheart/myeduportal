import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { login } from '../../app/features/auth/AuthSlice';

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

    dispatch(login());

    navigate('/');
  };

  return (
    <form onSubmit={handleLogin}>
      <div className="input-container">
        <label htmlFor="username">Username</label>
        <input
          type="text"
          name="username"
          onChange={onUpdateField}
          autoComplete="off"
          required
          minLength={3}
        />
      </div>
      <div className="input-container">
        <label htmlFor="password">Password</label>
        <input
          type="password"
          name="password"
          onChange={onUpdateField}
          required
          minLength={8}
        />
      </div>
      <div className="checkbox flex gap-1">
        <input type="checkbox" name="rememberMe" id="rememberMe" />
        <label htmlFor="rememberMe">Remember me</label>
      </div>

      <button type="submit">Login</button>
    </form>
  );
};
export default LoginForm;
