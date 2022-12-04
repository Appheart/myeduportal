const userError = ({ illustration, message, cta }) => {
  return (
    <section className="container mx-auto errorPage">
      <div className="img-container">
        <img src={`/images/${illustration}`} alt="userError" />
      </div>
      <p>{message}</p>

      <button>{cta}</button>
    </section>
  );
};
export default userError;
