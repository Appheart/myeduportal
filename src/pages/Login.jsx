import LoginForm from '../components/forms/LoginForm';

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
          <LoginForm />
        </div>
      </section>
    </main>
  );
};
export default Login;
