const Login = () => {
  return (
    <main id="LoginPage">
      <section className="container mx-auto">
        <div className="form-container w-full max-w-sm mx-auto">
          <div className="form-title">
            <div className="logo">
              <a href="/">My EduPortal</a>
            </div>
          </div>
          <form action="/">
            <div className="input-container">
              <label htmlFor="UserName">Username</label>
              <input type="text" name="UserName" />
            </div>
            <div className="input-container">
              <label htmlFor="password">Password</label>
              <input type="password" name="password" />
            </div>
            <div className="checkbox flex gap-1">
              <input type="checkbox" name="rememberMe" id="rememberMe" />
              <label htmlFor="rememberMe">Remember me</label>
            </div>

            <button type="submit">Login</button>
          </form>
        </div>
      </section>
    </main>
  );
};
export default Login;
