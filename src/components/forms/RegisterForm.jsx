import { useEffect, useRef, useState } from 'react';

const USER_REGEX = /^[a-zA-Z][a-zA-Z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;

const RegisterForm = ({ handleSubmit }) => {
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState('');
  const [validName, setValidName] = useState('');
  const [userFocus, setUserFocus] = useState('');

  const [pwd, setPwd] = useState('');
  const [validPwd, setValidPwd] = useState('');
  const [pwdFocus, setPwdFocus] = useState('');

  const [matchPwd, setMatchPwd] = useState('');
  const [validMatch, setValidMatch] = useState('');
  const [matchpwdFocus, setMatchFocus] = useState('');

  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    const result = USER_REGEX.test(user);
    console.log(result);
    console.log(user);
    setValidName(result);
  }, [user]);

  useEffect(() => {
    const result = PWD_REGEX.test(pwd);
    console.log(result);
    console.log(pwd);
    setValidPwd(result);
  }, [pwd, matchPwd]);

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <p
        ref={errRef}
        className={errMsg ? 'errMsg' : 'offscreen'}
        aria-live="assertive"
      >
        {errMsg}
      </p>

      {/* To disable autocomplete */}
      <input
        type="text"
        id=""
        name="hidden"
        className="appearance-none hidden"
      />
      {/*  */}

      <input
        className="w-full px-3 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker text-sm"
        type="text"
        id="username"
        placeholder="Username"
        required
        autoComplete="off"
        ref={userRef}
        onChange={(e) => setUser(e.target.value)}
        aria-invalid={validName ? 'false' : 'true'}
        aria-describedBy="uidnote"
        onFocus={() => setUserFocus(true)}
        onBlur={() => setUserFocus(false)}
      />
      <input
        className="w-full px-3 py-2 border rounded-md dark:bg-darker dark:border-gray-700 focus:outline-none focus:ring focus:ring-primary-100 dark:focus:ring-primary-darker text-sm"
        type="password"
        id="password"
        placeholder="Password"
        required
        autoComplete="off"
        onChange={(e) => setPwd(e.target.value)}
        aria-invalid={validPwd ? 'false' : 'true'}
        aria-describedBy="pwdnote"
        onFocus={() => setPwdFocus(true)}
        onBlur={() => setPwdFocus(false)}
      />
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

      {/* Register button */}
      <div>
        <button
          type="submit"
          className="w-full px-4 py-2 font-medium text-center text-white transition-colors duration-200 rounded-md bg-green-700 hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-1 dark:focus:ring-offset-darker"
        >
          Register
        </button>
      </div>
    </form>
  );
};
export default RegisterForm;
